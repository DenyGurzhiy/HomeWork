const express = require('express')
const app = express()

app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const refunds = [];

app.post('/data', async (req, res) => {
    refunds.push(req.body);
    res.send('Data received. Thank you!');
});

app.get('/data', (req, res) => {
    // res.send('Hello World!')
    res.json(refunds);
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})