const { Client } = require('basic-ftp');
const { Writable, Readable } = require('node:stream');
const { createHash } = require('node:crypto');
const hash = value => createHash('sha256').update(value).digest('hex');
const site = 'https://mbakur.com';
const client = new Client(20000);

async function run() {
  for (const key of ['FTP_SERVER', 'FTP_USERNAME', 'FTP_PASSWORD']) {
    if (!process.env[key]) throw new Error(`Missing GitHub Actions secret: ${key}`);
  }
  const response = await fetch(`${site}/?deployment-check=${process.env.GITHUB_RUN_ID}`);
  if (!response.ok) throw new Error(`Website returned HTTP ${response.status}`);
  const liveIndexHash = hash(Buffer.from(await response.arrayBuffer()));
  await client.access({ host: process.env.FTP_SERVER, user: process.env.FTP_USERNAME, password: process.env.FTP_PASSWORD });
  console.log('Hostinger authentication succeeded.');
  const initialDirectory = await client.pwd();
  let verifiedDirectory;
  for (const candidate of ['/domains/mbakur.com/public_html', '/public_html', initialDirectory]) {
    try {
      await client.cd(candidate);
      const chunks = [];
      const sink = new Writable({ write(chunk, encoding, callback) { chunks.push(chunk); callback(); } });
      await client.downloadTo(sink, 'index.html');
      if (hash(Buffer.concat(chunks)) === liveIndexHash) { verifiedDirectory = await client.pwd(); break; }
    } catch (error) {
      if (client.closed) throw error;
    }
  }
  if (!verifiedDirectory) throw new Error('No FTP directory matched the live website. Nothing uploaded.');
  const marker = {
    purpose: 'deployment-connection-check',
    method: 'github-actions',
    createdAt: new Date().toISOString(),
    commit: process.env.GITHUB_SHA,
    runUrl: `https://github.com/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
  };
  const body = JSON.stringify(marker, null, 2) + '\n';
  await client.uploadFrom(Readable.from([body]), 'github-deployment-check.json');
  client.close();
  const check = await fetch(`${site}/github-deployment-check.json?run=${process.env.GITHUB_RUN_ID}`);
  if (!check.ok || (await check.text()) !== body) throw new Error('Public verification of uploaded marker failed.');
  console.log(`Verified automatic deployment: ${site}/github-deployment-check.json`);
  console.log(JSON.stringify(marker));
}
run().catch(error => { console.error(error.message); process.exitCode = 1; }).finally(() => client.close());
