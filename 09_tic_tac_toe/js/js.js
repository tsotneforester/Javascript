//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
var table = document.getElementById("game-table");
var xwins = document.getElementById("xwins");
var ywins = document.getElementById("ywins");
var draw_wins = document.getElementById("draw_wins");
var tableEntry = document.querySelectorAll(".box");
var isToggling = false;
let xscore = 0;
let yscore = 0;
let drawscore = 0;

function stringify(array, ...n) {
  let text = "";
  for (let i = 0; i < n.length; i++) {
    text += array[n[i]];
  }
  return text;
}

function blink_line(array, time, string, ...n) {
  setTimeout(() => {
    for (let i = 0; i < n.length; i++) {
      tableEntry[n[i]].innerHTML = string;
    }
  }, time);
}

function x_scores() {
  setTimeout(function () {
    xscore++;
    xwins.innerHTML = xscore;
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      tableEntry[i].innerHTML = "";
    }
  }, 1000);
}
function y_scores() {
  setTimeout(function () {
    yscore++;
    ywins.innerHTML = yscore;
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      tableEntry[i].innerHTML = "";
    }
  }, 1000);
}
function draw() {
  setTimeout(function () {
    drawscore++;
    draw_wins.innerHTML = drawscore;
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      tableEntry[i].innerHTML = "";
    }
  }, 1000);
}

function checkstatus() {
  let progress_array = [];
  for (var i = 0, il = tableEntry.length; i < il; i++) {
    progress_array.push(tableEntry[i].innerHTML);
  }

  if (stringify(progress_array, 0, 1, 2) === "XXX") {
    blink_line(progress_array, 100, "", 0, 1, 2);
    blink_line(progress_array, 350, "X", 0, 1, 2);
    blink_line(progress_array, 600, "", 0, 1, 2);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 3, 4, 5) === "XXX") {
    blink_line(progress_array, 100, "", 3, 4, 5);
    blink_line(progress_array, 350, "X", 3, 4, 5);
    blink_line(progress_array, 600, "", 3, 4, 5);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 6, 7, 8) === "XXX") {
    blink_line(progress_array, 100, "", 6, 7, 8);
    blink_line(progress_array, 350, "X", 6, 7, 8);
    blink_line(progress_array, 600, "", 6, 7, 8);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 0, 3, 6) === "XXX") {
    blink_line(progress_array, 100, "", 0, 3, 6);
    blink_line(progress_array, 350, "X", 0, 3, 6);
    blink_line(progress_array, 600, "", 0, 3, 6);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 1, 4, 7) === "XXX") {
    blink_line(progress_array, 100, "", 1, 4, 7);
    blink_line(progress_array, 350, "X", 1, 4, 7);
    blink_line(progress_array, 600, "", 1, 4, 7);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 2, 5, 8) === "XXX") {
    blink_line(progress_array, 100, "", 2, 5, 8);
    blink_line(progress_array, 350, "X", 2, 5, 8);
    blink_line(progress_array, 600, "", 2, 5, 8);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 0, 4, 8) === "XXX") {
    blink_line(progress_array, 100, "", 0, 4, 8);
    blink_line(progress_array, 350, "X", 0, 4, 8);
    blink_line(progress_array, 600, "", 0, 4, 8);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 2, 4, 6) === "XXX") {
    blink_line(progress_array, 100, "", 2, 4, 6);
    blink_line(progress_array, 350, "X", 2, 4, 6);
    blink_line(progress_array, 600, "", 2, 4, 6);
    progress_array = [];
    x_scores();
  } else {
    if (!progress_array.includes("")) {
      draw();
    } else {
      computerMove();
    }
  }
}

function computerMove() {
  setTimeout(function () {
    let myarray = [];
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      if (tableEntry[i].innerHTML === "") {
        myarray.push(i);
      }
    }
    let zorg = myarray[Math.floor(Math.random() * myarray.length)];
    tableEntry[zorg].innerHTML = "O";
    let progress_array = [];
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      progress_array.push(tableEntry[i].innerHTML);
    }

    if (stringify(progress_array, 0, 1, 2) === "OOO") {
      blink_line(progress_array, 100, "", 0, 1, 2);
      blink_line(progress_array, 350, "O", 0, 1, 2);
      blink_line(progress_array, 600, "", 0, 1, 2);
      progress_array = [];
      y_scores();
    } else if (stringify(progress_array, 3, 4, 5) === "OOO") {
      blink_line(progress_array, 100, "", 3, 4, 5);
      blink_line(progress_array, 350, "O", 3, 4, 5);
      blink_line(progress_array, 600, "", 3, 4, 5);
      progress_array = [];
      y_scores();
    } else if (stringify(progress_array, 6, 7, 8) === "OOO") {
      blink_line(progress_array, 100, "", 6, 7, 8);
      blink_line(progress_array, 350, "O", 6, 7, 8);
      blink_line(progress_array, 600, "", 6, 7, 8);
      progress_array = [];
      y_scores();
    } else if (stringify(progress_array, 0, 3, 6) === "OOO") {
      blink_line(progress_array, 100, "", 0, 3, 6);
      blink_line(progress_array, 350, "O", 0, 3, 6);
      blink_line(progress_array, 600, "", 0, 3, 6);
      progress_array = [];
      y_scores();
    } else if (stringify(progress_array, 1, 4, 7) === "OOO") {
      blink_line(progress_array, 100, "", 1, 4, 7);
      blink_line(progress_array, 350, "O", 1, 4, 7);
      blink_line(progress_array, 600, "", 1, 4, 7);
      progress_array = [];
      y_scores();
    } else if (stringify(progress_array, 2, 5, 8) === "OOO") {
      blink_line(progress_array, 100, "", 2, 5, 8);
      blink_line(progress_array, 350, "O", 2, 5, 8);
      blink_line(progress_array, 600, "", 2, 5, 8);
      progress_array = [];
      y_scores();
    } else if (stringify(progress_array, 0, 4, 8) === "OOO") {
      blink_line(progress_array, 100, "", 0, 4, 8);
      blink_line(progress_array, 350, "O", 0, 4, 8);
      blink_line(progress_array, 600, "", 0, 4, 8);
      progress_array = [];
      y_scores();
    } else if (stringify(progress_array, 2, 4, 6) === "OOO") {
      blink_line(progress_array, 100, "", 2, 4, 6);
      blink_line(progress_array, 350, "O", 2, 4, 6);
      blink_line(progress_array, 600, "", 2, 4, 6);
      progress_array = [];
      y_scores();
    }
  }, 1000);
}

function toggle(e) {
  if (e.target.innerHTML == "") {
    e.target.innerHTML = "X";
    checkstatus();
  }
}

function startGame() {
  for (var i = 0, il = tableEntry.length; i < il; i++) {
    tableEntry[i].onclick = toggle;
  }
}

startGame();
