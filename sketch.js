
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  foodGroup= new Group()
  obstacleGroup = new Group()
 
}



function setup() {
  createCanvas(670, 400)
  score=0
  survivalTime=0

  ground = createSprite(0, 400, 1500,0)
  
  monkey= createSprite(90,370,10,10)
  monkey.addAnimation("monkey", monkey_running)
  monkey.scale=0.1
                      
}


function draw() {
  background("green")
  
if (keyDown("space")&&monkey.y>=350){
  monkey.velocityY=-10
}
  ground.velocityX=-7
  ground.x=ground.width/2
  
  monkey.velocityY=monkey.velocityY+0.3
  monkey.collide(ground)
  
  
  if (World.frameCount%200===0){
    fruits()
  }
  
  if (World.frameCount%300===0){
    stones()
  }
  
  if (monkey.isTouching(foodGroup)){
    foodGroup.destroyEach()
    score=score+1
  }
  
  drawSprites()
  fill("white")
  text("score" + score, 500,50)
  
  fill("black")
  text("survivalTime" + survivalTime, 300,50)
}


function fruits(){
  if (frameCount % 60===0){
  banana= createSprite(670, Math.round(random(1750,320)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  foodGroup.add(banana)}
  
}

function stones(){
  if (frameCount % 60===0){
  obstacles=createSprite(670,380,10,10)
  obstacles.addImage(obstaceImage)
  obstacles.scale=0.2
  obstacles.velocityX=-4
  obstacleGroup.add(obstacles)}
}


