//secret number creation
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;
let score = 20;
document.querySelector(".score").textContent = score;

//function display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//display bg color
const bgColorChange = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
// click button & fuction
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // click button & fuction in not guess value
  if (!guess) {
    /* document.querySelector(".message").textContent = "🤣🤣NO NUMBER "; */
    displayMessage("🤣🤣NO NUMBER ");
    /* document.querySelector("body").style.backgroundColor = "yellow"; */
    bgColorChange("yellow");
  } else if (20 < guess) {
    displayMessage("IT IS OUT of RULE--> LOOK AT RIGHT TOP  ");
    bgColorChange("blue");
    score--;
    document.querySelector(".score").textContent = score;
  }
  // click button & fuction   secretNumber === guess
  else if (secretNumber === guess) {
    /*  document.querySelector(".message").textContent = "🥇CORRECT NUMBER "; */
    displayMessage("🥇CORRECT NUMBER ");
    /* document.querySelector("body").style.backgroundColor = "#60b347"; */
    bgColorChange("#60b347");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  } else if (secretNumber !== guess) {
    if (score > 1) {
      /* document.querySelector(".message").textContent =
        secretNumber < guess ? "🔥🔥TOO HIGH " : "💧💧TOO LOW"; */
      displayMessage(secretNumber < guess ? "🔥🔥TOO HIGH " : "💧💧TOO LOW");
      score--;
      document.querySelector(".score").textContent = score;
      /*  document.querySelector("body").style.backgroundColor = "pink"; */
      bgColorChange("orange");
    } else {
      /* document.querySelector(".message").textContent = "🧗‍♀️🧗‍♂️ TRY AGAIN "; */
      displayMessage("🧗‍♀️🧗‍♂️ TRY AGAIN ");
      document.querySelector(".score").textContent = 0;
      /* document.querySelector("body").style.backgroundColor = "red"; */
      bgColorChange("red");
    }
  }

  /*  // click button & fuction   secretNumber < guess
  else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔥🔥TOO HIGH ";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "pink";
    } else {
      document.querySelector(".message").textContent = "🧗‍♀️🧗‍♂️ TRY AGAIN ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  // click button & fuction   secretNumber > guess
  else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "💧💧TOO LOW";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "pink";
    } else {
      document.querySelector(".message").textContent = "🧗‍♀️🧗‍♂️ TRY AGAIN ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } */
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  /* document.querySelector("body").style.backgroundColor = "#222"; */
  bgColorChange("#222");
  document.querySelector(".number").style.width = "15rem";
  /*  document.querySelector(".message").textContent = "Start guessing... "; */
  displayMessage("Start guessing... ");
});
