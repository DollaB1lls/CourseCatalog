const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongodb connnected..'))
    .catch(err => console.log(err));

app.get('/test', (req, res) => {
    res.send("hello world")
});

app.get('/api', (req, res) => {
    res.send("sent from API")
});

const port =  5000;
app.listen(port, () => {
    console.log('Server running on port ${port}');
});

