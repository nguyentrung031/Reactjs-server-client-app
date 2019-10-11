const express = require('express');
const app = express();
const Data = require('./Decor24hDB.json');

app.get('/', (req, res) => {
    res.send('hello from server!')
})
app.get('/api/TinTuc', (req, res) => {
     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true)
    // console.log(res.json(Data));
    res.json(Data);
})
app.listen(5000, () => {
    console.log('App listening on port 5000')
})