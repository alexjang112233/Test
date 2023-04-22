function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  if (mouseY < width/2) { 
    fill(255, 0, 0,10);
  } else {
    fill(255, 0, 0,255);
  }
  ellipse(windowHeight/2, windowHeight/2, 100, 30)
  ellipse(windowHeight/2, windowHeight/2, 30, 100);
}