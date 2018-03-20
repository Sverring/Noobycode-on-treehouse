/* 
The Random Number Guessing Game.
Generates a number between 1 to 6.
Defines player`s guess as integer number.
Player has a two attempts to guess the number.
*/

/* trigger if player answer incorrectly*/
var correctGuess = false;

var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/*
1. The second part of conditional statements is running, when 1st part is true.
2. When user enters less number, he will give second attempt.
OR
3. When user enters more number, he wil give second attempt.

*/
if (guess === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
      var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
      if (parseInt(guessMore) === randomNumber) {
          correctGuess = true; 
      }   
} else if (parseInt(guess) > randomNumber) {
     var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
     if (parseInt(guessLess) === randomNumber) {
         correctGuess = true; 
        }
};
/* 
If user is right, he will get correct answer.
If he is wrong, will get apology statement.
*/
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
