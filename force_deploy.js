import * as ftp from "basic-ftp";
import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    });
    
    console.log("Navigating to /public_html");
    await client.cd("/public_html");
    
    const localDistPath = resolve(__dirname, "dist");
    console.log("Uploading dist directly to /public_html...");
    await client.uploadFromDir(localDistPath);
    
    console.log("Finished uploading to /public_html");
  } catch(e) {
    console.error(e);
  }
  client.close();
}
deploy();
