const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const data =require ('./chefs/data.json');
const feedback = require('./happyClient/feedback.json');
app.get('/',(req, res)=> {
    res.send('The thai master server home url');
})
//All chefs data
app.get('/chef', (req, res) => {
    res.send(data);
})
//Single chef data
app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefData = data.find(chef => chef.id === id);
    res.send(chefData);
})
//Feedback user data
app.get('/feedback', (req, res) => {
    res.send(feedback);
})

app.listen(port, () => {
    console.log('The thai master server running on the port :', port);
})