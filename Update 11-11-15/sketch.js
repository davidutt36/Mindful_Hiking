/* - The P5Js file and animations 
   - Where to install and play animation triggers 
*/

//detect changes in p with a prev. variable 
//or later in the trigger function make it a switch looking for other statments

var p;

function setup() {
  createCanvas(2880,1920);
  background(255,0,100);
}

function draw() { 
  //load in background image from styleboard ect.

  triggers(); //check for state changes


}

function mousePressed() {

  if (mouseX > 0 && mouseX < 2880 && mouseY > 0 && mouseY < 1920) {
    var fs = fullScreen();
    fullScreen(!fs);
  }
}

function triggers (){
    //play sprite animation cycle
    
  //light Touched
    if( p > 50 && p < 100){ 
      fill(255,200,6);
      ellipse(250, 150, 50, 50);
      //goatAlarm();
      console.log("Light Touch");
    }

  //Hard Touched
    if(p > 100){
      fill(0,200,6);
      ellipse(100, 300, 50, 50); 
    }
}



//function alertgoat(){}


/* - References - 
- http://p5js.org/reference/
- https://learn.adafruit.com/adafruit-mpr121-12-key-capacitive-touch-sensor-breakout-tutorial/wiring
- https://github.com/foxa706/pumpkin
- Buttons folder in cyber duck
- https://github.com/okuna291/DT-Fall-2015/tree/master/node-parse
*/

//var url='http//47.18.216.182';



