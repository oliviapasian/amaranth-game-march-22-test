var mode = 0;
const welcomeScreen = 0;
const gameScreen = 1;
const gameOverScreen = 2;

let score = 0;

// Background Intro stuff
var fade = 0;
var fadeAmount = 1;
let bg;
let bg2;
let bg3;
let bg4;
let bg5;
let bg6;
let bg7;
let bg8;
let bgy = 0;

// Game pieces
let invisible_ground, ground, groundImg;
let monsterGroup,pegasus,pegasus_running,pegasusImage,medusa,medusa_running,medusaImage,cyclops,cyclops_running,cyclopsImage,minotaur,minotaur_running,minotaurImage;
let obstaclesGroup,obstacle1,obstacle2,obstacle3;

// Music
var song;
var button;

function preload(){

    // Sound
    song = loadSound('bgmusic.wav');
    bounce = loadSound('bounce.flac');

    // Load intro images
    bg = loadImage('amaranth game intro.jpg');
    bg2 = loadImage('amaranth game intro2.jpg');
    bg3 = loadImage('amaranth game intro3.jpg');
    bg4 = loadImage('amaranth game intro4.jpg');
    bg5 = loadImage('amaranth game intro5.jpg');
    bg6 = loadImage('amaranth game intro6.jpg');
    bg7 = loadImage('backgroundnew.png');
    bg8 = loadImage('gameover.jpg');


    // Game images/animations
    pegasusImage=loadImage("pegasus1.png");
    medusaImage=loadImage("medusa1.png");
    minotaurImage=loadImage("minotaur1.png");
    cyclopsImage=loadImage("cyclops1.png");
    pegasus_running=loadAnimation("pegasus1.png","pegasus2.png","pegasus2.png","pegasus1.png");
    pegasus_standing=loadAnimation("pegasus1.png");
    medusa_running=loadAnimation("medusa1.png","medusa2.png","medusa2.png","medusa1.png");
    medusa_standing=loadAnimation("medusa1.png");
    minotaur_running=loadAnimation("minotaur1.png","minotaur2.png","minotaur2.png","minotaur1.png");
    minotaur_standing=loadAnimation("minotaur1.png");
    cyclops_running=loadAnimation("cyclops1.png","cyclops2.png","cyclops2.png","cyclops1.png");
    cyclops_standing=loadAnimation("cyclops1.png");
    obstacle1=loadImage("object1.png");
    obstacle2=loadImage("object2.png");
    obstacle3=loadImage("object3.png");
    groundImg = loadImage("ground-image.png");
 
}

function setup(){
    createCanvas(960, 600);
    background(220);
    
    // Music
    button = createButton("Music On");
    button.mousePressed(togglePlaying);
    button.position(20,30);
    button.style("font-family", "lores-12-narrow");
    button.style("font-size", "20px");
    button.style("color", "mediumvioletred");
    button.style("border", "0px");
    button.style("background-color", "aliceblue");

    // Gravity
    world.gravity.y = 28;

    // Ground
    invisible_ground = new Sprite(300,530,1350,10);
    invisible_ground.collider = 'none';
    invisible_ground.visible = false;

    //Pegasus
    pegasus = new Sprite(500, 447, 600, 1350);
    // pegasus.collide(invisible_ground);
    pegasus.addAnimation("pegasus_running", pegasus_running);
    pegasus.addAnimation("pegasus_running", pegasus_running);
    pegasus.addImage("pegasusImage", pegasusImage);
    pegasus.scale = 0.09;
    pegasus.debug = false;
    pegasus.h = 60;

    // Obstacles
    obstaclesGroup = new Group();
    obstaclesGroup.collider = 'static';
    obstaclesGroup.scale = 0.13;

    //Monsters
    monsterGroup = new Group();

    minotaur = new Sprite(250, 461, 720, 1350);
    minotaur.addAnimation("minotaur_running", minotaur_running);
    minotaur.addAnimation("minotaur_standing", minotaur_standing);
    minotaur.addImage("minotaurImage", minotaurImage);
    minotaur.scale = 0.09;
    minotaur.debug = false;
    minotaur.collider = 'static';
    monsterGroup.add(minotaur);

    medusa = new Sprite(170, 452, 720, 1350);
    medusa.addAnimation("medusa_running", medusa_running);
    medusa.addAnimation("medusa_standing", medusa_standing);
    medusa.addImage("medusaImage", medusaImage);
    medusa.scale = 0.09;
    medusa.debug = false;
    medusa.collider = 'static';
    monsterGroup.add(medusa);

    cyclops = new Sprite(100, 465, 720, 1350);
    cyclops.addAnimation("cyclops_running", cyclops_running);
    cyclops.addAnimation("cyclops_standing", cyclops_standing);
    cyclops.addImage("cyclopsImage", cyclopsImage);
    cyclops.scale = 0.09;
    cyclops.debug = false;
    cyclops.collider = 'static';
    monsterGroup.add(cyclops);

}

function draw() {
    if (bgy > height) {
        bgy = 0;
      }
    
    // intro();

    // if (screen == 6) {
    //      gamePlay();
    // }

    // if (screen == 7) {
    //     die();
    // }

    if (mode == welcomeScreen){intro();}
    else if (mode == gameScreen){gamePlay();}
    else if (mode == gameOverScreen){die();}
}

