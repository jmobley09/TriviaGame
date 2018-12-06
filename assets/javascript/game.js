// Prevents clock from being sped up
var TimerOn = false;
var intervalId;
var time = 120;

// Starts the timeer
function startTime() {
    if (!TimerOn) {
        intervalId = setInterval(count, 1000);
        TimerOn = true;
    }

};

// sets decriment of timer and displays to the screen
function count() {
    time -= 1;
    var countTime = timeConverter(time);

    $('#DisplayTime').html('Time Remaining: ' + countTime);
}
//  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

//Object containing an object of questions and object of answers
var QA = {
    questions: {
        one: "What is Bender's catch phrase?",
        two: "How is Fry related to the professor?",
        three: "Where is Leela from?"
    },
    answers: {
        one: "Bite My Shiney Metal Ass",
        two: "Uncle",
        three: "Orphange"
    }
}

// Holds the number that is used for the questions, answers and displaying
var num = 0;
var numstring = ['one', 'two', 'three'];

// Pulls the question based on number and possible answers & displays to appropiate div
function DisQuestion() {
    var idnum = '#' + 'Question' + numstring[num];
    var questnum = 'QA.questions.' + numstring[num];
    var ansnum = 'QA.answers.' + numstring[num];
    $(idnum).append(questnum);
    $(idnum).append(ansnum);

    console.log(idnum);
}

// Starts the game
$('#StartBttn').click(function () {
    startTime();
    $('#StartBttn').detach();
});

DisQuestion();