//Random between 2 certain numbers

function randomNumber (bottomNumber, topNumber) {
  var randomMe = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
  return randomMe;
}
document.write(randomNumber(15, 75));




//avoiding to type a string like argument: (isNaN - is Not a Number - this method checks the argument (true/false));
function randomNumber (bottomNumber, topNumber) {
  if (isNaN(bottomNumber) || isNaN(topNumber)) {
      throw new Error ('Both arguments must be numbers.');
  } 
  return Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;  
  }
console.log(randomNumber(45, 75));
console.log(randomNumber(34, 'v'));

