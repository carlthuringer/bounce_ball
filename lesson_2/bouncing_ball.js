(function() {
  "use strict";
  var requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

function bouncyBallInit() {
  "use strict";
  window.BounceBall = {};
  window.BounceBall.canvas = document.getElementById('canvas');
  window.BounceBall.ball = {
    x: 50,
    y: 50,
    vx: 2,
    vy: 0,
    radius: 20,
    color: "#006660"
  };
  window.requestAnimationFrame(drawBall);
  setInterval(tickSimulation, 1);
}

function tickSimulation() {
  "use strict";
  var gravity = -0.1,
    bouncyFactor = 0.8,
    ball = window.BounceBall.ball,
    canvas = window.BounceBall.canvas;
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

function drawBall(time) {
  "use strict";
  window.requestAnimationFrame(drawBall);
  var ball = window.BounceBall.ball,
    canvas = window.BounceBall.canvas,
    context = canvas.getContext('2d');

  context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  context.fillStyle = ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI, true);
  context.closePath();
  context.fill();
}

// Load script when document is done loading:
// Most of this is here for compatability.
(function (){
  "use strict";
  if(window.addEventListener) {
  window.addEventListener('load', function load(){
    window.removeEventListener('load', load);
    bouncyBallInit(); // This is the important bit.
  });
} else if(window.attachEvent) {
  window.attachEvent('onload', function load(){
    window.detachEvent('onload', load);
    bouncyBallInit(); // This is the important bit for Internet Explorer
  });
}
})();
