var bgImage
var cat , catImage1 , catImage2 , catImage3
var mouse , mouseImage1 , mouseImage2 , mouseImage3


function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");

    catImage1 = loadImage("images/cat1.png");

    mouseImage1 = loadImage("images/mouse1.png")

    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");

    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(500,200,0,0)
    cat.addImage("cat",catImage1)
    cat.scale = 0.15

    mouse = createSprite(200,200,0,0)
    mouse.addImage("mouse",mouseImage1)
    mouse.scale = 0.15

}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catRunning", catImage2);
        cat.x = 300
        cat.scale = 0.2
        cat.changeAnimation("catRunning");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImage2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;}
 
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5
      mouse.addAnimation("mouseTeasing",mouseImage2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }
}




