import * as ftp from "basic-ftp";
import dotenv from "dotenv";
dotenv.config();

async function fix() {
  const client = new ftp.Client();
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    });
    console.log("Moving hero-background.mp4 from / to /public_html/...");
    await client.rename("/hero-background.mp4", "/public_html/hero-background.mp4");
    console.log("Moved successfully.");
  } catch(e) {
    console.error(e);
  }
  client.close();
}
fix();
