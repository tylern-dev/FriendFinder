var express = require('express')
var app = express.Router();
var path = require('path')

module.exports = function(app){

    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname,'../../app/public/home.html'));
    })
    
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '../../app/public/survey.html'))
    })

    
    
    
    // 404 page handling 
    app.get('*',function(req, res){
        res.status(404).sendFile(path.join(__dirname, '../../app/public/404.html'))
    });

}