function intro(){
    canStartNewGame = false;
    pegasus.visible=false;
    medusa.visible=false;
    minotaur.visible=false;
    cyclops.visible=false;

    background(bg)
	fill(255)
    bgy++;
    
    // // Intro screen changes (putting images in)
    // if (screen == 0) {
	// 	background(bg)
	// 	fill(255)
    //     bgy++;


	// } else if (screen == 1) {

    //     background(bg2)
	// 	fill(255)
    //     // if (fade<0) fadeAmount=1; 
    //     // fade += fadeAmount;
    //     bgy++;
      
    // } else if (screen == 2) {

    //     background(bg3)
	// 	fill(255)
    //     bgy++;
        
    // } else if (screen == 3) {

    //     background(bg4)
	// 	fill(255)
    //     bgy++;
       
    // } else if (screen == 4) {
 
    //     background(bg5)
	// 	fill(255)
    //     bgy++;
        
    // } else if (screen == 5) {

    //     background(bg6)
	// 	fill(255)
    //     bgy++;
    // } 

}

function mousePressed() {
    // Intro screen changes (on click)
	if (mode == 0) {
		mode = 1;
	}
    // else	if (screen == 1) {
	// 	screen = 2;
	// } 
    // else  if (screen == 2) {
	// 	screen = 3;
	// } else  if (screen == 3) {
	// 	screen = 4;
	// }else  if (screen == 4) {
	// 	screen = 5;
	// } else  if (screen == 5) {
	// 	screen = 6;
	// } 
}

function gamePlay(){
        pegasus.visible=true;
        medusa.visible=true;
        minotaur.visible=true;
        cyclops.visible=true;

        background(bg7);
		fill(255);
        bgy++;
        if (bgy > height) {
          bgy = 0;
        }
        
        if (canStartNewGame) newGame();

        // Prevent pegasus from going above the top of the screen 
        if (pegasus.y < 0) pegasus.y = 0;
        if (pegasus.y > 455) pegasus.y = 455;

        // Jump horse
        if (kb.presses('space')) {
            pegasus.vel.y = -10;
            pegasus.ani = "pegasus_running";
            pegasus.rotationLock = true;
            pegasus.bounciness = 0;
            pegasus.vel.x = 6;

            medusa.ani = ("medusa_running");
            minotaur.ani = ("minotaur_running");
            cyclops.ani = ("cyclops_running");

            bounce.play();
        } 
    	    
            // if the pegasus hits the obstacles, it dies
            if (pegasus.overlaps(obstaclesGroup)) die();

            var rand2 = Math.round(random(75 + 2, 90));

            // Spawn obstacles every 70 frames
            if (frameCount % rand2 == 0) {
    
                let obstacle = new obstaclesGroup.Sprite();
                obstacle.x = width/2 + pegasus.x;
                obstacle.y = 456;

                //Generate random obstacles
                var rand = Math.round(random(1,3));
                switch(rand) {
                case 1: obstacle.addImage(obstacle1);
                        obstacle.y = 456;
                        obstacle.w = 70;
                        obstacle.h = 70;
                        break;
                case 2: obstacle.addImage(obstacle2);
                        obstacle.y = 456;
                        obstacle.w = 40;
                        obstacle.h = 60;
                        break;
                case 3: obstacle.addImage(obstacle3);
                        obstacle.y = 150;
                        obstacle.w = 60;
                        obstacle.h = 40;
                        break;
                default: break;
                }
            }
        
		// get rid of passed obstacles
		for (let obstacle of obstaclesGroup) {
			if (obstacle.x < pegasus.x - width / 2) {
				obstacle.remove();
			}
		} 

        // Debug
        allSprites.debug = kb.pressing('d');

        // Camera
        camera.x = pegasus.x + 10;
        camera.off();
        camera.on();

        // Score
        if (frameCount % 60 == 0) {
            score++;
          }
        fill(1)
        textSize(25);
        textFont("lores-12-narrow");
        text(`Score: ${score}`, pegasus.x-460, 30);

        // medusa.x = pegasus.x-400;
        // minotaur.x = pegasus.x-350;
        // cyclops.x = pegasus.x-300;


}


function die(){
    canStartNewGame = true;
    mode = 2;
	pegasus.vel.x = 0;

    pegasus.visible=false;
    medusa.visible=false;
    minotaur.visible=false;
    cyclops.visible=false;
    obstaclesGroup.visible=false
    // if (camera.x > invisible_ground.x + width / 5) {
    //     invisible_ground.x += width;
    //     }

    background(bg8);
    fill(255);
    bgy++;
    if (bgy > height) {
      bgy = 0;
    }

}


function newGame() {
    obstaclesGroup.removeAll();
	canStartNewGame = false;
	pegasus.x = 400;
	pegasus.y = 447;
    pegasus.vel.y = 0;
	pegasus.vel.x = 6;
	world.gravity.y = 28;
    
}

function togglePlaying() {
    if (!song.isPlaying()) {
      song.play();
      song.setVolume(0.3);
      button.html("Music Off");
    } else {
      song.pause();
      button.html("Music On");
    }
  }

  function keyPressed(){
    //Skip intro
    if (keyCode === SHIFT){
        newGame();
        mode = 1
        canStartNewGame = true;
        obstaclesGroup.visible = true;
        pegasus.visible = true;
        monsterGroup.visible = true;
        score = 0;
    }
}
