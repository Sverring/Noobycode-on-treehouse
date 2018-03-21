//Random between 2 certain numbers

function randomNumber (bottomNumber, topNumber) {
  var randomMe = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
  return randomMe;
}
document.write(randomNumber(15, 75));
