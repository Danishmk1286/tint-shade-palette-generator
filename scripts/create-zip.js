import archiver from 'archiver';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distFolder = path.join(__dirname, '..', 'dist');
const zipFileName = 'tint-shades-build.zip';
const zipFilePath = path.join(__dirname, '..', zipFileName);

// Check if dist folder exists
if (!fs.existsSync(distFolder)) {
  console.error('❌ Error: dist folder not found. Please run "npm run build" first.');
  process.exit(1);
}

// Remove existing ZIP file if it exists
if (fs.existsSync(zipFilePath)) {
  fs.unlinkSync(zipFilePath);
  console.log('🗑️  Removed existing ZIP file');
}

// Create a file to stream archive data to
const output = fs.createWriteStream(zipFilePath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', () => {
  const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`✅ ZIP file created successfully!`);
  console.log(`📦 File: ${zipFileName}`);
  console.log(`📊 Size: ${sizeInMB} MB`);
  console.log(`📁 Location: ${zipFilePath}`);
  console.log(`\n🚀 Ready to upload to cPanel!`);
});

// Catch warnings (e.g. stat failures and other non-blocking errors)
archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn('⚠️  Warning:', err);
  } else {
    throw err;
  }
});

// Catch errors
archive.on('error', (err) => {
  console.error('❌ Error creating ZIP:', err);
  process.exit(1);
});

// Pipe archive data to the file
archive.pipe(output);

// Append files from dist folder, putting them in the root of the archive
archive.directory(distFolder, false);

// Finalize the archive (i.e., finish appending files and finalize the ZIP)
archive.finalize();




