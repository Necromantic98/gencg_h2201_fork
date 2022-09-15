let xAmount;
let yAmount;
const gridArray = [];
const gridArray2 = [];
let counter = 0;
let counter2 = 0;
let bool = false;
let img;

function preload() {
  img = loadImage('https://i.kym-cdn.com/entries/icons/mobile/000/026/152/gigachad.jpg')
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  xAmount = img.width
  yAmount = img.height
  generateGrid()
  img.loadPixels()
  // noLoop()
  background(0);
  // noStroke()
  strokeWeight(3)
}

function draw() {
  background(0, 10)

  for (let i = 0; i < 2000; i++) {
    let number = Math.floor(random(0, gridArray.length))

    fill((img.pixels[4*number])%255, (img.pixels[4*number+1])%255, (img.pixels[4*number+2])%255)
    stroke((img.pixels[4*number])%255, (img.pixels[4*number+1])%255, (img.pixels[4*number+2])%255)

    circle(gridArray[number].x, gridArray[number].y, 10)
    // square(gridArray[number].x, gridArray[number].y, 10)
    // line(gridArray[number].x, gridArray[number].y, gridArray[number].x+100, gridArray[number].y)
    // rect(gridArray[number].x, gridArray[number].y, gridArray[number].w, gridArray[number].h)
  }
  // console.log(img.pixels)
  img.updatePixels()
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
  const h = (height/yAmount);
  for (let i = 0; i < yAmount; i++) {
    for (let j = 0; j < xAmount; j++) {
      const cube = new cubes(w*j, h*i, w, h)
      gridArray[counter2] = cube;
      counter2++
    }
  }
  // console.log(gridArray)
}