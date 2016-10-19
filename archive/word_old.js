// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 11 - Hangman Node Game

// Constructor File
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.


//v ----------------------------------------------------

// require your letter objects
var letterObjs = require('./letter.js');


var Word = function(wrd){

  // property to store the string wrd
  this.actualWord = wrd;

  // a collection of letter objects
  this.letterObjects = [];

  // property is the word found?
  this.found = false;


  this.getLets = function() {

  // populate the collection above with new Letter objects
  this.LetterObjects = letterObjs;

  };
  
  //found the current word
  this.didWeFindTheWord = function() {
    //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
    };

    return this.found;
  };

  this.checkIfLetterFound = function(guessLetter) {

// iterate through the collection of letter Objects

// if guessLetter matches Letter property, the letter object should be shown
    return whatToReturn;
  };

  this.wordRender = function() {
// render the word based on if letters are found or ot found
    return str;
  };
}

// export to use in main.js
