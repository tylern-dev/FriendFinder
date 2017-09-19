(function(){
    var name;
    var photo;
    var scores;
    var questions = [
        'Your mind is always buzzing with unexplored ideas and plans.',
        'Generally speaking, you rely more on your experience than your imagination.',
        'You find it easy to stay relaxed and focused even when there is some pressure.',
        'You rarely do something just out of sheer curiosity.',
        'People can rarely upset you.',
        'It is often difficult for you to relate to other people’s feelings.',
        'In a discussion, truth should be more important than people’s sensitivities.',
        'You rarely get carried away by fantasies and ideas.',
        'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.',
        'You feel more energetic after spending time with a group of people.'
    ]
    
    //builds the form of questions 
    for(let [index, val] of questions.entries()){
        $('#survey-questions').append(
            `<div class = "form-group">`+
            `<h3>Question ${index+1}`+
            `<h4>${val}</h4>`+
            `<select class="form-control col-2" id=q${index+1}>`+
            `<option value="1">1 Never`+
            `<option value="2">2`+
            `<option value="3">3`+
            `<option value="4">4`+
            `<option value="5">5 Always`+
            `</select>`
        )
    }

    //new survey constructor
    var NewSurvey = function(name, photo, scores){
        this.name = name;
        this.photo = photo;
        this.scores = scores;
    }

    function getValues(){
        
        
        //handles what happens when the submit button is clicked
        $('#submit').on('click', function(event){
            event.preventDefault();

            name = $('#form-name').val().trim();
            photo = $('#form-photo').val().trim();
            scores = [];

            var newData = new NewSurvey(name, photo, scores)

            //grabs the values from the selects and pushes it to the scores array
            $('select :selected').each(function(){
                var numValue = parseInt(this.value)
                scores.push(numValue);
                console.log(scores)
            })


            $.post("/api/friends", newData, function(result){
                console.log(result)
            });
        });
    }

    getValues();



})();

