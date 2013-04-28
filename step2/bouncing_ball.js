var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

console.log("I am here!");
// physical variables
var g = 0.1; // gravity
var fac = 0.8; // velocity reduction factor per bounce
var radius = 20;
var color = "#00ff00";

// initialize position and veloctity of ball
var x = 50;
var y = 50;
var vx = 2;
var vy = 0;

// ensure that code does not run before page is loaded
window.onload = init();

function init() {
  // set up a timer
  setInterval(draw, 1000/60); //60 frames per second
}

function draw(){
  // update velocity
  vy += g; // gravity

  // update position
  x += vx;
  y += vy;

  // handle bouncing
  if (y > canvas.height - radius) {
    y = canvas.height - radius;
    vy *= -fac;
  }

  if (x > canvas.width + radius){
    x = - radius;
  }

  // update the ball
  drawBall();
}

function drawBall() {
  with(context) {
    clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    fillStyle = color;
    beginPath();
    arc(x, y, radius, 0, 2*Math.PI, true);
    closePath();
    fill();
  }
}