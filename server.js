var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 8080;
var api = require('./app/routing/apiRoutes.js');
var router = require('./app/routing/htmlRoutes.js');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}))

//static files css and js
app.use(express.static(path.join(__dirname,'app/public')))

app.use('/',router);
app.use('/api', api);


app.listen(PORT, function(){
    console.log('listening on port '+PORT)
})