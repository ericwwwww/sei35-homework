// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.




var wordLetters     = ['P', 'E', 'E', 'K', 'A', 'B', 'O', 'O'];
var guessedLetters  = ['_', '_', '_', '_', '_', '_', '_', '_'];

const guessLetter = function(letter) {
    let goodGuess = false;
    let moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
       if (wordLetters[i] === letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
       if (guessedLetters[i] === '_') {
            moreToGuess = true;
        }
    }
       if (goodGuess) {
         console.log('You found a letter!');
         console.log(guessedLetters.join(''));
       if (!moreToGuess) {
            console.log('You Won!');
        }
    }  else {
         console.log('Wrong!');
    }
}

guessLetter('P');
guessLetter('E');
guessLetter('E');
guessLetter('K');
guessLetter('A');
guessLetter('B');
guessLetter('O');
