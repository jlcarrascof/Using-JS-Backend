const http = require('http');
const server = http.createServer(onRequest);
server.listen(8000);
console.log('Server is running on port 8000');

function onRequest(request, response) {
    console.log('Request received');
}
