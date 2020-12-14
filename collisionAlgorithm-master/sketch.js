var fixedRect, movingRect;
var a,b,c,d;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  a = createSprite(100,100,80,30);
  a.shapeColor = "green";
  a.debug = true;

  b = createSprite(200,100,80,30);
  b.shapeColor = "green";
  b.debug = true;

  c = createSprite(300,100,80,30);
  c.shapeColor = "green";
  c.debug = true;

  d = createSprite(400,100,80,30);
  d.shapeColor = "green";
  d.debug = true;

  


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,fixedRect))
  {
    fixedRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "green";
  }


  if(isTouching(movingRect, a))
  {
    a.shapeColor = "orange";
  }
  else
  {
    a.shapeColor = "green";
  }
  if(isTouching(movingRect, b))
  {
    b.shapeColor = "yellow";
    textSize(30);
    text("Its touching B",400,400);
  }
  else
  {
    b.shapeColor = "green";
  }
 
  
  drawSprites();
}





























function isTouching(x,y)
{
  if (x.x - y.x < y.width/2 + x.width/2
    && y.x - x.x < y.width/2 + x.width/2
    && x.y - y.y < y.height/2 + x.height/2
    && y.y - x.y < y.height/2 + x.height/2) 
    {
      return true;
    }

  else
  {
    return false;

  }
}




























