var trex ,trex_running;

//carregar animações
function preload(){
  trex_running=loadAnimation("trex1.png","txex3.png","txer4.png");
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite (50,180,20,50);

  //adicione dimensão ao trex
trex.scale=0.5;
trex.x=50
  //crie um sprite ground (solo)
 ground = createSprite(300,180,600,20)
 
}

function draw(){
  background("220")
ground.velocityX= -4;
console.log("ground.valecityX");
  //pular quando a tecla espaço for pressionada
  if(keyDown("space")) { 
    trex.velocityY = -10; }
  trex.velocityY=trex.velocityY+0,9
   //simula a gravidade para "cair" após clicar a tecla de pular
trex.velocityY=trex.velocityY+0.5
  //impedir que o trex caia (por conta da gravidade)
trex.colide(ground)
}