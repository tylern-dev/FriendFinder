var express = require('express')
var path = require('path')
var data = require(path.join(__dirname, '../../app/data/friends.js'))
var app = express.Router();


app.get('/api/friends',function(req,res){
    res.json(data)
})

// app.post()

module.exports = app;