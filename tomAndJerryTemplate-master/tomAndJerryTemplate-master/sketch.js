
function preload() {
    //load the images here
    img = loadImage('cat1.png');
    img = loadImage('cat2.png');
    img = loadImage('cat3.png');
    img = loadImage('cat4.png');
    img = loadImage('garden.png');
    img = loadImage('mouse1.png');
    img = loadImage('mouse2.png');
    img = loadImage('mouse3.png');
    img = loadImage('mouse4.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var cat = "20,25" ;
    var garden = "10,20" ;
    var mouse= "30,40" ;



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  cat.addAnimation("catRunning",catimg2);
  cat.changeAnimation("catRunning");
}
