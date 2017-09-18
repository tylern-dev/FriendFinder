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


for(let [index, val] of questions.entries()){
    $('#survey-questions').append(
        `<div class = "form-group">`+
        `<h3>Question ${index+1}`+
        `<h4>${val}`+
        `<select class="form-control col-2">`+
        `<option value="1">1`+
        `<option value="2">2`+
        `<option value="3">3`+
        `<option value="4">4`+
        `<option value="5">5`+
        `</select>`
    )
}

