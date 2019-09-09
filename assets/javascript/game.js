
// Establish Variables:
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

var win = document.getElementById("numWin");
var loss = document.getElementById("numLose");
var tie = document.getElementById("tie");

//use Math.random method along with String.fromCharCode method to generate a random letter
var computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);
console.log(computerGuess);

//function to capture user's keyboard input and make the input lowercase
document.onkeyup = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    //document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyPress);

}

//function to catch repeat letters and/or add players guess to lettersGuessed string
function addLetter (usersKeypress) {


    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    //alert player if the above code is true.
    if (repeatGuess) {
        alert(usersKeypress + " already guessed. Try again!");

        //if it is not a repeat guess, check if it's in word
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);

        //show user's input in browser
        showLettersGuessed();
        //is user's input a match to computer guess
        guessMatch(usersKeypress);
    }

}

function reset() {
    computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);
    guessesLeft = 10;
    lettersGuessed = [];
    showLettersGuessed();
    showGuessesRemaining(); 
}

//function to show letters guessed in browser
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win!");
        wins = wins + 1;
        console.log(wins)
        showWins();
        reset();
        
        //toggleGame();
    
    } else if (guessesLeft === 0) {
        alert("Aw man! Lets start over.");
        losses = losses + 1;
        reset();
        showLosses();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

//function to show wins
function showWins() {
    win.textContent = wins;
}
// function to show losses
function  showLosses() {
    loss.textContent = losses;
}
//function to show guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
}



startGame();

//TODO make the computer guess another random letter once game is lost.