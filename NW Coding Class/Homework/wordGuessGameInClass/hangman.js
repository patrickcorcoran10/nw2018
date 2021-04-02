$(document).ready(function() {
var possibleWords = ["PERU", "MEXICO", "ICELAND", "SPAIN", "PORTUGAL", "AUSTRALIA", "RUSSIA", "MOROCCO"];
var guessesSoFar = [];
var guessesLeft = 7;
var wordSelected = [];
var wordLetters = [];

function initializeGame() {
    var display = [];
    selectedWord();
        function selectedWord ()  {
            document.onkeyup;
            wordSelected = possibleWords[Math.floor(Math.random() * possibleWords.length)];
            console.log(wordSelected);    
}
};

for (var i = 0; i < wordSelected.length; i++) {
    display.push("_ ");
    $("#current-word").text(display);
}

document.onkeyup = function(event){

    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    var userGuess = event.key
    
    
    guessesLeft--;
    guessesSoFar.push(userGuess);
    $("#already-guessed").text(guessesSoFar);
    $("#guesses-remaining").text(guessesLeft);
    console.log(guessesSoFar);
    //eliminating blank spots and inserting letters of correct guesses//
    //if(userGuess === ){

    }
    //final correct guess before running out of guesses//
   //if(display.indexOf("_ " +++ -1)) {
        //alert("You Win the World Cup!");

    }
    //run out of guesses, and lose.//
    //if (guessesLeft === 0)
        //alert("You Lose!");
    
//}
//});
);
