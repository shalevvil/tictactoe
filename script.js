let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");
let square5 = document.getElementById("square5");
let square6 = document.getElementById("square6");
let square7 = document.getElementById("square7");
let square8 = document.getElementById("square8");
let square9 = document.getElementById("square9");

let turn = document.getElementById("turn");

let popup = document.getElementById("popup");
let popuptext = document.getElementById("popup-text");
let restartgame = document.getElementById("restart-game");

square1.addEventListener("click", () => makemove(square1));
square2.addEventListener("click", () => makemove(square2));
square3.addEventListener("click", () => makemove(square3));
square4.addEventListener("click", () => makemove(square4));
square5.addEventListener("click", () => makemove(square5));
square6.addEventListener("click", () => makemove(square6));
square7.addEventListener("click", () => makemove(square7));
square8.addEventListener("click", () => makemove(square8));
square9.addEventListener("click", () => makemove(square9));

restartgame.addEventListener("click", () => closepopup());

let moveCounter;
let currentplayer;
startGame();

function startGame() {
  moveCounter = 0;
  currentplayer = "X";
  square1.textContent = "";
  square2.textContent = "";
  square3.textContent = "";
  square4.textContent = "";
  square5.textContent = "";
  square6.textContent = "";
  square7.textContent = "";
  square8.textContent = "";
  square9.textContent = "";
  turn.textContent = `תור${currentplayer}`;
}

function makemove(square) {
  if (square.textContent !== "") {
    return;
  }
  //שיהיה אפשר לעשות את המהלך
  //לבדוק האם ניצחת
  //לבדוק האם אפשר עוד לנצח
  square.textContent = currentplayer;
  moveCounter = moveCounter + 1
  if (checkwin()) {
    showvictoryscreen();
    return;
  } else if (moveCounter === 9) {
    showdrawscreen();
    return;
  } else {
    if (currentplayer === "X") {
      currentplayer = "O";
    } else {
      currentplayer = "X";
    }
    turn.textContent = `תור${currentplayer}`;
  }
}

function checkwin() {
  if (
    square1.textContent === square2.textContent &&
    square1.textContent === square3.textContent &&
    square1.textContent !== ""
  ) {
    return true;
  } else if (
    square4.textContent === square5.textContent &&
    square4.textContent === square6.textContent &&
    square4.textContent !== ""
  ) {
    return true;
  } else if (
    square7.textContent === square8.textContent &&
    square7.textContent === square9.textContent &&
    square7.textContent !== ""
  ) {
    return true;
  }
  //טורים
  if (
    square1.textContent === square4.textContent &&
    square1.textContent === square7.textContent &&
    square1.textContent !== ""
  ) {
    return true;
  } else if (
    square2.textContent === square5.textContent &&
    square2.textContent === square8.textContent &&
    square2.textContent !== ""
  ) {
    return true;
  } else if (
    square3.textContent === square6.textContent &&
    square3.textContent === square9.textContent &&
    square3.textContent !== ""
  ) {
    return true;
  } //אלכסונים
  if (
    square1.textContent === square5.textContent &&
    square1.textContent === square9.textContent &&
    square1.textContent !== ""
  ) {
    return true;
  } else if (
    square3.textContent === square5.textContent &&
    square3.textContent === square7.textContent &&
    square3.textContent !== ""
  ) {
    return true;
  }

  return false;
}

function showvictoryscreen() {
  showpopup("you win!!");
}

function showdrawscreen() {
  showpopup("draw");
}

function showpopup(text) {
  popuptext.textContent = text;
  popup.style.display = "flex";
}

function closepopup() {
  popup.style.display = "none";
  startGame();
}
