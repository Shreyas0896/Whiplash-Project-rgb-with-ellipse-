
var r = 0;
var g = 50;
var b=255;


function setup(){

  createCanvas(1200,400);
  fill("white");
}


function draw(){

  
 r =  map(mouseX, 0, 255, 10, 40);
 g =  map(mouseX, 255, 700, 60, 245);
 b =  map(mouseX, 700, 1200, 35, 1190);

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
background(r,g,b);

fill("white");

ellipse(mouseX,mouseY,100,50);


  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}