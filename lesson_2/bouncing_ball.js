window.onload = init();
function init() {
  "use strict";
  var canvas = document.getElementById('canvas'),
  ball = {
    x: 50,
    y: 50,
    vx: 2,
    vy: 0,
    radius: 20,
    color: "#006660"
  };
  setInterval(drawBall, 1000/60, ball, canvas); //draw 60 frames per second
  setInterval(tickSimulation, 1, ball, canvas);
}

function tickSimulation(ball, canvas) {
  "use strict";
  var gravity = -0.1,
  bouncyFactor = 0.8;

  // update y axis velocity
  ball.vy -= gravity;

  // bounce the ball off the edges of the canvas
  if ((ball.y + ball.radius >= canvas.height) || (ball.y - ball.radius < 0)) {
    ball.vy *= -bouncyFactor;
  }

  if ((ball.x + ball.radius >= canvas.width) || (ball.x - ball.radius < 0)){
    ball.vx *= -bouncyFactor;
  }

  // update position
  ball.x += ball.vx;
  ball.y += ball.vy;
}

function drawBall(ball, canvas) {
  "use strict";
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  context.fillStyle = ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI, true);
  context.closePath();
  context.fill();
}
