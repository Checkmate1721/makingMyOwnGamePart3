var scene,scene_img;
var coinGroup, coin_img;
var player, player_img;
var tool, tool_img;
var score = 0;
var enemy, enemy_img;

function preload(){
    scene_img = loadImage("background.jpg");
    coin_img = loadImage("coin.png");
    player_img = loadImage("player.png");
    tool_img = loadImage("shovel.png");
    enemy_img = loadImage("enemy.png");
}


function setup(){

    createCanvas = (2000,1000);
    scene = createSprite(300,500,2000,1200);
     scene.addImage(scene_img);
    scene.scale = 2;
    scene.velocityY = 1;

    player = createSprite(300,100,50,50);
    player.addImage(player_img);
    player.scale = 0.25;


    tool = createSprite(260, 150, 50, 50);
    tool.addImage(tool_img);
    tool.scale = 0.5;

   /* enemy = createSprite(200, 200, 50, 50);
    enemy.addImage(enemy_img);
    enemy.scale = 0.35;*/


    coinGroup = createGroup();
    enemyGroup = createGroup();

score = 0;
stroke("red");
fill("red");
textSize(20);
}



function draw(){
    background(0);
    if(scene.y >250 ){
       scene.y = scene.height/2;
      }

      if(keyDown("DOWN_ARROW")){
        player.y = player.y + 4;
        tool.y = tool.y + 4;
      }
      
      if(keyDown("UP_ARROW")){
        player.y = player.y - 4;
        tool.y = tool.y - 4;
      }
      
      if(keyDown("RIGHT_ARROW")){
        player.x = player.x + 4;
        tool.x = tool.x + 4;
      }
      
      if(keyDown("LEFT_ARROW")){
        player.x = player.x - 4;
        tool.x = tool.x - 4;
      }

      if(tool.isTouching(coinGroup)){
        score = score+10;
        coinGroup.destroyEach();
      }

      if(tool.isTouching(enemyGroup)){
        score = score-50;
        enemyGroup.destroyEach();
      }


    spawnTreasure();
    spawnEnemy();
    drawSprites();
    text("Score: " + score, 300, 50);
    
}

function spawnTreasure(){
    if(World.frameCount % 120 === 0){
      var treasure = createSprite(0, 350, 10, 10);
      treasure.addImage(coin_img);
      treasure.scale = 0.05;
      treasure.velocityX = (2 + score/100);
      //treasure.velocityY = randomNumber(-1,-5);
      //treasure.y = randomNumber(150, 350);
      treasure.y = Math.round(random(150,45));
      coinGroup.add(treasure);
    }
  }

  function spawnEnemy(){
    if(World.frameCount % 200 === 0){
      var enemy = createSprite(0, 350, 10, 10);
      enemy.addImage(enemy_img);
      enemy.scale = 0.15;
      enemy.velocityX = (2 + score/100);
      //treasure.velocityY = randomNumber(-1,-5);
      //treasure.y = randomNumber(150, 350);
      enemy.y = Math.round(random(150,45));
      enemyGroup.add(enemy);
    }
  }
  