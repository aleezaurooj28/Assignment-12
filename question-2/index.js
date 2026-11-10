const os = require('os');
const path = require('path');
const fs = require('fs');

// 1. Display Computer Information
console.log('--- System Information ---');
console.log(`OS Platform: ${os.platform()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Home Directory: ${os.homedir()}`);
console.log('--------------------------\n');

// 2. Folder and Path Operations
const dataFolderPath = path.join(__dirname, 'data');

// Create 'data' folder if it doesn't exist
if (!fs.existsSync(dataFolderPath)) {
    fs.mkdirSync(dataFolderPath);
}

// Build file path safely using path utility
const notesFilePath = path.join(dataFolderPath, 'student-notes.txt');
const finalFilePath = path.join(dataFolderPath, 'class-notes.txt');
const tempFilePath = path.join(dataFolderPath, 'temp-file.txt');

// Display file name and extension
console.log(`File Name: ${path.basename(notesFilePath)}`);
console.log(`Extension: ${path.extname(notesFilePath)}\n`);

// 3. File Actions executed sequentially to preserve correct logic flows
try {
    // A. Create temporary file
    fs.writeFileSync(tempFilePath, 'This is a temporary file.');
    console.log('Temporary file created.');

    // B. Create the notes file and write 3 lines
    const initialContent = "1. I learned that Node.js uses a single-threaded event loop.\n" +
                           "2. I learned how to use built-in core modules like 'fs' and 'path'.\n" +
                           "3. I learned that CommonJS uses require() and module.exports.\n";
    fs.writeFileSync(notesFilePath, initialContent, 'utf8');
    console.log('--- student-notes.txt Created with Initial Content ---');

    // C. Read and display initial contents
    const content1 = fs.readFileSync(notesFilePath, 'utf8');
    console.log(content1);

    // D. Append one more line
    fs.appendFileSync(notesFilePath, '4. I also learned about streams and asynchronous architectures.\n', 'utf8');
    console.log('--- Updated Content After Appending ---');

    // E. Read and display updated contents
    const content2 = fs.readFileSync(notesFilePath, 'utf8');
    console.log(content2);

    // F. Rename the file to class-notes.txt
    fs.renameSync(notesFilePath, finalFilePath);
    console.log(`Successfully renamed file to: ${path.basename(finalFilePath)}`);

    // G. Remove temporary file *only* after files operations match lifecycle requirements
    fs.unlinkSync(tempFilePath);
    console.log('Temporary file successfully removed.');

} catch (error) {
    console.error('An error occurred during file operations:', error.message);
}
