const http = require('http');
const server = http.createServer(onRequest);
const PORT = 8000;
const fs = require('fs');
server.listen(PORT, () => {
    console.log('Server is running on port 8000');
});

function onRequest(req, res) {
    console.log('Request received');
    fs.readFile('index.html', (err, content) => {
        res.setHeader('Content-Type', 'text/html');
        res.write(content);
        res.end();
    });
}
