const http = require('node:http');

// Create a local server to receive data from
// const handler = handler (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//         data: 'Hello World!'
//     }));
// }


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
});

server.listen(8000, () => console.log("Listening on port 8000"));