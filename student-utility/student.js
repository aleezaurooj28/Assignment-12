// Function to format student introduction
function introduceStudent(name, course) {
    return `Hello! My name is ${name} and I am enrolled in the ${course} course.`;
}

// Function to calculate percentage
function calculatePercentage(obtainedMarks, totalMarks) {
    if (totalMarks === 0) return 0;
    return (obtainedMarks / totalMarks) * 100;
}

// Exporting functions using CommonJS
module.exports = {
    introduceStudent,
    calculatePercentage
};
