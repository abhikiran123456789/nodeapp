//importing node framework
var express = require(‘express’);
var app = express();
app.get(‘/’, function (req, res) {
 res.send(‘hello abhi’);
});//listen to port 80 by default
app.listen(process.env.PORT || 80);
module.exports = app;
