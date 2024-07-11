const http = require('http');
const server = http.createServer(onRequest);
const PORT = 8000;
server.listen(PORT, () => {
    console.log('Server is running on port 8000');
});

function onRequest(req, res) {
    console.log('Request received');
    res.setHeader('Content-Type', 'text/html');
    res.write('Welcome to the NodeJS course');
    res.end();
}
