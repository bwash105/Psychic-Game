var age = confirm("Are you over 21+ years old?")
var userName = prompt("I know your name...but what's your magic name?")
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedTyped = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.


// var computerChoices = ["a", "e", "i", "o", "u"]; 

// make sure it responds


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {


    var userGuess = event.key;

     // app randomly picks a letter, and the user has to guess which letter the app chose
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    // Determines which key was pressed.

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        guessedTyped.push(userGuess);
        document.getElementById("typed").innerHTML = guessedTyped.join(", ");

    if (userGuess === computerGuess) {
            wins++;
            alert("You're a mindreader, " + userName + "!");
            document.getElementById("wins").innerHTML = wins;
            guessedTyped = [];
        }

     else {
            guessesLeft--;
            document.getElementById("left").innerHTML = guessesLeft;
        }
    if (guessesLeft === 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            guessesLeft = 9;
            guessedTyped = [];

        }
    }
}
