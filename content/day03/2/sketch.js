function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  background(0)
}

function draw() {
  background(0, 15);
  const today = new Date();

  const milliSec =today.getMilliseconds();
  const seconds = today.getSeconds();
  const minutes = today.getMinutes();
  const hours   = today.getHours();

  const radiusSec  = width/8;
  const radiusMin  = width/6;
  const radiusHour = width/5;

  const radiusLine = width/2.3;

  const ellipseMod = pow(2, 1.6);

  const diameterSun = width/10;
  const diameterSec = width/16;
  const diameterMin = width/15;
  const diameterHour = width/14;

  const xSec = cos((seconds+milliSec/1000)*6-90)*radiusSec*ellipseMod+width/2;
  const ySec = sin((seconds+milliSec/1000)*6-90)*radiusSec+height/2;

  const xMin = cos((minutes+(seconds-milliSec/1000)/60)*6-90)*radiusMin*ellipseMod+width/2;
  const yMin = sin((minutes+(seconds-milliSec/1000)/60)*6-90)*radiusMin+height/2;

  const xHour = cos((hours+(minutes+seconds/60)/60)*30-90)*radiusHour*ellipseMod+width/2;
  const yHour = sin((hours+(minutes+seconds/60)/60)*30-90)*radiusHour+height/2;

  fill(0, 0, 0, 0)
  strokeWeight(0.5);
  stroke(30, 30, 30, 100)
  ellipse(width/2, height/2, radiusSec*2*ellipseMod, radiusSec*2)
  ellipse(width/2, height/2, radiusMin*2*ellipseMod, radiusMin*2)
  ellipse(width/2, height/2, radiusHour*2*ellipseMod, radiusHour*2)

  strokeWeight(0.1);
  stroke(60, 60, 60)
  line(cos(180)*radiusLine*ellipseMod+width/2, height/2, radiusLine*ellipseMod+width/2, height/2)
  line(width/2, height/2-radiusLine, width/2, height/2+radiusLine)
  line(cosWidth(240, radiusLine, width, ellipseMod), sinHeight(240, radiusLine, height), cosWidth(60, radiusLine, width, ellipseMod), sinHeight(60, radiusLine, height))
  line(cosWidth(210, radiusLine, width, ellipseMod), sinHeight(210, radiusLine, height), cosWidth(30, radiusLine, width, ellipseMod), sinHeight(30, radiusLine, height))
  line(cosWidth(150, radiusLine, width, ellipseMod), sinHeight(150, radiusLine, height), cosWidth(-30, radiusLine, width, ellipseMod), sinHeight(-30, radiusLine, height))
  line(cosWidth(120, radiusLine, width, ellipseMod), sinHeight(120, radiusLine, height), cosWidth(-60, radiusLine, width, ellipseMod), sinHeight(-60, radiusLine, height))
  
  strokeWeight(0.02);
  stroke(255, 255, 255)
  line(xSec, ySec, width/2, height/2);
  line(xMin, yMin, width/2, height/2)
  line(xHour, yHour, width/2, height/2)

  strokeWeight(0);
  if (seconds > 15 && seconds < 45) {
    fill(175, 175, 0);
    circle(width/2, height/2, diameterSun);
    // console.log("1")
  }
  
  fill(255, 120, 0)
  circle(xSec, ySec, diameterSec);
  

  fill(200, 0, 0)
  circle(xMin, yMin, diameterMin);

  
  fill(100, 0, 180)
  circle(xHour, yHour, diameterHour);

  if(seconds <= 15 || seconds >= 45) {
    fill(175, 175, 0);
    circle(width/2, height/2, diameterSun);
    // console.log("2")
  }
}

function sinHeight(a, r, h) {
  return sin(a)*r+h/2;
}

function cosWidth(a, r, w, el) {
  return cos(a)*r*el+w/2;
}
