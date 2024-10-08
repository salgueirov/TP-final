let images = [];
let texts = [];
let imgIndex = 0;
let anchoTexto = 640*0.8;
let tamTexto = 480*0.04;
let espTexto = 20;
let empTexto = 360;
let posXTexto1;

function preload() {
  images[0] = loadImage("data/img.png");
  images[1] = loadImage("data/img2.png");
}

function setup() {
  createCanvas(640, 480);
  posXTexto1 = -200; // Inicia fuera de la pantalla, hacia la izquierda
  texts[0] = "Los piratas de One Piece están navegando tranquilamente cuando comienza a caer ceniza volcánica.";
  texts[1] = "Junto a esto, las brújulas del Sunny comenzaron a enloquecer...";
}

function draw() {
  background(255, 0, 0);
  image(images[imgIndex], 0, 0, 640, 480);

  // Fondo para el texto
  fill(255, 80);
  noStroke();
  rect(0, 350, 640, 480);

  // Texto animado
  fill(0);
  textSize(tamTexto);
  text(texts[imgIndex], posXTexto1, empTexto, anchoTexto);

  // Mover el texto desde la izquierda hasta donde quieras
  if (posXTexto1 < espTexto) {
    posXTexto1 += 2; // Ajusta la velocidad de animación
  }
}

function mousePressed() {
  imgIndex = (imgIndex + 1) % images.length;
  posXTexto1 = -200; // Reinicia la posición del texto cuando cambias la imagen
}
