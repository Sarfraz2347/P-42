function setup() {
  createCanvas(600,350);
  spaceCraft = createSprite(285,240)
  spaceCraft.addImage(spaceCraftImg1)
  iss = createSprite(230,130)
  iss.addImage(issImg)
  spaceCraft.scale = .25
  iss.scale = .45
}
var iss,spaceCraft
var bg,issImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3,spaceCraftImg4
var hasDocked=false

function preload(){
  bg = loadImage('images/spacebg.jpg')
  issImg = loadImage('images/iss.png')
  spaceCraftImg1 = loadImage('images/spacecraft1.png')
  spaceCraftImg2 = loadImage('images/spacecraft2.png')
  spaceCraftImg3 = loadImage('images/spacecraft3.png')
  spaceCraftImg4 = loadImage('images/spacecraft4.png')

}

function draw() {
  background(bg);  
  if (keyDown('up')){
    spaceCraft.y=spaceCraft.y-2;
  }
  if (keyDown('down')){
    spaceCraft.y=spaceCraft.y+2;
  }
  if (keyDown('left')){
    spaceCraft.addImage(spaceCraftImg3)
    spaceCraft.x=spaceCraft.x-2;
  }
  if (keyDown('right')){
    spaceCraft.addImage(spaceCraftImg4)
    spaceCraft.x=spaceCraft.x+2;
  }
  if (spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-3)){
    fill('white')
    text('Docking Successful',200,300)
  }
  drawSprites();
}