// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The sprite continuously crops and displays the image.
  this.sprite = 'images/enemy-bug.png';
};

var Enemy_Rock = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The sprite continuously crops and displays the image.
  this.sprite = 'images/Rock.png';
};



Enemy_Rock.prototype.update = function(dt) {
  this.x += this.speed * dt;
  if (this.x >= 505) {
    this.x = 0;
  }
  checkCollision(this);
};

Enemy_Rock.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;

  // 505 defines the width of the Canvas.
  // The code that initializes the left end again when the enemy is struck at the right end.
  if (this.x >= 505) {
    this.x = 0;
  }
  checkCollision(this);
};

// * Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Definition Player
var Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  displayScoreLevel(score, gameLevel);
};

// KeyPress Settings
Player.prototype.handleInput = function(keyPress) {
  if (keyPress == 'left') {
    player.x -= player.speed;
  }
  if (keyPress == 'up') {
    player.y -= player.speed - 20;
  }
  if (keyPress == 'right') {
    player.x += player.speed;
  }
  if (keyPress == 'down') {
    player.y += player.speed - 20;
  }
  console.log('keyPress is: ' + keyPress);
};

// Display Score
var displayScoreLevel = function(aScore, aLevel) {
  var canvas = document.getElementsByTagName('canvas');
  var firstCanvasTag = canvas[0];
  scoreLevelDiv.innerHTML = 'Score : ' + aScore + ' / ' + 'Level : ' + aLevel;
  document.body.insertBefore(scoreLevelDiv, firstCanvasTag[0]);
};

// Check Collision
var checkCollision = function(anEnemy) {
  // check for collision between enemy and player
  if (
    player.y + 131 >= anEnemy.y + 90 &&
    player.x + 25 <= anEnemy.x + 88 &&
    player.y + 73 <= anEnemy.y + 135 &&
    player.x + 76 >= anEnemy.x + 11) {
    console.log('collided');
    // Position player after Collision
    player.x = 202.5;
    player.y = 383;
  }




  // check for player reaching top of canvas and winning the game
  if (player.y + 63 <= 0) {
    // if player wins, add 1 to the score and level
    player.x = 202.5;
    player.y = 383;
    console.log('you made it!');

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 505, 350);
    // pass score as an argument to the increaseDifficulty function
    score += 1;
    gameLevel += 1;
    console.log('current score: ' + score + ', current level: ' + gameLevel);
    increaseDifficulty(score);
  }

  // check if player runs into left, bottom, or right canvas walls
  // prevent player from moving beyond canvas wall boundaries
  if (player.y > 383) {
    player.y = 383;
  }
  if (player.x > 402.5) {
    player.x = 402.5;
  }
  if (player.x < 2.5) {
    player.x = 2.5;
  }
};

// Increase number of enemies on screen based on player's score
var increaseDifficulty = function(numEnemies) {
  // remove all previous enemies on canvas
  allEnemies.length = 0;

  // load new set of enemies
  for (var i = 0; i <= numEnemies; i++) {
    var enemy = new Enemy(0, Math.random() * 260 + 50, Math.random() * 256);
    var enemy_rock = new Enemy_Rock(0, Math.random() * 260 + 50, Math.random() * 256);

    allEnemies.push(enemy, enemy_rock);
  }
};

// Initial setting
var allEnemies = [];
var player = new Player(202.5, 383, 100);
var score = 0;
var gameLevel = 1;
var scoreLevelDiv = document.createElement('div');
var enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
var enemy_rock = new Enemy_Rock(0, Math.random() * 184 + 50, Math.random() * 256);

allEnemies.push(enemy, enemy_rock);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
