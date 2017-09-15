var express = require('express')
var app = express.Router();

var path = require('path')
var data = require(path.join(__dirname, '../../app/data/friends.js'))


//we are declaring the /api/ part of /api/fiends in the server.js file
app.get('/friends',function(req,res){
    return res.json(data)
})

app.post('/friends',function(req, res){
    var newSurvey = req.body;
    console.log(newSurvey)
    res.json(newSurvey)
})

/* TO DO: */
//send new survey to friends object
//work on html
//logic for determining friend compatibility


module.exports = app;