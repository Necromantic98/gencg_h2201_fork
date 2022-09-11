const points = 50;
const speedModifier = 0.9;
const minSpeed = 0.4;
const bounceBorder = 10;
const pointArrayX = [];
const pointArrayY = [];
const pointSpeedX = [];
const pointSpeedY = [];
const pointColor = [];
let distances = [];
let listances = [];
let shortances = [];
let circleSizes = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // noLoop();
  generatePoints(points);
  noSmooth();
  colorMode(HSB, 100);
  // frameRate(2);
  background(0);
}

function draw() {
  background(0, 100);
  for (let i = 0; i < points; i++) {
    for (let k = 0; k < points; k++) {
      if (i < k) {
        generateLines(i, k);
      }
      if (i != k) {
        distances.push(dist(pointArrayX[i], pointArrayY[i], pointArrayX[k], pointArrayY[k]));
      }
      
      // Drawing of the White Dots
      // ===========================
      stroke('white');
      strokeWeight(5);
      point(pointArrayX[i], pointArrayY[i])
    }
    distances.push(dist(pointArrayX[i], pointArrayY[i], pointArrayX[i], -bounceBorder))
    distances.push(dist(pointArrayX[i], pointArrayY[i], pointArrayX[i], height+bounceBorder))
    distances.push(dist(pointArrayX[i], pointArrayY[i], -bounceBorder, pointArrayY[i]))
    distances.push(dist(pointArrayX[i], pointArrayY[i], width+bounceBorder, pointArrayY[i]))
    distances.sort(function(a, b){return a - b});
    shortances.push(distances[0]);
    
    listances.push(distances);
    distances = [];
    
    
    // RBG Cycle
    // ==============
    pointColor[i] = (pointColor[i]+0.2)%100;
    
    // linearBounces(i);    
    randomBounces(i);
    
    // Adding the Speed to the Point Coordinates
    // ============================================
    pointArrayX[i] = pointArrayX[i]+pointSpeedX[i];
    pointArrayY[i] = pointArrayY[i]+pointSpeedY[i];
    stroke(pointColor[i], 100, 100);
  }
  
  
  // for (let i = 0; i < points; i++) {
  //   strokeWeight(2);
  //   fill(0, 0, 0);
  //   let index = shortances.indexOf(Math.min.apply(null, shortances));
  //   circleSizes[index] = shortances[index];
  //   if (shortances[index] > Math.min.apply(null, circleSizes)) {
  //     circle(pointArrayX[index], pointArrayY[index], shortances[index]*2-circleSizes[index])
  //   } else {
  //     circle(pointArrayX[index], pointArrayY[index], shortances[index])
  //   }
  //   shortances[index] = 10000;
  // }
  // // console.log(shortances);
  // shortances = [];



  for (let i = 0; i < points; i++) {
    strokeWeight(3);
    stroke(pointColor[i], 100, 100);
    fill(0, 0, 0);
    let distanceMin = Math.min.apply(null, listances[i]);

    if (listances[i][listances[i].indexOf(distanceMin)] < distanceMin) {
      circle(pointArrayX[i], pointArrayY[i], distanceMin*2-listances[i].indexOf(distanceMin));
    } else {
      circle(pointArrayX[i], pointArrayY[i], distanceMin);
    }
  }
  listances = [];
}

function generateLines(i, k) {
  strokeWeight(0.5);
  // Line Gradient
  // ===============
  var grad = this.drawingContext.createLinearGradient(pointArrayX[i], pointArrayY[i], pointArrayX[k], pointArrayY[k]);
  grad.addColorStop(0, color(pointColor[i], 100, 100));
  grad.addColorStop(1, color(pointColor[k], 100, 100));
  this.drawingContext.strokeStyle = grad;

  line(pointArrayX[i], pointArrayY[i], pointArrayX[k], pointArrayY[k]);
}

function generatePoints(points) {
  for (let i = 0; i < points; i++) {
    var x = Math.random()*(width-2*bounceBorder)+bounceBorder;
    pointArrayX.push(x);
    var y = Math.random()*(height-2*bounceBorder)+bounceBorder;
    pointArrayY.push(y);

    // Starting Direction of the points
    // ====================================
    var c = Math.random();
    if (c < 0.25) {
      pointSpeedX.push(Math.random()*speedModifier+minSpeed);
      pointSpeedY.push(Math.random()*speedModifier+minSpeed);
    } else if (c < 0.5) {
      pointSpeedX.push(-(Math.random()*speedModifier+minSpeed));
      pointSpeedY.push(Math.random()*speedModifier+minSpeed);
    } else if (c < 0.75) {
      pointSpeedX.push(-(Math.random()*speedModifier+minSpeed));
      pointSpeedY.push(-(Math.random()*speedModifier+minSpeed));
    } else {
      pointSpeedX.push(Math.random()*speedModifier+minSpeed);
      pointSpeedY.push(-(Math.random()*speedModifier+minSpeed));
    }

    // Color Array
    // ===============
    pointColor.push((100/points)*i);
  }
}

function linearBounces(i) {
  if (pointArrayX[i] >= width-bounceBorder || pointArrayX[i] <= bounceBorder) {
    pointSpeedX[i] = -pointSpeedX[i];
  } else if (pointArrayY[i] >= height-bounceBorder || pointArrayY[i] <= bounceBorder) {
    pointSpeedY[i] = -pointSpeedY[i];
  } 
}

function randomBounces(i) {
  if (pointArrayX[i] >= width) {
    pointSpeedX[i] = -(Math.random()*speedModifier+minSpeed);
  } else if (pointArrayX[i] <= 0) {
    pointSpeedX[i] = Math.random()*speedModifier+minSpeed;
  } else if (pointArrayY[i] >= height) {
    pointSpeedY[i] = -(Math.random()*speedModifier+minSpeed);
  } else if (pointArrayY[i] <= 0) {
    pointSpeedY[i] = Math.random()*speedModifier+minSpeed;
  }
}
