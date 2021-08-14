var seaImg;
var ship,ship1;
function preload(){
  seaImg = loadImage("sea.png")
  ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  
}

function setup(){
  createCanvas(600,500);
  
  //creating the sea
  sea = createSprite(10,400,300,10);
  sea.addAnimation("running",sea);
  sea.scale = 0.1;
  sea.velocityX = -1;

//creating the ship
ship = createSprite(50,200,20,50);
ship.addAnimation("running",ship1);
edges = createEdgeSprites();

//adding scale and position to ship
ship.scale = 0.25;
ship.x = 90;
ship.y = 300;
}

function draw() {
  background("blue");
  if(keyDown("space")){
     ship.velocityX = 5;
  }

  if(keyDown("Left")){
    ship.velocity = -5;
  }

  if(keyDown("Space")){
    ship.velocityX = 0;
  }
//reseting background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  //stop ship from falling down
  ship.collide(edges)
 drawSprites()
}