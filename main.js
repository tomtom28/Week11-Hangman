// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 11 - Hangman Node Game

// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.


// Link in the Inquirer Node Module
var inquirer = require('inquirer');


// Link the word to guess
var guessWord = require('./game.js');
console.log(guessWord)


// Link the parsed letters
var parsedWord = require('./letter.js')
console.log(parsedWord)


// Run game with starting number of guesses
var guessesLeft = 7;
getUserInput();


// Prompt User for Input
function getUserInput(){

  // If enough guesses left, then prompt for new letter
  if(guessesLeft > 0){
    inquirer.prompt([
      {
        type: "value",
        name: "letter",
        message: "Guess a Letter: "
      }
    ]).then(function(userInput){
      console.log(userInput.letter);

      // Test if the user has won
      if(0==1){
        console.log('You win! Congrats, you are officially a brogrammer!');
      }
      // Not a win yet, so ask for another input and decrement guesses
      else{
        guessesLeft--;
        getUserInput();
      }

    });

  }
  // If not enough guesses, then user losses
  else{
    console.log('Bummer, dude. I guess you\'re not a brogrammer afterall.');
  }

}