let gamesq = [];
let usersq = [];

let level = 0;

let gamestart = false;

let h2 = document.querySelector("h2");
let btns = ["yellow", "purple", "green", "red"];

document.addEventListener("keypress", function () {
  if (gamestart == false) {
    console.log("game started");
    gamestart = true;

    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelup() {
  usersq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let btnIdx = Math.floor(Math.random() * 3);
  let btnColor = btns[btnIdx];
  let rndBtn = document.querySelector(`.${btnColor}`);
  gamesq.push(btnColor);
  console.log(gamesq);
  btnflash(rndBtn);
}

function checkAns(idx) {
  if (usersq[idx] == gamesq[idx]) {
    if (usersq.length == gamesq.length) {
      levelup();
    }
  } else {
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart the game`;
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnflash(btn);
  console.log(btn);
  let userColor = btn.getAttribute("id");
  console.log(btn);
  console.log(userColor);
  usersq.push(userColor);
  console.log(usersq);

  checkAns(usersq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gamestart = false;
  level = 0;
  gamesq = [];
  usersq = [];
}
