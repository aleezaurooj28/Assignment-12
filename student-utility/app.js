// Importing functions using CommonJS
const { introduceStudent, calculatePercentage } = require('./student'); 


// Test data
const studentName = 'Ali';
const courseName = 'Web Development';
const obtained = 425;
const total = 500;

// Execute functions
const intro = introduceStudent(studentName, courseName);
const percentage = calculatePercentage(obtained, total);

// Display output
console.log('--- Student Info CLI ---');
console.log(intro);
console.log(`Obtained Marks: ${obtained}/${total}`);
console.log(`Percentage: ${percentage}%`);
console.log(`Current Node.js Version: ${process.version}`);
console.log('------------------------');
