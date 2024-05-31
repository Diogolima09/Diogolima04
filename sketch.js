let xBolinha = 100;
let yBolinha = 200;

let diametro = 13;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaqueteOponente = 585;
let yRaqueteOponenete = 150;
let velocidadeYOponente 

let meuspontos = 0;
let pontosDoOponente = 0;

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

let colidiu = false

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}                    

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
 verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  circle (xBolinha,yBolinha,diametro);
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
  if (xBolinha + raio > width || xBolinha - raio < 0){
  velocidadeXBolinha *= -1;
}
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
}
  function mostraRaquete(x,y){   
  rect (x, y, raqueteComprimento, raqueteAltura);
}

  function movimentaMinhaRaqute(){
    if (keyIsDOWN(UP_ARROW)){
      yRaquete -= 10;
}
     if (keyIsDOWN(DOWN_ARROW)){
      yRaquete += 10; 
}   
   function verificaColisaoRaquete(){
   if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
   raquetada.play();
}  
    
   function verificaColisaoRaquete(x, y){
     colidiu = 
     colideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if(colidiu){
