const xAmount = 1200;
const yAmount = 675;
const gridArray = [];
const gridArray2 = [];
let counter = 0;
let counter2 = 0;
let bool = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  generateGrid()
  // noLoop()
  background(255);
  noStroke()
}

function draw() {
  background(0, 30)

  if (!bool) {
    fill(255, 255, 255)
  } else {
    fill(255, 255, 255)
  }
  for (let i = 0; i < 5000; i++) {
    let number = Math.floor(random(0, xAmount*yAmount))
    rect(gridArray[number].x, gridArray[number].y, gridArray[number].w, gridArray[number].h)
    counter++
  
    if (counter >= xAmount*yAmount*2 && !bool) {
      bool = true
      counter = 0;
      // background(0);
      break;
    } else if (counter >= xAmount*yAmount*2 && bool) {
      bool = false
      counter = 0;
      // background(255);
      break;
    }
  }
  // console.log(gridArray[counter].y)
}

class cubes{
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

function generateGrid() {
  const w = (width/xAmount);
  const h = (window.innerHeight/yAmount);
  for (let i = 0; i < xAmount; i++) {
    for (let j = 0; j < yAmount; j++) {
      const cube = new cubes(w*i, h*j, w, h)
      gridArray[counter2] = cube;
      counter2++
    }
  }
  console.log(gridArray)
}