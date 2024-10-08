const http = require('http');
const server = http.createServer(onRequest);
const PORT = 8000;
const fs = require('fs');
const qs = require('querystring');

server.listen(PORT, () => {
    console.log('Server is running on port 8000');
});

function onRequest(req, res) {
    console.log('Request received');
    fs.readFile('index.html', (err, content) => {
        if (req.url === '/') {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.setStatus = 404;
                    res.write('File not found');
                    res.end();
                } else {
                    res.setStatus = 500;
                    console.log('It was an error in the server');
                    console.log(err);
                }
            } else {
                res.setStatus = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write(content);
                res.end();
            }
        } else if (req.url === '/users') {
            if (req.method === 'GET') {
                res.setStatus = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write('Accessing to users');
                res.end();
            } else if (req.method === 'POST') {
                var data = '';
                req.on('data', (d) => {
                    data += d;
                });
                req.on('end', () => {
                    var post = qs.parse(data);
                    res.end('Data received: ' + post.name);
                });
            } else if (req.method === 'PUT') {
                var data = '';
                req.on('data', (d) => {
                    data += d;
                });
                req.on('end', () => {
                    var post = qs.parse(data);
                    res.end('Data updated: ' + post.name);
                });
            } else if (req.method === 'DELETE') {
                var data = '';
                req.on('data', (d) => {
                    data += d;
                });
                req.on('end', () => {
                    var post = qs.parse(data);
                    res.end('Data deleted: ' + post.name);
                });
            }
        }
    });
}
