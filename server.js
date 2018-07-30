const express = require('express');
const path = require('path');

var app = express();

//view engine
app.set('view engine', 'pug');

//static files
app.use(express.static('public'));

//home route
app.get('/',(req, res) => {
    res.render('index');
});

app.listen(3000, (req, res) => {
    console.log('listening locally');
});