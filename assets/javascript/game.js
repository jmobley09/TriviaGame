// Prevents clock from being sped up
var TimerOn = false;
var intervalId;
var time = 60;

// Starts the timeer
function startTime() {
    if (!TimerOn) {
        intervalId = setInterval(count, 1000);
        TimerOn = true;
    }
};

// game end function that changes screen and displays score
function gameOver() {
    // var to hold the elements for div to be displayed
    var ScoreDiv = $('<div>');


    ScoreDiv.addClass('ScoreDiv');
    ScoreDiv.html('Game Over' + '<br>');
    ScoreDiv.append('Correct: ' + correct + '<br>');
    ScoreDiv.append('Incorrect: ' + incorrect + '<br>');

    $('#game').html(ScoreDiv);
}

// sets decriment of timer and displays to the screen
function count() {
    time -= 1;
    var countTime = timeConverter(time);

    $('#DisplayTime').html('Time Remaining: ' + countTime);

    // if time runs out then runs game end functions
    if (time == 0) {
        gameOver();
    }
};

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
};

//Object containing an object of questions and object of answers
var QA = {
    questions: {
        one: "What is Bender's catch phrase?",
        two: "How is Fry related to the professor?",
        three: "Where is Leela from?",
        four: "What Planet is Lurr from?"
    },
    answers: {
        one: ["Bite My Shiney Metal Ass ", 'Eat My Shorts ', 'Death to Humans ', 'Here We Go Again '],
        two: ["Uncle ", 'Cousin ', 'Friend ', 'Brother ', 'Not Related '],
        three: ["Orphange ", 'Distant Planet ', 'LA ', 'Parallel Universe ', 'The Moon '],
        four: ['Omicron Persi i-8 ', 'Amazonian ', 'New New York ', 'The Sewers ']

    }
};

// Puts the trivia game on the screen
function runGame() {

    // Displays the questions to the page
    function DisQuestions() {
        $('#Questionone').append(QA.questions.one + '<br>' + '<br>');
        $('#Questiontwo').append(QA.questions.two + '<br>' + '<br>');
        $('#Questionthree').append(QA.questions.three + '<br>' + '<br>');
        $('#Questionfour').append(QA.questions.four + '<br>' + '<br>');
    }

    // Puts the correct answer to each question
    function DisAnswers() {

        // Puts the correct answer on the page with value
        $('#Questionone').append("<input type='radio' name='answer1' value='1' />" + QA.answers.one[0]);
        $('#Questiontwo').append("<input type='radio' name='answer2' value='1' />" + QA.answers.two[0]);
        $('#Questionthree').append("<input type='radio' name='answer3' value='1' />" + QA.answers.three[0]);
        $('#Questionfour').append("<input type='radio' name='answer4' value='1' />" + QA.answers.four[0]);

        // Puts all remaining answers on the page with a different value
        for (var i = 1; i < 4; i++) {
            $('#Questionone').append("<input type='radio' name='answer1' value='2' />" + QA.answers.one[i]);
            $('#Questiontwo').append("<input type='radio' name='answer2' value='2' />" + QA.answers.two[i]);
            $('#Questionthree').append("<input type='radio' name='answer3' value='2' />" + QA.answers.three[i]);
            $('#Questionfour').append("<input type='radio' name='answer4' value='2' />" + QA.answers.four[i]);
        }

    }

    // Dynamically adds a submit button
    function submit() {
        var btn = $('<button>');
        btn.attr('id', 'submit');
        btn.append('Submit');

        $('#subBtn').append(btn);
    }

    // Function calls to add questions, answers, and buttons of game to screen
    DisQuestions();
    DisAnswers();
    submit();
};

// Vars to hold the current score of the game
var correct = 0;
var incorrect = 0;

// Pulls value of radio button and adjusts score depending on if it was correct or not
function score() {
    var selValue1 = $('input[name=answer1]:checked').val();
    var selValue2 = $('input[name=answer2]:checked').val();
    var selValue3 = $('input[name=answer3]:checked').val();
    var selValue4 = $('input[name=answer4]:checked').val();

    var values = [selValue1, selValue2, selValue3, selValue4];

    for (var i = 0; i < values.length; i++) {
        if (values[i] == 1) {
            correct++;
        }
        else {
            incorrect++;
        };
    };
};

// Ends the game when the submit Button is clicked
$('#subBtn').click(function () {
    score();
    gameOver();
});


// Starts the game
$('#StartBttn').click(function () {
    startTime();
    $('#StartBttn').detach();
    runGame();
});