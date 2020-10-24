var racecar, racecarImage
var weight, speed, deformation
var wall, density, width, deformationThreshold

function preload(){
  racecarImage = loadAnimation("race-car-top-down-clipart-2.png")
}

function setup() {
  createCanvas(1900,200);

  racecar = createSprite(80, 100);
  racecar.addAnimation("looks", racecarImage);
  racecar.scale = 0.1;

  weight = prompt("Input car weight");
  speed = prompt("Input car speed");
  density = prompt("Input wall density");
  width = prompt("Input wall width");

  wall = createSprite(1900 - (width*10)/2, 100, width*10, 200)
  wall.shapeColor = "white";

  deformation = (0.5*weight*speed*speed)/22500;
  deformationTreshold = 22500/(0.5*density*width*width);
  
  alert("Test Will Start");

  racecar.velocityX = speed/5;
}

function draw() {
  background("black");

  if(racecar.isTouching(wall)){
    racecar.velocityX = 0;
    if(deformation > deformationTreshold){
      wall.shapeColor = "red";
    }
    if(deformation < deformationTreshold && deformation > (deformationTreshold/2)){
      wall.shapeColor = "yellow";
    }
    if(deformation < (deformationTreshold/2)){
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}
