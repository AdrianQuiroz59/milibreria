var fixedrect,movingrect;
var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "green";
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green";
  object1=createSprite(160,100,50,50);
  object1.shapeColor = "green";
  object2=createSprite(260,100,50,50);
  object2.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  object1.x = mouseX;
  object1.y = mouseY;
bounceOff(object1,object2)
  if(isTouching())

  drawSprites();
}