var randomNumber = Math.floor(Math.random() * 6);
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess)=== randomNumber) {
    document.write('<p>You guesssed the number!</p>');
} else {
    document.write('<p>Sorry. The number was '+ randomNumber + '</p>');
};
