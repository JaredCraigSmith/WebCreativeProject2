


function GetRandomQuestion() {
    var QuestionArray = ["Question", "Option1", "Option2", "Option3", "Option4", "Answer"];
    //TODO: Fill question array with real data
    return QuestionArray;
}

function CheckAnswer(QuestionArray, Answer) {
    if (QuestionArray[5] == Answer) {
        return true;
    }
    else {
        return false;
    }
}
