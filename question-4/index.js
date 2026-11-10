const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

// ==========================================
// PART A - EventEmitter System
// ==========================================
console.log('--- PART A: Starting Registration Event Engine ---');

const registrationEmitter = new EventEmitter();

// Register listener engine configurations
registrationEmitter.on('studentRegistered', (student) => {
    console.log(`\n[EVENT TRIGGERED] Confirmation: Student "${student.name}" (ID: ${student.id}) has been successfully registered!`);
    
    // Schedule asynchronous contextual timeout after ~3 seconds
    setTimeout(() => {
        console.log(`\n[REMINDER] Automated follow-up check for ${student.name} (ID: ${student.id}): Please remember to complete your orientation modules.`);
    }, 3000);
});

// Implementation function logic runner 
function registerStudent(id, name) {
    const newStudent = { id, name };
    // Fire off event matching
    registrationEmitter.emit('studentRegistered', newStudent);
}

// Call operations for two mock users
registerStudent('STU001', 'Ali Khan');
registerStudent('STU002', 'Ayesha Ahmed');


// ==========================================
// PART B - Streams Engine Operations
// ==========================================
// Wait slightly to print stream logs cleanly below the initial synchronous event setups
setTimeout(() => {
    console.log('\n--- PART B: Starting Streams Processing ---');

    const sourcePath = path.join(__dirname, 'large.txt');
    const destinationPath = path.join(__dirname, 'copy.txt');

    // Edge check: verifying mock file presence
    if (!fs.existsSync(sourcePath)) {
        fs.writeFileSync(sourcePath, 'Log Entry Line 1: User Logged In\nLog Entry Line 2: Process Init\nLog Entry Line 3: Connection Saved\n');
    }

    // 1. Reading file by chunk boundaries 
    const readStream = fs.createReadStream(sourcePath, { encoding: 'utf8', highWaterMark: 64 }); // adjusted buffer size to force chunk visibility if file size is small

    readStream.on('data', (chunk) => {
        console.log('\n--- Received New Stream Chunk Data Boundary ---');
        console.log(chunk);
    });

    readStream.on('end', () => {
        console.log('\n[SUCCESS] Finished reading large.txt stream input data buffer.');
    });

    readStream.on('error', (err) => {
        console.error('[ERROR] Error encountered on reading stream components:', err.message);
    });

    // 2. Cloning operations through pipe connectors
    const fileReader = fs.createReadStream(sourcePath);
    const fileWriter = fs.createWriteStream(destinationPath);

    fileReader.on('error', (err) => console.error('[ERROR] Source read error on pipe clone:', err.message));
    fileWriter.on('error', (err) => console.error('[ERROR] Dest write error on pipe clone:', err.message));

    fileWriter.on('finish', () => {
        console.log('\n[PIPE SUCCESS] Activity log cloned successfully to copy.txt via functional pipelines.');
    });

    // Trigger pipe stream actions
    fileReader.pipe(fileWriter);

}, 500);
