let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let anchoTexto = 640*0.8;
let tamTexto = 480*0.04;
let espTexto = 20;
let empTexto = 360;


function preload(){
  img1 = loadImage("data/img.png");
  img2 = loadImage("data/img2.png");
  img3 = loadImage("data/naufrago.png");
}

function setup() {
createCanvas (640, 480);
textSize (tamTexto);
}


function draw() {
background (255,0,0);
image(img1,0,0,640,480);
fill (255, 80);
noStroke();
rect (0,350,640,480);
fill (0);
text ("los piratas de one piece estan navegando tranquilamente cuando comienza a caer ceniza volcanica",espTexto,empTexto,anchoTexto);

/*
image(img2,0,0,640,480);
fill (255, 80);
rect (0,350,640,480);
fill (0);
text ("junto a esto las brujulas del Sunny comenzaron a enloquecer...",espTexto,empTexto);\*/
}
