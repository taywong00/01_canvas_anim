//retrieve node in DOM via ID
var c = document.getElementById("slate");
console.log('c: ', c);
var stop = document.getElementById("stop");
console.log('stop: ', stop);
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");
console.log('context: ', ctx);

var drawDot = function(e) {
  ctx.beginPath();
  ctx.strokeStyle="#0000FF"; //set stroke style red
  ctx.fillStyle="#FF0000"; //set fill style red
  ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI); //set arc shape -> e.offsetX, e.offsetY get coordinates of x and y; radius of 10, startAngle = 0 radians, endAngle = 2pi -- full circle)
  ctx.stroke(); //actually do the stroke
  ctx.fill(); //actually do the fill
  window.requestAnimationFrame();
  console.log('window.requestAnimationFrame()', window.requestAnimationFrame());
}


var moveDot = function(e) {

}

var animate = function(e) {
  drawDot(e);
}

var clearFunction = function(e) {
  ctx.clearRect(0, 0, c.width, c.height); //clears everything in a rect from the x, y of the upper hand corner through the given width/height
}

c.addEventListener("click", animate);
stop.addEventListener("click", stopFunction);
