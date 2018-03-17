let userNumber2 = prompt('Type a starting number');
let bottomNumber = parseInt(userNumber2);
let userNumber = prompt('Type a number');
let topNumber = parseInt(userNumber);
let randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
let message = ('<h2>You have got a ' + randomNumber + ' between ' +bottomNumber + ' and ' + topNumber + '.</h2>');
document.write(message);
