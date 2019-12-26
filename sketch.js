var box1;
var box2;
var box3;
var box4;
function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 50, 50);
  box2 = createSprite(200,100,10,10);
  box3 = createSprite(300, 200, 50, 50);
  box4 = createSprite(100,100,10,10);
  box1.shapeColor = "red";
  box2.shapeColor = "blue";
  box3.shapeColor = "green";
  box4.shapeColor = "yellow";
  box1.velocityX = -3;
  box3.velocityX = 7;
}

function draw() {
  background(255,255,255); 
  box2.x = World.mouseX;
  box2.y = World.mouseY;
  if (isTouching(box2, box4)){
    box2.shapeColor = "blue";
    box4.shapeColor = "green"
  }else {
    box2.shapeColor = "red";
    box4.shapeColor = "red";
  }
  bounceOff(box1, box3);
  drawSprites();
}
