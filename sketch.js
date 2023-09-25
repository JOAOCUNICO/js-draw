# js-draw
function setup() {
  createCanvas(750, 700);
  background("red");       
}

  function draw() {

  stroke("black");
  fill("blue");
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
  rect(mouseX, mouseY, 20, 35);
  } 
}
