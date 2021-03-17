var astronaut;
var info, settings, stats, updates, shop;
var local, online, tutorial, singlePlayer;
function preload(){
  infoImage = loadImage('buttons/info.png')
  settingsImage = loadImage('buttons/settings.png')
  statsImage = loadImage('buttons/stats.png')
  updatesImage = loadImage('buttons/updates.png')
  shopImage = loadImage('buttons/shop.png')
  //astronautLoad = loadAnimation('playermain/spawn0001','playermain/spawn0003','playermain/spawn0006','playermain/spawn0022','playermain/spawn0033','playermain/spawn0037','playermain/spawn0039','playermain/spawn0041','playermain/spawn0043','playermain/spawn0046','playermain/spawn0048','playermain/spawn0049','playermain/spawn0051','playermain/spawn0052')
  //astronautWalk = loadAnimation('playermain/walkcolor0001','playermain/walkcolor0002','playermain/walkcolor0003','playermain/walkcolor0004','playermain/walkcolor0005','playermain/walkcolor0006','playermain/walkcolor0007','playermain/walkcolor0008','playermain/walkcolor0009','playermain/walkcolor0010','playermain/walkcolor0011','playermain/walkcolor0012',)
}

function setup(){
  createCanvas(displayWidth,displayHeight)
info = createSprite(displayWidth/1.7,960,20,20);
info.addImage(infoImage);
settings = createSprite(displayWidth-80,90,20,20);
settings.addImage(settingsImage);
stats = createSprite(displayWidth/1.3,960,20,20);
stats.addImage(statsImage);
updates = createSprite(displayWidth/4,960,20,20);
updates.addImage(updatesImage);
shop = createSprite(displayWidth/2.5,960,20,20);
shop.addImage(shopImage)

local = createButton('Local')
local.position(686,displayHeight/2-100)
}
function draw(){
  background('black')
  //astronautSpawn();
  drawSprites();
}