// Prevents clock from being sped up
var TimerOn = false;
var intervalId;
var time = 60;

function start() {
    if (!TimerOn) {
        intervalId = setInterval(count, 1000);
        TimerOn = true;
    }
};

$('#StartBttn').click(function () {
    start();
});

function count() {

    //  TODO: increment time by 1, remember we cant use "this" here.
    time -= 1;
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    var countTime = timeConverter(time);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $('#DisplayTime').html('Time Remaining: ' + countTime);
  
  }
  
  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.
  
  function timeConverter(t) {
  
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
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