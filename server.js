const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
var app = express();

//view engine
app.set('view engine', 'pug');

//static files
app.use(express.static('public'));

//home route
app.get('/',(req, res) => {
    res.render('index');
});

app.listen(port, (req, res) => {
    console.log('listening locally');
});