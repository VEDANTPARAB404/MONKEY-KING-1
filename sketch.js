
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var invisible
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
 createCanvas(600,400);

 monkey = createSprite(30,360,10,10);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
 
 obstacle = createSprite(400,400,10,10);
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.2 ;
 obstacle.velocityX = -5;
  
 invisible = createSprite(400,400,800,15);
 invisible.visible = true; 
  
 banana = createSprite(400,300,10,10);
 banana.addImage(bananaImage);
 banana.scale = 0.1;
 banana.velocityX = -3; 
}


function draw() {
background(255);

//COLLIDE MONKEY WITH GROUND
monkey.collide(invisible);
  
//TO JUMP THE MONKEY  
if(keyDown("space")&& monkey.y > 361.5){
  monkey.velocityY = -13;
}
   
//gravity for monkey
monkey.velocityY = monkey.velocityY + 0.8
  
//INFINITE OBS
 if(obstacle.x < -30){
   obstacle.x = Math.round(random(300,600));
 } 
  
//INFINITE BANANA
  if(banana.x < -30){
   banana.x = Math.round(random(300,600));
 } 
  
 stroke("white");
 textSize(20);
 fill("black");
 text("SCORE : " + score ,450,50);
  
 stroke("white");
 textSize(20);
 fill("black");
 survivalTime = Math.ceil(frameCount/frameRate());
 text("Survival Time : " + survivalTime,50,50);
 
drawSprites();
}






