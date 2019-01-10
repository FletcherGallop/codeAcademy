// // Get process.stdin as the standard input object.
// var standard_input = process.stdin;
// // Set input character encoding.
// standard_input.setEncoding('utf-8');
//
// // Prompt user to input data in console.
// console.log("Guess A Number Game! Enter a number between 1 and 10:");
//
// var secretNumber = Math.floor((Math.random() * 10) + 1);;
//
// function guessingGame(){
//   var guessed = false;
//   while (!guessed) {
//       guess = makeGuess();
//       if (guess > secretNumber){
//         console.log("Guess is too big. Guess again!");
//       } else if (guess < secretNumber){
//         console.log("Guess is too small. Guess again!");
//       } else if (guess == secretNumber){
//         console.log("You guessed right! You win!");
//       }
//   };
//
//   process.exit();
// }
//
//
//
//
// function makeGuess(){
//   // When user input data and click enter key.
//   standard_input.on('guess', function (data) {
//       // User input exit.
//       if(data === 'exit\n'){
//           // Program exit.
//           console.log("Program exit.");
//           process.exit();
//       } else {
//           return guess;
//       }
//   });
// }
//
//
//
// guessingGame();
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processNumber(number) {
    // Insert code to do whatever with sum here.
    console.log('The sum is', number);
}

rl.question('Enter a number: ', function (x) {
  
    // rl.question('Enter another number: ', function (y) {
    //     var sum = parseFloat(x) + parseFloat(y);
    //
    //     processSum(sum)
    //
    //     rl.close();
    // });
});
