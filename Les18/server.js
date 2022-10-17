const http = require('http');
const factsResponse = require("./facts_response.json");

const server = http.createServer((req, res) => {
    const adr = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === 'GET') {
        switch (adr.pathname) {
            case '/facts':
                res.writeHead(200, { 'Contenet-Type': 'application/json' });
                // console.log(factsResponse);
                if (adr.search != '') {
                    const limit = adr.searchParams.get('limit') !== null ? parseInt(adr.searchParams.get('limit'), 10) : null;
                    const maxLength = adr.searchParams.get('max_length') !== null ? parseInt(adr.searchParams.get('max_length'), 10) : null;
                    result = [];
                    for (item of factsResponse.data) {
                        if (limit !== null && result.length >= limit) break;
                        if (maxLength === null || item.length <= maxLength) result.push(item);
                    }
                    res.end(JSON.stringify(result));
                    break;
                }
                else {
                    res.end(JSON.stringify(factsResponse));
                    break;
                }
            case '/fact':
                res.writeHead(200, { 'Contenet-Type': 'application/json' });
                const fact = (max) => Math.floor(Math.random() * max);
                res.end(JSON.stringify(factsResponse.data[fact(factsResponse.data.length)]));
                break;
            default:
                res.writeHead(400, { 'Contenet-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: 'Not Found',
                    code: 404
                }));
        }
    }
});

server.listen(8000, () => console.log('Server is working on port 8000...'));