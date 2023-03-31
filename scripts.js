const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");



function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
   
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
    );
  
    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 180) {
      // collision
      alert("Game Over!");
    }
  }, 10);
  
  document.addEventListener("keydown", function (event) {
    jump();
  });

  let score = 0;
  let highScore = 0;
  let velocity = 10;
  
  // Update the score every 100ms
  setInterval(() => {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
  
    if (score > highScore) {
      highScore = score;
      document.getElementById('highscore').textContent = `High Score: ${highScore}`;
    }
  }, 100);
  
  // Update the velocity every 5 seconds
  setInterval(() => {
    velocity += 5;
    document.getElementById('velocity').textContent = `Velocity: ${velocity}`;
  }, 5000);