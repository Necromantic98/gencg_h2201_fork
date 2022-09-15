const devices = [];
let video;
let cam;
let array;
let brightnesss;
const camWidth = 200;
const camHeight = camWidth/16*9;
const border = 250;

function gotDevices(deviceInfos) {
  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    if (deviceInfo.kind == 'videoinput') {
      devices.push({
        label: deviceInfo.label,
        id: deviceInfo.deviceId
      });
    }
  }
  console.log(devices);
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  console.log(supportedConstraints);
  var constraints = {
    video: {
      deviceId: {
        exact: devices[1].id
      },
    }
  };
  cam = createCapture(constraints);
  cam.size(camWidth, camHeight)
  cam.hide();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // navigator.mediaDevices.enumerateDevices().then(gotDevices);
  noStroke();
  background(0)
  cam = createCamera(VIDEO);
  cam.size(camWidth, camHeight)
  cam.hide();
}

function draw() {
  background(0);
  cam.loadPixels()

  for (let i = 0; i < cam.height; i += 1) {
    for (let j = 0; j < cam.width; j += 1) {
      let offset = 4*(j+(i*cam.width));
      let c = color(cam.pixels[offset], cam.pixels[offset+1], cam.pixels[offset+2])
      brightnesss = brightness(c)
      
      fill(255, 255, 255)
      circle(width/camWidth*j, height/camHeight*i, brightnesss/12)
    }
  }
  cam.updatePixels();
}