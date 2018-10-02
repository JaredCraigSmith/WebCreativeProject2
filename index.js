
var CurrentQuestion;

function GetRandomQuestion() {
    var QuestionArray = ["Question", "Option1", "Option2", "Option3", "Option4", "Answer"];
    var URL = "https://opentdb.com/api.php?amount=1&type=multiple";
    $.getJSON(URL, function (data) {
        QuestionArray[0] = data.results[0].question;
        QuestionArray[1] = data.results[0].incorrect_answers[0];
        QuestionArray[2] = data.results[0].incorrect_answers[1];
        QuestionArray[3] = data.results[0].incorrect_answers[2];
        QuestionArray[4] = data.results[0].correct_answer;
        QuestionArray[5] = data.results[0].correct_answer;

        WriteToTestDisplay(QuestionArray[0] + "--" + QuestionArray[1] + "--" + QuestionArray[2] + "--" + QuestionArray[3] + "--" + QuestionArray[4] + "--" + QuestionArray[5])
        CurrentQuestion = QuestionArray;
        return QuestionArray;
    }) 
}

function WriteToTestDisplay(words) {
    $("#TestDisplay").text(words);
}

function CheckAnswer(OptionID) {

    var Answer = $("#" + OptionID).text();
    if (CurrentQuestion[5] == Answer) {
        return true;
    }
    else {
        return false;
    }
}
