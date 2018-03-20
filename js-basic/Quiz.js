firstQuestion = prompt('What is your favorite kind of music?{choose the letter}                          A: Jazz  B:Rock  C:Classic  D:Other');
secondQuestion = prompt('What is your precious transport? (choose the letter)                           A: Motorbike  B:Car  C:Bicylce  D:My feet');
thirdQuestion = prompt("Have you ever played in RPG?  (choose the letter)                               A: Yes, I have. B: No, I haven't. C: I don't know. D: 42.");
fourthQuestion = prompt("What is your sex?  (choose the letter) A: Male  B: Female C: I don't remember D: Masturbation");
 fifthQuestion = prompt('What is your age? (choose the letter) A: Under 18 B: 18-21 C: 22-25 D: Above 25');
        
userScore=0;
console.log('first unit');
//First Question Score Point
if (firstQuestion.toUpperCase() === 'B') {
   userScore+=5;
} else if (firstQuestion.toUpperCase() === 'A' || firstQuestion.toUpperCase() === 'C') {
   userScore+=3;
} else {
   userScore-=1;
}

console.log ('check 1part');

//Second Question Score Point
if (secondQuestion.toUpperCase() === 'A') {
   userScore+=5;
} else if (secondQuestion.toUpperCase() === 'C' || secondQuestion.toUpperCase() === 'D') {
   userScore+=3;
} else {
   userScore+=1;
}

console.log ('check 2part');

//Third Question Score Point
if (thirdQuestion.toUpperCase() === 'A') {
   userScore+=5;
} else if (thirdQuestion.toUpperCase() === 'D') {
   userScore+=3;
} else {
   userScore+=0;
}

console.log ('check 3part');

//Fourth Question Score Point
if (fourthQuestion.toUpperCase() === 'B') {
   userScore+=5;
} else if (fourthQuestion.toUpperCase() === 'A' || fourthQuestion.toUpperCase() === 'D') {
   userScore+=3;
} else {
   userScore+=1;
}

console.log ('check 4part');

//Fifth Question Score Point
if (fifthQuestion.toUpperCase() === 'B' || fifthQuestion.toUpperCase() === 'C') {
   userScore+=5;
} else if (fifthQuestion.toUpperCase() === 'D') {
   userScore+=3;
} else {
   userScore+=0;
}

console.log ('check 5part');
//Results

if (userScore > 19 && userScore <= 25) {
  alert("You've scored " + userScore + "points! You get A Golden Crown!");
} else if (userScore > 14 && userScore <= 19) {
  alert("You've scored " + userScore + "points! You get A Silver Crown!");
} else if (userScore > 9 && userScore <= 14) {
  alert("You've scored " + userScore + "points! You get A Bronze Crown!");
} else {
  alert("You've scored nothing! You get a fucking dick!");
}

console.log('check result');
