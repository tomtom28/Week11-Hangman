// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 11 - Hangman Node Game

// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.


// Randomly select a word in the list
// var j = Math.floor(Math.random() * listOfWords.length);
// var guessWord = listOfWords[j];



// // Link the parsed letters
// var parsedWord = require('./letter.js')
// console.log(parsedWord)


// // Run game with starting number of guesses
// var guessesLeft = 7;
// getUserInput();


// // Prompt User for Input
// function getUserInput(){

//   // If enough guesses left, then prompt for new letter
//   if(guessesLeft > 0){
//     inquirer.prompt([
//       {
//         type: "value",
//         name: "letter",
//         message: "Guess a Letter: "
//       }
//     ]).then(function(userInput){
//       console.log(userInput.letter);

//       // Test if the user has won
//       if(0==1){
//         console.log('You win! Congrats, you are officially a brogrammer!');
//       }
//       // Not a win yet, so ask for another input and decrement guesses
//       else{
//         guessesLeft--;
//         getUserInput();
//       }

//     });

//   }
//   // If not enough guesses, then user losses
//   else{
//     console.log('Bummer, dude. I guess you\'re not a brogrammer afterall.');
//   }

// }


// **************************************************************************************************
// YOU CAN IGNORE THESE "old" files... they were my work in trying to get the starter files working
// It didnt work out. so i just hid them here in the archive folder  
// **************************************************************************************************



// --------------------------------------------------
// Require prompt to use to make the game 
var prompt = require('prompt');

// Require the objects/exports you will use
var guessWordList = require('./game.js');
var letterObjs = require('./letter.js');


// Intialize Number of Guesses
var guessesLeft = 10;
              
prompt.start();

game = {
  wordBank : guessWordList, // import a list of words
  wordsWon : 0, // count of words Found
  guessesRemaining : 10, // per word
  currentWrd : null, // the word object

  startGame : function (wrd){
    // make sure the user has 10 guesses
    guessesLeft = 10;

    // get a random word from the array
    var j = Math.floor(Math.random() * this.wordBank.length);
    this.currentWrd = this.wordBank[j];

    // populate currentWrd (made from Word constructor function) object with letters


    this.keepPromptingUser();

  },

  resetGuessesRemaining : function(){
    // reset guess count for new game
    guessesLeft = 10; 
  },

  keepPromptingUser : function(){
    var self = this;

    prompt.get(['guessLetter'], function(err, result) {
        
        // Console log the letter you chose
        var currentLetter = result.guessLetter;
        console.log(currentLetter);

        // this checks if the letter was found and if it is then it sets that specific letter in the word to be found
            var testLetter = new letterObjs(currentLetter);
            console.log(testLetter)

        //if the user guessed incorrectly minus the number of guesses they have left
        // and console.log if they were incorrect or correct
          
        //check if you win only when you are right
        //end game
       
        
        // display the user how many guesses remaining
      
        // render the word 
        
        // display letters the user has guessed

        // if user has remaining guesses and Word isn't found
      
        // if user has no guesses left, show them the word and tell them they lost
      
        // else show the user word and rendered
        
    });
  }


};

game.startGame();
