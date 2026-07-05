import * as ftp from "basic-ftp";
import dotenv from "dotenv";
dotenv.config();

async function list() {
  const client = new ftp.Client();
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    });
    console.log("Listing /domains/mbakur.com/public_html");
    console.log(await client.list("/domains/mbakur.com/public_html"));
  } catch(e) {
    console.error(e);
  }
  client.close();
}
list();
