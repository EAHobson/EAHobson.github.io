//https://dev.to/martyhimmel/moving-a-sprite-sheet-character-with-javascript-3adg

const SCALE = 1;
const WIDTH = 144;//16;
const HEIGHT = 128;//18;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;
const CYCLE_LOOP = [0, 1, 0, 2];
//const FACING_DOWN = 0;
//const FACING_UP = 1;
const FACING_LEFT = 1;
const FACING_RIGHT = 0;
const FRAME_LIMIT = 12;
const MOVEMENT_SPEED = 2;

let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let keyPresses = {};
let currentDirection = FACING_RIGHT;
let currentLoopIndex = 0;
let frameCount = 0;
let moveCount = 0;
let table = document.getElementById("positions");
//Hides the table. Not sure if this is a good idea or not.
table.style.visibility = "hidden";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function createTable() {
    var table = document.getElementById("positions");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "x";
    cell2.innerHTML = "y";
  }
createTable();  



let randX = getRndInteger(0,canvas.width-SCALED_WIDTH)
let randY = getRndInteger(0,canvas.height-SCALED_HEIGHT)

let positionX = getRndInteger(0,canvas.width-SCALED_WIDTH)
let positionY = getRndInteger(0,canvas.height-SCALED_HEIGHT)
let img = new Image();

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

function loadImage() {
  img.src = "sprites/penguin-sprite2.png"
  img.onload = function() {
    window.requestAnimationFrame(gameLoop);
  };
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  
  //A hack to stay in first row of the sprite sheet. 
  //frameY = 0
ctx.drawImage(img,frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

loadImage();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let hasMoved = false;

  if (keyPresses.w) {
    moveCharacter(0, -MOVEMENT_SPEED, currentDirection);
    hasMoved = true;
  } else if (keyPresses.s) {
    moveCharacter(0, MOVEMENT_SPEED, currentDirection);
    hasMoved = true;
  }

  if (keyPresses.a) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
    hasMoved = true;
  } else if (keyPresses.d) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    hasMoved = true;
  }

  if (hasMoved) {
    frameCount++;
    //Adds position to table
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = positionX;
    cell2.innerHTML = positionY;
    moveCount++;
    //to here
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
      }
    }
  }

  if (!hasMoved) {
    currentLoopIndex = 0;
  }

  drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
  window.requestAnimationFrame(gameLoop);
}

function moveCharacter(deltaX, deltaY, direction) {
  if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
    positionX += deltaX;
  }
  if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
    positionY += deltaY;
  }
  currentDirection = direction;
}