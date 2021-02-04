
var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 100, 50, 50);
 fixedRect.shapeColor = "green";
 fixedRect.setVelocity (0,5)
 movingRect = createSprite(400, 300, 80, 50);
 movingRect.shapeColor = "green";
 movingRect.setVelocity (0,-5)
}

function draw() {

  console.log(fixedRect.width/2+movingRect.width/2);
 console.log("difference"+ (movingRect.x-fixedRect.x));

 //bounce off

 if(movingRect.x-fixedRect.x <
  fixedRect.width/2+movingRect.width/2
  &&
  fixedRect.x-movingRect.x <
  movingRect.width/2+fixedRect.width/2)
  {
    fixedRect.velocityX = fixedRect.velocityX * - 1;
    movingRect.velocityX = movingRect.velocityX * -1;
  }


  if(movingRect.y-fixedRect.y <
    fixedRect.height/2+movingRect.height/2
    &&
    fixedRect.y-movingRect.y <
    movingRect.height/2+fixedRect.height/2)
    {
      fixedRect.velocityY = fixedRect.velocityY * -1;
      movingRect.velocityY = movingRect.velocityY * -1;
    }




//collision
 /*if(movingRect.x-fixedRect.x <
  fixedRect.width/2+movingRect.width/2
  &&
  fixedRect.x-movingRect.x <
  movingRect.width/2+fixedRect.width/2
  &&
  movingRect.y-fixedRect.y <
  fixedRect.height/2+movingRect.height/2
  &&
  fixedRect.y-movingRect.y <
  movingRect.height/2+fixedRect.height/2)
 {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }

 else
 {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

  movingRect.x= mouseX;
  movingRect.y = mouseY;*/


  background(255,255,255);  
  drawSprites();
} 