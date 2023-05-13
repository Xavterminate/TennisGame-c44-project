var racquetImage,player,courtImage,enemyImage,enemy,ball,ballImage,topEdge,bottomEdge,leftEdge,edgeGroup,gamestate, score;
function preload(){
    racquetImage=loadImage("Tennis_racquet_player.png");
    enemyImage=loadImage("Tennis_racquet-enemy.png");
    courtImage=loadImage("Court.png");
    ballImage=loadImage("ball.png")
    score=0;

}
function setup(){
    createCanvas(800,500);
   player=createSprite(50,250,25,25);
   player.addImage("racquet",racquetImage);
   enemy=createSprite(750,250,50,50);
   enemy.addImage("racquet",enemyImage);
   ball=createSprite(400,250,50,50);
   ball.addImage("ball",ballImage);
   ball.scale=0.035;
   player.scale=0.25;
   enemy.scale=0.25;
    topEdge=createSprite(400,1,800,10);
    topEdge=createSprite(400,499,800,10);
    leftEdge=createSprite(1,400,10,500);
    edgeGroup=[topEdge,bottomEdge,leftEdge];
    gamestate=0
}
function draw(){
    background(courtImage);
    drawSprites();
   enemy.position.y=ball.position.y
  
   if(keyDown("SPACE")&&gamestate===0) {
    if(keyDown("SPACE")){
    ball.velocity.x=Math.round(random(-7,7));
    gamestate=1;
   }
  text("Press space to begin, press e to hit when the ball reaches you",400,250);
  }
   if(gamestate===1){
   
   
  
  if(ball.position.x>770){
   
    ball.velocity.x=Math.round(random(-30,-10));
  }
  if(keyDown("E")&&ball.position.x>30&&ball.position.x<50){
    ball.velocity.x=Math.round(random(10,30));
    score++
  }
  if(ball.position.x<0){
    gamestate=2;
  }
} 
if(gamestate===2){
  text("Game over. Your score was:"+score,400,250);
  text("press 'r' to restart",400,300);
  if(keyDown("R")){
    ball.position.x=400;
    gamestate=0;
  }
}
}



