var path = require('path');
var data = require(path.join(__dirname, '../../app/data/friends.js'));



//handles get and post routes to the friends data
module.exports = function(app) {

    app.get('/api/friends',function(req,res){
        res.json(data)
    });

    app.post('/api/friends',function(req, res){
        var newSurvey = req.body;
        data.push(newSurvey);
        
        
        
    });

}


/* TO DO: */

//work on html
//logic for determining friend compatibility


