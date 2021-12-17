var issimg,spaceimg,spacecraftimg,spacecraft2img,spacecraft3img,spacecraft4img,spacecraft5img,spacecraft6img;
var iss,spacecraft;
var hasDocked = false;
function preload(){
  issimg = loadImage("iss.png");
  spaceimg = loadImage("space.jpg");
  spacecraftimg = loadImage("spacecraft1.png");
  spacecraft2img = loadImage("spacecraft2.png");
  spacecraft3img = loadImage("spacecraft3.png");
  spacecraft4img = loadImage("spacecraft4.png");



}


function setup() {


  createCanvas(800,400);
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.15;

  
  createCanvas(800,400);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(  spacecraftimg);
  spacecraft.scale = 0.15;




}

function draw() {
  background(spaceimg); 

if(!hasDocked){
  spacecraft.x = spacecraft.x+random(-1,1);


  
}

if(keyDown("UP_ARROW")){
spacecraft.y = spacecraft.y - 2;
}
if(keyDown("LEFT_ARROW")){

  spacecraft.addImage(spacecraft3img);
}
if(keyDown("RIGHT_ARROW")){

  spacecraft.addImage(spacecraft4img);
}
if(keyDown("DOWN_ARROW")){

  spacecraft.addImage(spacecraft2img);
}
295,198

// if(spacecraft.position.y = 295,spacecraft.position.x = 198){
//   push();
//   textSize(50);
//   fill("red");
//   text("DOCKING SUCCESFULL!",400,100);
//   pop();
// }

console.log(spacecraft.position.y);
console.log(spacecraft.position.x);




  drawSprites();





}