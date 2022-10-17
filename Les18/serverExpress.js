const express = require('express');
const app = express();
const factsResponse = require("./facts_response.json");

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/fact', (req, res) => {
    const fact = (max) => Math.floor(Math.random() * max);
    res.send(factsResponse.data[fact(factsResponse.data.length)]);
});

app.get('/facts', (req, res) => {
    if (req.query.hasOwnProperty('limit') || req.query.hasOwnProperty('max_length')) {
        const limit = req.query.limit != undefined ? parseInt(req.query.limit, 10) : undefined;
        const maxLength = req.query.max_length != undefined ? parseInt(req.query.max_length, 10) : undefined;
        const result = [];
        for (item of factsResponse.data) {
            if (limit !== undefined && result.length >= limit) break;
            if (maxLength === undefined || item.length <= maxLength) result.push(item);
        }
        res.send(result);
    }
    else {
        res.send(factsResponse.data);
    }
});

app.listen(8000, () => {
    console.log(`Server (Express) is working on port 8000...`)
})