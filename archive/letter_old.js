// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 11 - Hangman Node Game

// Constructor File
// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.






// **************************************************************************************************
// YOU CAN IGNORE THESE "old" files... they were my work in trying to get the starter files working
// It didnt work out. so i just hid them here in the archive folder  
// **************************************************************************************************



// Link the word to guess
var guessWord = require('./game.js');


// Link in the user input
var userGuess = require('./main.js');





// -----------------------
var Letter = function(letter) {
  
  // property to store the actual letter
  this.actualLetter = letter;

  // property/boolean if the letter can be shown 
  this.appear = false;

  this.letterRender = function() {
    // if appear is false then show the _
    if(!this.appear){
      return '_';
    }
    // else appear is true then show character
    else{
      return letter;
    }
  };
};

// export to use in word.js
module.exports = Letter;

