const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Route matching handler switches
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to Apex College of Technology & Sciences!');
            break;

        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Apex College has been a leading pioneer in modern software engineering instruction since 2012.');
            break;

        case '/courses':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const courses = [
                'Web Development with Node.js',
                'Mobile App Development Flutter',
                'Cloud Native Computing & DevOps'
            ];
            res.end(JSON.stringify(courses, null, 2));
            break;

        case '/students':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const students = [
                { id: 101, name: 'Ali', course: 'Web Development' },
                { id: 102, name: 'Sara', course: 'Cloud Computing' }
            ];
            res.end(JSON.stringify(students, null, 2));
            break;

        default:
            // 404 handler for missing resource lookups
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page Not Found');
            break;
    }
});

// Start the server instance listening engine loops
server.listen(PORT, () => {
    console.log(`Campus Information server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl + C to stop the server operation.');
});
