const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello from server!')
})

app.get('/api/helloworld', (req, res) => {
    debugger
    res.json({Title:"hello world"});
})

app.listen(5000, () => {
    console.log('App listening on port 5000')
})