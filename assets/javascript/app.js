// This displays the inital Start Screen
$(document).ready(function(){
    $(".container").hide();
    $("#afterSubmit").hide();
});

// This replaces Start Screen with Container content 
$(document).ready(function(){
    $("#startButton").click(function(){
        $("#startScreen").hide();
        $(".container").show();
    });
});

// // Function for setting the timer
var timeLeft = 60;
var downloadTimer = setInterval(function(){
    timeLeft -= 1;
    document.getElementById("timerDisplay").innerHTML = timeLeft + " seconds remaining";
  if(timeLeft <= 0){
    clearInterval(downloadTimer);
    $(".container").hide();
    $("#startButton").hide();
    $("#afterSubmit").show();
    check();
  } 
}, 1000);


// Function that runs when Submit is clicked
function check() {

    var question1 = document.quiz.group1.value;
    var question2 = document.quiz.group2.value;
    var question3 = document.quiz.group3.value;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    if (question1 == "Happy Happy Joy Joy") {
        correct++;
    } else if (question1 == "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question2 == "Try and take over the world") {
        correct++;
    } else if (question2 == "") {
        unanswered++;
    } else {
        incorrect++;
    }

    if (question3 == "A modern one") {
        correct++;
    } else if (question3 == "") {
        unanswered++;
    }
    else {
        incorrect++;
    }

    timeLeft=0;
    document.getElementById("afterSubmit");
    document.getElementById("number_correct").innerHTML = "You got " + correct + " right!";
    document.getElementById("number_incorrect").innerHTML = "You got " + incorrect + " wrong!";
    document.getElementById("number_unanswered").innerHTML = "You didn't answer " + unanswered + " questions!";
    }

 
   
    