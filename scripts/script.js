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

  // assigning variables

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let word; // Random word from the API link
  let guess; // The chosen guess letter
  let guessesList = []; // Stored guessing letter in array
  let lives; // Number of Lives left to play
  let counter; // Counter of correct guesses
  let space; // Number of spaces or dashes inside the random word
  const showLives = document.getElementById("my-lives");
  const showClue = document.getElementById("clue");

  // creating the alphabet buttons' section

  const letterButtons = function () {
    buttons = document.getElementById("buttons"); // getting the letters buttons
    letters = document.createElement("ul"); // creating an ul of letters

    for (let i = 0; i < alphabet.length; i++) {
      // Looping through the alphabet list
      letters.id = "alphabet";
      list = document.createElement("li"); // creating the list inside the ul (letters)

      list.innerHTML = alphabet[i];
      buttons.appendChild(letters);
      letters.appendChild(list);

      checkLetters(); // added after creating the onclick event listener
    }
  };


  // Creating the guesses result section

  result = function () {
    wordHolder = document.getElementById("hold"); // getting the guesses section
    correctLetters = document.createElement("ul"); // creating an ul of the correct letters of the random word

    for (let i = 0; i < word.length; i++) {
      // Looping through the random word
      correctLetters.setAttribute("id", "my-word");
      guess = document.createElement("li"); // creating the list inside the ul (correctLetters)
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guessesList.push(guess);
      wordHolder.appendChild(correctLetters);
      correctLetters.appendChild(guess);
    }
  };


  // Show lives counter

  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (let i = 0; i < guessesList.length; i++) {
      if (counter + space === guessesList.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  };

    // canvas
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  lake= document.getElementById("lake")
  context.drawImage(lake,0,580,800,350)
  
  
  
  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };
  
  canvas = function () {
    frm0= document.getElementById('frm0')
    context.drawImage(frm0,210,0)
  }

  frame1 = function(){
    frm1= document.getElementById('frm1')
    context.drawImage(frm1,210,0)
  }

  frame2 = function () {
    frm2= document.getElementById('frm2')
    context.drawImage(frm2,210,0)
  };

  frame3 = function () {
    frm3= document.getElementById('frm3')
    context.drawImage(frm3,210,0)
  };

  frame4 = function () {
    frm4= document.getElementById('frm4')
    context.drawImage(frm4,210,0)
  };

  head = function () {
    frm5= document.getElementById('frm5')
    context.drawImage(frm5,210,0)
  };
  
  torso = function () {
    frm6= document.getElementById('frm6')
    context.drawImage(frm6,210,0)
  };

  rightArm = function () {
    frm7= document.getElementById('frm7')
    context.drawImage(frm7,210,0)
  };

  leftArm = function () {
    frm8= document.getElementById('frm8')
    context.drawImage(frm8,210,0)
  };

  rightLeg = function () {
    frm9= document.getElementById('frm9')
    context.drawImage(frm9,210,0)
  };

  leftLeg = function leftLeg () {
    frm10= document.getElementById('frm10')
    context.drawImage(frm10,210,0);
    setTimeout (function () {
      frmend= document.getElementById('frmend')
      context.drawImage(frmend,0,160,800,840)
    },1000);
  };

  drawArray = [
    leftLeg,
    rightLeg,
    leftArm,
    rightArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];
   // Animate canvas kid
  const animate = function () {
  const drawMe = lives;
  drawArray[drawMe]();
  };


  // OnClick event listener

  checkLetters = function () {
    list.onclick = function () {
      const guess = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guessesList[i].innerHTML = guess;
          counter += 1;
        }
      }

      const j = word.indexOf(guess);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    };
  };

  // Play

  play = function () {
    word = chosenWord[Math.floor(Math.random() * chosenWord.length)];
    word = word.replace(/\s/g, "-");
    //  console.log(word);
    letterButtons();

    guessesList = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    canvas();
  };

  play();

}
