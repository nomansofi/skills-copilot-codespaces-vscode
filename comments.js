const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Comments server is running.\n');
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
