// server_task1.js
const http = require('http');

const port = 5000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/' || req.url === '/home') {
        res.end('<h1>Welcome to the Home Page</h1><p>This is the home route.</p>');
    } else if (req.url === '/about') {
        res.end('<h1>About Us</h1><p>This is the about page.</p>');
    } else if (req.url === '/contact') {
        res.end('<h1>Contact</h1><p>This is the contact page.</p>');
    } else {
        res.end('<h1>Invalid Request!</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running….`);
});
