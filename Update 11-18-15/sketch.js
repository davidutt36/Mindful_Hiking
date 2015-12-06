/* The P5Js file and animations */

//base states
var natureState = true;
// trigger states to actitvate animations and reset
var neutralStep = true;
var softStep,hardStep =false;
// data Levels
var touch1;
var touch2;
//background image
var enviroment;
// animal sprites
var bigCat,smallBird,hornySheep;
var trash

//detect changes in p with a prev. variable 
//or later in the trigger function make it a switch looking for other statments

//goal: have a base state of for loops of animals in space
//on state break remove most of the animals
// on hard press trigger sound, and remove 2/1 bird form for loop, generate trash in space, decrease scale
//on soft presss, trigger sound, add animal to for loop and to scene, increase scale incimente

function setup() {
  //background image
  createCanvas(2880,1920);
  enviroment = loadImage("assets/enviroment.png");
  background(enviroment);

  smallBird = new Group();
  //___ = ____ (positionx, positiony, width,height)
  // bigCat = createSprite(400, 200, 50, 50);
  //   bigCat.addAnimation("base","_","_");
  //   bigCat.addAnimation("running","_","_","_","_","_");
  //   bigCat.addAnimation("curious","_","_","_");

  // smallBird = createSprite(400, 200, 50, 50);
  //   smallBird.addAnimation("flying","_","_","_","_","_");
  //   smallBird.addAnimation("curious","_","_","_");


  // hornySheep = createSprite(400, 200, 50, 50);
  //   hornySheep.addAnimation("base","_","_");
  //   hornySheep.addAnimation("running","_","_","_","_","_");
  //   hornySheep.addAnimation("curious","_","_","_");

  // trash = createSprite();
  //   trash.addAnimation("plop","_","_","_")
  }

function draw() { 
  //triggers();
 // if (natureState = true){
 //    natState();
 // }

 if (touch1 > 80) {
    console.log("hard Touch");
  }
 
 if (touch2 > 80) {
    console.log("hard Touch");
  }

}

function mousePressed() {

  if (mouseX > 0 && mouseX < 2880 && mouseY > 0 && mouseY < 1920) {
    var fs = fullScreen();
    fullScreen(!fs);
  }
}

function triggers (){
    //play sprite animation cycle
   
    // if( p == "11 touched"){ //never being activeted
    //   fill(r,200,6);
    //   ellipse(250, 150, 50, 50);
    //   //goatAlarm();
    //   console.log("Ive been tagged");
    // }
}

function natState(){
  // for(var i = 0; i<10; i++) {
  //   var newsmallBird = createSprite(random(0,width), random(0,height));
  //   newsmallBird.addAnimation("flying", "assets/smallbirld_pulsing0001.png", "assets/cloud_pulsing0007.png");
  //   //another way to add a sprite to a group
  //   newsmallBird.addToGroup(smallBird);
  // }
}

//increase number of for loop and  increase scale
function softStep(){
  
}

function hardStep(){


}


/* - References - 
- http://p5js.org/reference/
- https://learn.adafruit.com/adafruit-mpr121-12-key-capacitive-touch-sensor-breakout-tutorial/wiring
- https://github.com/foxa706/pumpkin
- Buttons folder in cyber duck
- https://github.com/okuna291/DT-Fall-2015/tree/master/node-parse
*/

//var url='http//47.18.216.182';



