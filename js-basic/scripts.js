userNumber = prompt('Type a number');
topNumber = parseInt(userNumber);
randomNumber = Math.floor(Math.random() * topNumber)+1;
message = ('<h2>You have got a ' + randomNumber + ' between 1 and ' + topNumber + '.</h2>');
document.write(message);
