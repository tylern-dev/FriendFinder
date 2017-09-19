var path = require('path');
var data = require(path.join(__dirname, '../../app/data/friends.js'));



//handles get and post routes to the friends data
module.exports = function(app) {

    app.get('/api/friends',function(req,res){
        res.json(data)
    });

    app.post('/api/friends',function(req, res){
        var newSurvey = req.body;
        // data.push(newSurvey);
        compare(data, newSurvey)
        res.json(newSurvey)
        // console.log(newSurvey)
        
        
    });

}

//compare logic
function compare(existingData, newSurvey){
    
    var newSurveyScore = 0
    var existingDataScore = 0

    //convert the scores array from string to integers
    var newScoresArray = newSurvey.scores.splice("").map(Number);
    
    //loop through new array and add up scores
    for(var i = 0; i<newScoresArray.length; i++){
        newSurveyScore += newScoresArray[i]
    }
    
    //MAYBE USE THIS
    for(var key in existingData){
        var obj = existingData[key];
        for ( var prop in obj){
            if(obj.hasOwnProperty(prop)){
                console.log(obj)
            }
        }
        

        console.log('prop '+obj)
    }

    console.log('existing data '+ existingData[0].scores)
    



    //might need to push the data to the array at the end of this function
    // data.push(newSurvey)
}

/* TO DO: */

//work on html
//logic for determining friend compatibility


