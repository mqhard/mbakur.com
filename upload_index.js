import * as ftp from "basic-ftp";
import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function deploy() {
  const client = new ftp.Client();
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    });
    
    console.log("Navigating to /domains/mbakur.com/public_html");
    await client.cd("/domains/mbakur.com/public_html");
    
    const localIndex = resolve(__dirname, "dist/index.html");
    console.log("Uploading index.html...");
    await client.uploadFrom(localIndex, "index.html");
    
    console.log("Finished uploading index.html");
  } catch(e) {
    console.error(e);
  }
  client.close();
}
deploy();
