import * as ftp from "basic-ftp";
import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true; // Output detailed logs

  const host = process.env.FTP_HOST;
  const user = process.env.FTP_USER;
  const password = process.env.FTP_PASSWORD;
  const secure = process.env.FTP_SECURE === 'true' || process.env.FTP_SECURE === '1';
  let remoteDir = process.env.FTP_REMOTE_DIR || "public_html";

  // Validate credentials
  if (!host || !user || !password) {
    console.error("❌ Error: Missing FTP credentials in .env file.");
    console.error("Please ensure FTP_HOST, FTP_USER, and FTP_PASSWORD are set.");
    process.exit(1);
  }

  const localDistPath = resolve(__dirname, "dist");
  if (!fs.existsSync(localDistPath)) {
    console.error("❌ Error: 'dist' folder not found. Please run 'npm run build' first.");
    process.exit(1);
  }

  try {
    console.log(`🔌 Connecting to FTP server: ${host}...`);
    await client.access({
      host: host,
      user: user,
      password: password,
      secure: secure,
    });

    console.log("✅ Connected successfully!");

    // Navigate to remote directory
    console.log(`📂 Navigating to remote directory: ${remoteDir}...`);
    await client.ensureDir(remoteDir);

    console.log("🚀 Starting upload of the 'dist' folder...");
    
    // Upload files from local 'dist' to current remote directory
    // basic-ftp's uploadFromDir will overwrite existing files which is what we want for updates
    await client.uploadFromDir(localDistPath);

    console.log("✨ Deployment completed successfully! Your website is updated.");
  } catch (err) {
    console.error("❌ Deployment failed:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
