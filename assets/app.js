var random = Math.floor(Math.random() * 100);
console.log(random);
var myInput = document.querySelector("#input");
var click = document.querySelector("#btnn");
var contDiv = document.querySelector(".container");
var guessNumb = document.querySelector(".guessNumb");
var numDiv = document.querySelector(".number");

let scorediv = document.querySelector(".scorediv");
let yourScore = document.querySelector(".yourScore");
let highscoreP = document.querySelector(".highscoreP");
let highScoreSpan = document.querySelector(".highScoreSpan");
let questionSign = document.querySelector(".questionSign");
let tryAgain = document.querySelector("#reset");
// let scoreBtn = document.querySelector(".scorebtn");

guessNumb.innerHTML = "Guess my number";
function run() {
  if (yourScore.innerHTML > 0) {
    yourScore.innerHTML = yourScore.textContent - 1;
  } else if (yourScore.innerHTML == 0) {
  }
}
function yourlost() {
  if (yourScore.innerHTML == 0) {
    guessNumb.innerHTML = 'you lost <i class="fa-regular fa-face-tired"></i>';
    guessNumb.setAttribute("style", "color: black");
  }
}

click.addEventListener("click", function () {
  let qstn = document.createElement("span");
  qstn.setAttribute("id", "qstn");
  qstn.textContent = "";
  numDiv.appendChild(qstn);

  if (parseInt(`${myInput.value}`) > random) {
    guessNumb.innerHTML = `My number less than ${myInput.value}`;
  } else if (parseInt(`${myInput.value}`) < random) {
    guessNumb.innerHTML = `My number greater than ${myInput.value}`;
  } else if (parseInt(`${myInput.value}`) === random) {
    guessNumb.innerHTML =
      'you are win <i class="fa-regular fa-face-smile"></i>';
    guessNumb.setAttribute("style", "color: red");
    questionSign.textContent = random;
    highScoreSpan.innerHTML = yourScore.textContent - 1;
  } else {
    guessNumb.innerHTML = "";
  }
  run();
  yourlost();
});

function clearForm() {
  myInput.value = "";
  guessNumb.innerHTML = "Guess my number";
  questionSign.textContent = "?";
  yourScore.innerHTML = "20";
  random = Math.floor(Math.random() * 100);
  highScoreSpan.innerHTML = "";
}
tryAgain.addEventListener("click", function () {
  clearForm();
});