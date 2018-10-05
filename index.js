var CurrentQuestion;
var LastQuestion;
GetRandomQuestion();

function GetRandomQuestion() {
    var QuestionArray = [];
    var URL = "https://opentdb.com/api.php?amount=1&type=multiple";
    $.getJSON(URL, function(data) {
        
        QuestionArray[0] = data.results[0].incorrect_answers[0];
        QuestionArray[1] = data.results[0].incorrect_answers[1];
        QuestionArray[2] = data.results[0].incorrect_answers[2];
        QuestionArray[3] = data.results[0].correct_answer;

        QuestionArray = shuffle(QuestionArray);

        QuestionArray[4] = data.results[0].question;
        QuestionArray[5] = data.results[0].correct_answer;

        for (i = 0; i < QuestionArray.length; i++) {
            QuestionArray[i] = QuestionArray[i].replace(/&quot;/g, "\"")
            QuestionArray[i] = QuestionArray[i].replace(/&#039;/g, "\'")
            QuestionArray[i] = QuestionArray[i].replace(/&euml/g, "ë")
        }
        

        CurrentQuestion = QuestionArray;
        return QuestionArray;
    })
}

function WriteToTestDisplay(words) {
    $("#TestDisplay").text(words);
}

function GetAndDisplayRandomQuestion() {
    
    $
    $("#Option1").css("background-color","white")
    $("#Option2").css("background-color","white")
    $("#Option3").css("background-color","white")
    $("#Option4").css("background-color","white")

    $("#Question").text(CurrentQuestion[4]);
    $("#Option1").text(CurrentQuestion[0])
    $("#Option2").text(CurrentQuestion[1]);
    $("#Option3").text(CurrentQuestion[2])
    $("#Option4").text(CurrentQuestion[3])

    LastQuestion = CurrentQuestion
    GetRandomQuestion();

}

function CheckAnswer(OptionID) {

    var Answer = $("#" + OptionID).text();
    if (LastQuestion[5] == Answer) {
        return true;
    }
    else {
        return false;
    }
}

function DisplayCheckAnswer(Optionid){
    if(CheckAnswer(Optionid))
    {
        $("#"+Optionid).css("background-color","green")
    }
    
    else
    {
         $("#"+Optionid).css("background-color","red")
    }
    
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
