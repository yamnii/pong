var playerPaddle;
var computerPaddle;
var ball;

var gameState = "serve";

var playerScore = 0;
var computerScore = 0;

function setup(){
  createCanvas(400,400);
  
  playerPaddle = createSprite(388, 200, 14, 100);
  computerPaddle = createSprite(12, 200, 14, 100);
  ball = createSprite(200, 200, 12, 12);
}

function draw() {
  background("maroon");

  text("!! TRY TO DEFEAT YAM !! (You have 5 chances :p)", 80, 30);
  
  text("Yaaaaamniiii", 123, 50);
  text("Jeevan", 235, 50);
  
  text(computerScore, 150, 70);
  text(playerScore, 250, 70);
  
  drawNet();
  
  playerPaddle.y = mouseY;
  
  if(ball.x < 200) {
      computerPaddle.y = ball.y;
  }
  
  if(ball.isTouching(playerPaddle)) {
    background("green");
  }
  else if(ball.isTouching(computerPaddle)) {
    background("red");
  }
  
  if(gameState === "serve") {
    if(computerScore === 1) {
      text("LOL ..", 300, 280);
    }
    else if(computerScore === 2) {
      text("OH NO !! :D", 270, 280);
      text("IT'S ALRIGHT JEEVAN ..TRY AGAIN", 210, 300);
    }
    else if(computerScore === 3) {
      text("KEEP AN EYE ON SCORE J ^_^", 220, 280);
    }
    else if(computerScore === 4) {
      text("YOU'RE LOOSING BABY :(", 230, 280);
      text("FOCUS FOCUS ;)", 252, 300);
    }
  }
  if(keyDown("space") && gameState === "serve") {
    serveball();
    gameState = "play";
  }
  
  edges = createEdgeSprites();
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  // ball.bounceOff(edges[0]);
  // ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  if(ball.x < 0 || ball.x > 400) {
    resetball();
    if(ball.x < 0) {
      playerScore = playerScore + 1;
    }
    else {
      computerScore += 1;
    }
    gameState = "serve";
  }
  
  if(playerScore === 5 || computerScore === 5) {
    gameState = "over";
    text("BUAHAHAHAH !!!!!! I TOLD YOU ..", 210, 280);
    text("YOU CAN'T DEFEAT ME BABY", 220, 300);
    text("YOU CAN'T DEFEAT YAAAAAAAM", 212, 320);
    text("GAME OVER", 170, 150);
    text("Press 'R' to restart the game", 130, 180);
  }
  
  if(keyDown("r" || "R") && gameState === "over") {
    gameState = "serve";
    playerScore = 0;
    computerScore = 0;
  }
  
  drawSprites();
}

function drawNet() {
  for(var i = 0; i <= 380; i = i + 20) {
    line(200, i, 200, i+10);
  }
}

function serveball() {
  ball.velocityX = 3;
  ball.velocityY = 2;
}

function resetball() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}
