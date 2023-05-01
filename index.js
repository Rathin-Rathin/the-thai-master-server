const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;

const data =require ('./chefs/data.json');

app.get('/',(req, res)=> {
    res.send('The thai master server home url');
})

app.get('/chef', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log('The thai master server running on the port :', port);
})