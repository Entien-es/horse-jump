var character = document.getElementById("character");
var block = document.getElementById("block");
var main = document.getElementById("main");

var counter = 0;

var checkDead = setInterval(function () {
  let characterBot = parseInt(
    window.getComputedStyle(character).getPropertyValue("bottom")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 170 && blockLeft >= 80 && characterBot <= 50) {
    block.style.animation = "none";
    alert("Game Over. Your score: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 3.33s infinite linear";
  } else if (counter / 100 >= 1000) {
    counter += 5;
    document.getElementById("score").innerHTML = "Your Score: " + Math.floor(counter / 100);
  } else if (counter / 100 >= 100) {
    counter += 2;
    document.getElementById("score").innerHTML = "Your Score: " + Math.floor(counter / 100);
  } else {
    counter++;
    document.getElementById("score").innerHTML = "Your Score: " + Math.floor(counter / 100);
  }
}, 1);

function jump() {
  if (character.classList == "jump") return;
  character.classList.add("jump");
  setTimeout(function () {
    character.classList.remove("jump");
  }, 600);
}
