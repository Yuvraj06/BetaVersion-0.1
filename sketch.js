var player;

var role = "1";

var ground;

var bush, bush2, stone, monster, invObs, invObs2;

var bg;

var obs;

var gamestate = 0;

var level = 1 ;

var ran = 1;

var Stone, Bush, Monster, Inv;

var speed = -30;

var score=0;

var HiScore;

var help, highScore, home, play, reset, Score, scorebg, title;

function setup() {
	createCanvas(2048, 1546);

	player=createSprite(200,200);
	player.debug = false ;
	player.setCollider("rectangle",-110,0,200,430);
	player.depth = 10;

	player.addAnimation("run1",player1Run);
	player.addAnimation("run2",player2Run);
	player.addAnimation("run3",player3Run);
	player.scale = 0.5

	player.addAnimation("ani1",player1Idle );
	player.addAnimation("ani2",player2Idle );
	player.addAnimation("ani3",player3Idle );

	player.visible = false;

	invObs2 = createSprite(0,0,1,1);
	invObs2.visible = false;	

	ground = createSprite(810,1310,1620,10)
	ground.visible = false;

	bg = createSprite(0,773);
	bg.addImage("without_parralax",bgI);
	bg.depth = 0;

	obs = createGroup();
	Stone = createGroup();
	Bush = createGroup();
	Monster = createGroup();
	Inv = createGroup();

	HiScore = getItem("HiScore")

	Score = createSprite(1700,100);
	Score.scale = 3;
	Score.addImage("score",scoreI);
	Score.visible = false;

	highScore = createSprite(1600,1450);
	highScore.scale = 3;
	highScore.addImage("hscore",highScoreI);
	highScore.visible = false;

	title = createSprite(1028,500);
	title.scale = 3;
	title.addImage("title",titleI);
	title.visible = false;
	
	play = createSprite(1028,900);
	play.scale = 3;
	play.addImage("playa",playI);
	play.visible = false;
	
	help = createSprite(1028,1100);
	help.scale = 3;
	help.addImage("helpa", helpI);
	help.visible = false;
  
}


function draw() {
  
invObs2.x = player.x;
invObs2.y = player.y;


if(level === 1)  {

if(gamestate===0){

	if(mousePressedOver(play)){
		gamestate = 1
		sound.loop();
		sound.setVolume(0.3)
	}

	Score.visible = false;
	highScore.visible = false;
	player.visible = false;
	title.visible = true;
	play.visible = true;
	help.visible = true;

}

 	 if (gamestate===1){ 

	Score.visible = true;
	highScore.visible = true;	
	player.visible = true;
	title.visible = false;
	play.visible = false;
	help.visible = false;


	bg.velocityX = speed;

 	 if(bg.x <= 0){
	 	 bg.x=2048;
 	 }

	  movementIRG();

 	 obstacles();
 
 	 GameStoppingLv1();

	  if(HiScore !== null){
		 if(score>=HiScore){
			 HiScore = score
			 storeItem("HiScore",HiScore);
		 } 
	  }else{
		  HiScore = 0;
	  }

	  if(invObs2.isTouching(Inv)){
		  score+=1;
	  }

	  
	 

	}



 if(gamestate===2){
	  sound.stop();
	  Score.visible = false;
	  highScore.visible = false;
	  player.visible = false;
	  title.visible = false;
	  play.visible = false;
	  help.visible = false;

	  
  }

}  


 
  
  drawSprites();

  if(gamestate === 1){

  	  textFont("New Times Roman"); fill(rgb(255,206,59)); textSize(70);text(HiScore,1700,1470)

	  textFont("New Times Roman"); fill(rgb(255,206,59)); textSize(70);text(score,1750,120);
  }

  if(gamestate===0){

  
 }

 textFont("New Times Roman"); fill(0); textSize(50);text("Beta Version: 0.1",100,120);
}




