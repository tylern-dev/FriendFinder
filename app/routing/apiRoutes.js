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
        
        // data.push(newSurvey)
        // console.log(data)
    });

}

//compare logic
function compare(existingData, newSurvey){
    
    var newSurveyScore = 0
    var totalScoreArray = [];

    //convert the scores array from string to integers
    var newScoresArray = newSurvey.scores.splice("").map(Number);
    
    //loop through new array and add up scores
    for(var i = 0; i<newScoresArray.length; i++){
        newSurveyScore += newScoresArray[i]
        
    }
    console.log(newSurveyScore)

    //loops through the scores of the existing data in the object array and pushes the total score to totalScoreArray
    for(var i = 0; i<existingData.length; i++){
        var existingSum = existingData[i].scores.reduce(add,0)
        totalScoreArray.push(existingSum);
    }
    console.log(totalScoreArray)
    
    //subtracting number in total score array from the newSurveyScore
    for(var i =0; i<totalScoreArray.length; i++){
        console.log(Math.abs(totalScoreArray[i] - newSurveyScore))
    }
    

    //might need to push the data to the array at the end of this function
    // data.push(newSurvey)
}

function add(a,b){
    return a+b
}

/* TO DO: */

//work on html
//logic for determining friend compatibility


//TEST COMPARE LOGIC
