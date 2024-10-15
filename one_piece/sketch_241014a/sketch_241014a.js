let images = [];
let currentImage = 0; 
let botoncomienzo;  
let boton1;   

let texts = [];
let anchoTexto = 640 * 0.8;
let tamTexto = 480 * 0.04;
let espTexto = 20;
let empTexto = 360;
let posXTexto1;

function preload() {
  images[0] = loadImage("data/img0.png"); 
//  images[1] = loadImage("data/fondo0.png"); /
//  images[2] = loadImage("data/fondo1.jpeg"); 
  
  images[1] = loadImage("data/img1.jpeg"); //escena 1
  images[2] = loadImage("data/brujulas.jpeg"); //escena 2, las brújulas
  images[3] = loadImage("data/naufrago.jpeg"); //escena 3, decisión
  images[4] = loadImage("data/choppymedico.jpeg"); // escena 4 a, lo ayudan
  images[5] = loadImage("data/siguennavegando.jpeg"); //escena 4 b, siguen su camino
  images[6] = loadImage("data/barcoroto.jpeg"); //escena 5, ataque de z y sus aliados, decisión
  images[7] = loadImage("data/puerto.jpeg");
}

function setup() {
  createCanvas(640, 480);
  
  // el primer boton: START
  startButton = createButton('START');
  startButton.position(100, 400);
  startButton.mousePressed(startImage); 
  
 //el otro boton el q dice >
  noStroke();
  boton1 = createButton('>');
  boton1.position(580,450); 
  boton1.mousePressed(nextImage); 
  boton1.hide(); 
  
  posXTexto1 = -200;
  texts[0] = "Los piratas One Piece se encontraban navegando tranquilamente cuando de repente comenzó a caer ceniza volcánica.";
  texts[1] = "Notan que las brújulas comienzan a enloquecer, algo raro iba a pasar";
  texts[2] = "En medio de la marea visualizan un náufrago /n -¿Lo ayudamos? Si/No";
  texts[3] = "Deciden ayudarlo. Logran subir al náufrago al Sunny y se dan cuenta que está herido./n -Yo lo puedo curar, soy médico!! -dice Choppy. El náufrago se despierta. /n -Gracias por salvarme la vida, soy Z, ¿ustedes quiénes son? /n-Hola Z, nosotros somos Luffy y  Choppy, y formamos parte de la tripulación de One Piece. /n - ¡Aja! así que son piratas!"; 
  texts[4] = "-No, yo creo que es muy arriesgado - dice Zoro. /n -Si, mira si es un marine - acompaña Nami. /n -Tienen razón, puede ser una trampa…. - dice Luffy. /n siguen su camino "; // escena 4.1
  texts[5] ="Sin previo aviso Z se lanza a atacarlos, aparecen sus aliados y comienzan a destruir el barco./n ¿pelear o escapar?";
 // texts[6] ="Sin previo aviso Z se lanza a atacarlos, aparecen sus aliados y comienzan a destruir el barco. /n ¿pelear o escapar?";
  texts[6] = "Deciden escapar y se van para un puerto a arreglar el barco destruido./n -Ahora que hacemos? … /n juran venganza o se rinden? ";

}

function draw() {
  background(255);  

 
  image(images[currentImage], 0, 0, width, height);
  
   
  if (currentImage >= 1) {
    
    fill(255, 80);
    noStroke();
    rect(0, 350, 640, 480);
    
    fill(0);
    textSize(tamTexto);
    text(texts[currentImage - 1], posXTexto1, empTexto, anchoTexto);
    
    // Move the text
    if (posXTexto1 < espTexto) {
      posXTexto1 += 2;
  }
  }
}

function startImage() { //imagen con la q empieza
  currentImage = 1;
  startButton.hide(); 
  
  boton1.show(); 
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  
 if (currentImage >= 1) {
    posXTexto1 = -200; // resetea la posicion del texto
  }
}
