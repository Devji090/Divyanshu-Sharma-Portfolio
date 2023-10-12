process.env.NODE_ENV = process.env.NODE_ENV  || 'development';
var express = require('./Config/express');

var app = express();

app.listen(2002);

module.exports = app;

console.log("Server is running at http://localhost:2002/");
