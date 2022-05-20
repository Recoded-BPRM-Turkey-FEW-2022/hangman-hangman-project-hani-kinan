// 1- At the beginning use fetch API to retrieve a random word from this api https://random-word-api.herokuapp.com/word?number=1.
// Make the blanks equal the number of letters in the random word.

// 2- Every time the user clicks on one of the letters the following should happen:

// 2.1- Search through the random word to find if it contains the clicked letter,
// if the clicked letter is part of the random word's letters then it gets shown up instead of the space,

// if not, then the lives counter is decreased by one.

// In some cases a clicked letter corresponds to two letters in the generated word, if that happens then show both letters.

// Also, with every mistake draw a part of the hangman's body.
// You can draw your own designs. It doesn't have to be a hangman, it can any creature that you want. Be creative with this.
// One of the best ways to do this is to use the HTML5 canvas element.

// 2.2- The button becomes disabled and should only work once.

// 3- If the lives counter reaches 0 then the game is over and the man should be HANGED! 👨‍🦱🔪😢

// 4- Clicking on the play again button should do the whole process again.

fetch("https://random-word-api.herokuapp.com/word?number=1")
  .then((resp) => resp.json())
  .then((word) => loadData(word));

const loadData = (chosenWord) => {
  console.log(chosenWord);


}