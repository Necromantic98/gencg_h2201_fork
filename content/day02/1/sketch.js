const circlesHor = 10;
const circlesVert = circlesHor/2;
const diameter = 22;
const speed = 2;
const colorModifier = 0.01;
let color = 0;
const posCircleXhor = []
const posCircleYhor = []
const posCircleXvert = []
const posCircleYvert = []
const posCircleXup = []
const posCircleYup = []
const posCircleXhorRev = []
const posCircleYhorRev = []

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // noLoop();
  generateCircleCoord();
  colorMode(HSB, 100);
  strokeWeight(2.5)
  // frameRate(2)
}

function draw() {
  background(0, 5);
  fill(0, 0, 70)
  for (let i = 0; i <= circlesHor; i++) {
    for (let j = 0; j <= circlesVert; j++) {
      stroke((25+color)%100, 100, 80)
      circle(posCircleXhor[i], posCircleYhor[j], diameter);
      stroke((50+color)%100, 1000, 80)
      circle(posCircleXhorRev[i], posCircleYhorRev[j], diameter);
      stroke((75+color)%100, 100, 80)
      circle(posCircleXvert[i], posCircleYvert[j], diameter)
      stroke((color)%100, 100, 80)
      circle(posCircleXup[i], posCircleYup[j], diameter)
    }
    color += colorModifier;
    posCircleXhor[i] = (posCircleXhor[i]+speed)%width;
    posCircleXhorRev[i] -= speed;
    posCircleYvert[i] = (posCircleYvert[i]+speed)%height;
    posCircleYup[i] -= speed;
    if (posCircleYup[i] <= 0) {
      posCircleYup[i] = height;
    }
    if (posCircleXhorRev[i] <= 0) {
      posCircleXhorRev[i] = width;
    }
  }

  // console.log(posCircleXup)
  // console.log(posCircleYup)
  fill(0, 0, 0)
  stroke(100, 100, 0)
  rect(0, 0, width, diameter/2)
  rect(0, height-diameter/2, width, diameter/2)
  rect(0, 0, diameter/2, height)
  rect(width-diameter/2, 0, diameter/2, height)
  
}

function generateCircleCoord() {
  for (let i = 0; i <= circlesHor; i++) {
    posCircleXhor.push((width/circlesHor)*i)
    posCircleXup.push((width/circlesHor)*i)
    if (i != circlesHor) {
      posCircleXvert.push((width/circlesHor)*i+width/(circlesHor*2))
      posCircleXhorRev.push((width/circlesHor)*i+width/(circlesHor*2))
    }
  }
  for (let i = 0; i <= circlesVert; i++) {
    posCircleYhor.push((height/circlesVert)*i)
    if (i != circlesVert) {
      posCircleYvert.push((height/circlesVert)*i)
      posCircleYup.push((height/circlesVert)*i+height/(circlesVert*2))
      posCircleYhorRev.push((height/circlesVert)*i+height/(circlesVert*2))
    }
  }
}
