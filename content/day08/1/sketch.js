let cArray = [];
let lArray = [];
let diamInc;
let angle = 0;
let radius = 0;
let prevX;
let prevY;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(1);
  noFill();
  background(100);
  angleMode(DEGREES);
}

function draw() {
  background(0, 10);
  // console.log(cArray)
  
  for (let i = 0; i < cArray.length; i++) {
    stroke('white');
    cArray[i].diameter += 1.5
    circle(cArray[i].mX, cArray[i].mY, cArray[i].diameter);
    
    if (cArray[i].diameter >= 100) {
      let multi = 4;
      stroke(150, 0, 0);
      let radius = lArray[i].r;
      for (let j = 0; j < multi; j++) {
        let angle = lArray[i].a+360/multi*j;
        let x = cos(angle)*radius+lArray[i].x1;
        let y = sin(angle)*radius+lArray[i].y1;
        line(lArray[i].x1, lArray[i].y1, x, y);
        lArray[i].x1 = x;
        lArray[i].y1 = y;
        lArray[i].a += 0.5;
        lArray[i].r += 0.2;
      }
    }
    // if (cArray[i].diameter >= 100) {
    //   let multi = 3;
    //   stroke('red');
    //   for (let j = 0; j < multi; j++) {
    //     let angle = lArray[i].a+360/multi*j;
    //     let radius = lArray[i].r;
    //     let x = cos(angle)*radius+lArray[i].x1;
    //     let y = sin(angle)*radius+lArray[i].y1;
    //     line(lArray[i].x2, lArray[i].y2, x, y);
    //     lArray[i].x2 = x;
    //     lArray[i].y2 = y;
    //     lArray[i].a += 4;
    //     lArray[i].r += 0.2;
    //   }
    // }
  }

  cArray.forEach(element => {
    if (element.diameter >= 750) {
      // console.log(cArray.indexOf(element));
      cArray.splice(cArray.indexOf(element), 1);
      lArray.splice(cArray.indexOf(element), 1);
    }
  });
}

class circles {
  constructor(mX, mY, diameter) {
    this.mX = mX;
    this.mY = mY;
    this.diameter = diameter;
  }
}

class lines {
  constructor(x1, y1, x2, y2, r, a) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.r = r;
    this.a = a;
  }
}

function mouseClicked() {
  // let number = Math.floor(random(20, 40));
  let number = 1;
  circle(mouseX, mouseY, number)
  let cir = new circles(mouseX, mouseY, number)
  cArray.push(cir)
  let linee = new lines(mouseX, mouseY, mouseX, mouseY, radius, angle)
  lArray.push(linee);
}