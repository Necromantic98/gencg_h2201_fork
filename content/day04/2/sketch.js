function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  strokeWeight(5)
  stroke('white')
  angleMode(DEGREES);
  // frameRate(10)
  noFill()
}
let x1 = 0;
let y1 = 0;
let x2;
let y2;
const xDivider = 200;
const yDivider = 200;
let xCounter1 = 0;
let yCounter1 = 0;
let xCounter2 = xDivider;
let yCounter2 = 0;
let killCounter = 0;
let frames = 50000;

const radius1 = 200;
const radius2 = 200;
const radius3 = 100;
const radius4 = 70;
const radius5 = 30;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
const adder1 = 0.5;
const adder2 = -1;
const adder3 = -2.33;
const adder4 = 0.5;
const adder5 = 5.2;

let x;
let y;
let nextX;
let nextY;
let prevX;
let prevY;


function draw() {
  // background(0, 12);
  fancyLines()
  // randomLines();
  // orbitalLines()
}

function randomLines() {
  strokeWeight(0.2)
  x2 = Math.random()*width
  y2 = Math.random()*height;

  line(x1, y1, x2, y2)
  console.log(x1)
  x1 = x2
  y1 = y2

}

function fancyLines() {
  strokeWeight(0.1)
  if (yCounter1 == 0 && xCounter1 < xDivider) {
    xCounter1 += xDivider/(xDivider+10);
  } else if (yCounter1 < yDivider && xCounter1 == xDivider) {
    yCounter1 += yDivider/(yDivider);
  } else if (yCounter1 == yDivider && xCounter1 <= xDivider && xCounter1 > 0) {
    xCounter1 -= xDivider/(xDivider);
  } else if (yCounter1 <= yDivider && xCounter1 == 0) {
    yCounter1 -= yDivider/(yDivider);
  }

  if (yCounter2 == 0 && xCounter2 < xDivider) {
    xCounter2 += xDivider/(xDivider-10);
  } else if (yCounter2 < yDivider && xCounter2 == xDivider) {
    yCounter2 += yDivider/(yDivider);
  } else if (yCounter2 == yDivider && xCounter2 <= xDivider && xCounter2 > 0) {
    xCounter2 -= xDivider/(xDivider);
  } else if (yCounter2 <= yDivider && xCounter2 == 0) {
    yCounter2 -= yDivider/(yDivider);
  }

  x1 = (width/xDivider)*xCounter1;
  y1 = (height/yDivider)*yCounter1;
  x2 = (width/xDivider)*xCounter2;
  y2 = (height/yDivider)*yCounter2;

  if (xCounter2 >= xDivider) {
    xCounter2 = xDivider;
  } else if (xCounter2 <= 0) {
    xCounter2 = 0;
  }
  if (yCounter2 >= yDivider) {
    yCounter2 = yDivider;
  } else if (yCounter2 <= 0) {
    yCounter2 = 0;
  }
  
  if (xCounter1 >= xDivider) {
    xCounter1 = xDivider;
  } else if (xCounter1 <= 0) {
    xCounter1 = 0;
  }
  if (yCounter1 >= yDivider) {
    yCounter1 = yDivider;
  } else if (yCounter1 <= 0) {
    yCounter1 = 0;
  }


  // console.log("x = "+Math.floor(xCounter2))
  // console.log("y = "+yCounter2)

  line(x1, y1, x2, y2);

  if (onclick) {
    frameRate(0);
    console.log("kill")
  }
  killCounter++
}

function orbitalLines() {
let looper = 8
  for (let i = 0; i < looper; i++) {
    const divider = 360/looper;
      drawStartOrbitalLines(-angle1+i*divider, radius1, -adder1, 'red')
      drawOrbitalLines(angle2+i*divider+looper, radius2, adder2, 'white')
      drawOrbitalLines(-angle3+i*divider, radius3, -adder3, 'lightgreen')
      drawOrbitalLines(angle4+i*divider+looper, radius4, adder4, 'yellow')
      drawOrbitalLines(-angle5+i*divider, radius5, -adder5, 'magenta')

      drawStartOrbitalLines(angle1+i*divider, radius1/3, adder1, 'red')
      drawOrbitalLines(angle2+i*divider+looper, radius2, adder2, 'white')
      drawOrbitalLines(-angle3+i*divider, radius3, -adder3, 'lightgreen')
      drawOrbitalLines(angle4+i*divider+looper, radius4, adder4, 'yellow')
      drawOrbitalLines(-angle5+i*divider, radius5, -adder5, 'magenta')
  }

    // point(x, y);
  angle1 = (angle1+adder1)%360;
  angle2 = (angle2+adder2)%360;
  angle3 = (angle3+adder3)%360;
  angle4 = (angle4+adder4)%360;
  angle5 = (angle5+adder5)%360;
}

function drawStartOrbitalLines(angle, radius, adder, s) {
  x = cos(angle-90)*radius+width/2
  nextX = cos(angle+adder-90)*radius+width/2
  y = sin(angle-90)*radius+height/2
  nextY = sin(angle+adder-90)*radius+height/2
  prevX = x;
  prevY = y;
  
  stroke(s)
  line(x, y, nextX, nextY)
}

function drawOrbitalLines(angle, radius, adder, s) {
  x = cos(angle-90)*radius+prevX;
  nextX = cos(angle+adder-90)*radius+nextX;
  y = sin(angle-90)*radius+prevY
  nextY = sin(angle+adder-90)*radius+nextY;
  prevX = x;
  prevY = y;
  
  stroke(s)
  line(x, y, nextX, nextY)
}