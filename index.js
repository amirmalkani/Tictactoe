let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turns = "X";
let isgameOver = false;

//Function to Change the turn
const changeTurn = () => {
  return turns === "X" ? "0" : "X";
};

//Function to check for win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Won";
      isgameOver = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
      Array.from(document.getElementsByClassName('box')).forEach(element=>{
        element.style.pointerEvents = "none";
      })
    }
  });
};

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText == "") {
      boxText.innerText = turns;
      turns = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turns;
      }
    }
  });
});

//Add onclick Listener on reset

reset.addEventListener("click", (e) => {
  let boxTexts = document.getElementsByClassName("boxText");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
  });
  turns = "X";
  isgameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turns;
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0";
  document.querySelector(".line").style.width = 0;
  Array.from(document.getElementsByClassName('box')).forEach(element=>{
    element.style.pointerEvents= 'visible';
  })
});

// function myFunction(x) {
//   if (x.matches) {
//     // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 800px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction); // Attach listener function on state changes
