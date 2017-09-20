var path = require('path');
var data = require(path.join(__dirname, '../../app/data/friends.js'));
var getClosest = require('get-closest');


//handles get and post routes to the friends data
module.exports = function(app) {

    app.get('/api/friends',function(req,res){
        res.json(data)
    });

    app.post('/api/friends',function(req, res){
        var newSurvey = req.body;
        res.json(data[compare(data, newSurvey)])
    });

}

//compare logic
function compare(existingData, newSurvey){
    //empty variables
    var newSurveyScore = 0
    var totalScoreArray = [];

    //convert the new survey scores array from string to integers
    var newScoresArray = newSurvey.scores.splice("").map(Number);
    
    //loop through new array and add up scores
    for(var i = 0; i<newScoresArray.length; i++){
        newSurveyScore += newScoresArray[i]
        
    }

    //loops through the scores of the existing data in the object array and pushes the total score to totalScoreArray
    for(var i = 0; i<existingData.length; i++){
        var existingSum = existingData[i].scores.reduce(add,0)
        totalScoreArray.push(existingSum);
        console.log('existing '+existingSum)
    }
    // console.log(totalScoreArray)

    //determines which score in the array of existing scores is closest to the new survey
    var closestNumber = getClosest.number(newSurveyScore, totalScoreArray)
    console.log('closest number '+closestNumber)
    return closestNumber
   
}

function add(a,b){
    return a+b
}

