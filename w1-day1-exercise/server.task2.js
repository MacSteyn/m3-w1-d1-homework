// server_task2.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method === 'GET') {
        let fileUrl;
        if (req.url === '/' || req.url === '/home') {
            fileUrl = '/home.html';
        } else if (req.url === '/about') {
            fileUrl = '/about.html';
        } else if (req.url === '/contact') {
            fileUrl = '/contact.html';
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Error 404: Page not found</h1>');
            return;
        }

        const filePath = path.resolve('./public' + fileUrl);

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>Server Error</h1>');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<h1>Error 404: ${req.method} not supported</h1>`);
    }
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running….`);
});
