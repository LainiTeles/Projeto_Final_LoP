//Equipe: Laini Teles Silva Melo - Subturma 1D.

let tela = 1;

// COORDENADAS DO INIMIGO.
let xi = [];
let yi = [];

//COORDENADAS DO PERSONAGEM.
let x = 250;
let y = 500;

// COODENADAS DO DISPARO.
let xd = 0; 
let yd = 0;
let estadoDisparo = false;

//COORDENADAS DO BONÚS.
let yb = 0;
let xb = 73;
let imgBonus;
let imgEstrela = [];
let frame = 0;
let paraFrame = 0;

// LEGENDA.
let vida = 5;
let pontuacao = 0;
let nivel = 1;

// RAIO DAS ELIPSES.
let raioe = 25;
let raioi = 30;
let raiod = 6;

// IMAGENS.
function preload(){
  imgTela01 = loadImage('tela01.png');
  imgTela03 = loadImage('tela03.png');
  imgTela04 = loadImage('tela04.png');
  imgLinux = loadImage('linux02.png');
  imgWindows = loadImage('windows03.png');
  imgTiro = loadImage('tiro.png');
  //imgBonus = loadImage('estrela02.png');

  for(i=0; i<3; i++){ 
    imgEstrela[i] = loadImage('estrela'+i+'.png'); 
  }
  
} 

function setup() {
  createCanvas(550, 550);
  for(i=0; i<4; i++){
    xi[i] = random(0, 550);
    yi[i] = 0;
  }
}

function draw(){
// INÍCIO.
  
  if (tela == 1){
    background(0);
    image(imgTela01, 10, 10);
    if(keyIsDown(ENTER)){
      tela = 2;
    }
  }

// EXECUÇÃO DO JOGO.
  if(tela == 2){
  background(34, 139, 34);

// LEGENDA.

  textSize(20);
  fill(255);
  text("LIFE: "+vida, 10, 30);
  text("SCORE: "+pontuacao, 190, 30);
  text("LEVEL: "+nivel, 400, 30);

// PERSONAGEM.
  
  if(keyIsDown(LEFT_ARROW))
    x = x - 8;
  if(keyIsDown(RIGHT_ARROW))
    x = x + 8;
  
  fill(0, 0, 255);
  //ellipse(x, y, 2*raioe, 2*raioe);
  imageMode(CENTER);
  image(imgLinux, x, y);
  
// DISPARO.
  
  if(keyIsDown(32) && estadoDisparo == false){
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if(estadoDisparo == true){  
    fill(255)
    //ellipse(xd, yd, 2*raiod, 2*raiod);
    image(imgTiro, xd, yd);
    
    yd = yd - 15;
    if(yd < 0){
      estadoDisparo = false;
    }
  }
  
// BONÚS.
  
  imgBonus = imgEstrela[frame];
    
  fill(255);
  //ellipse(xb, yb, 2*raioe, 2*raioe);
  image(imgBonus, xb, yb);
  yb = yb + 5;
    
    paraFrame++;    
    if(paraFrame > 10){ 
      frame++;
      paraFrame = 0;
    } 
    if(frame > 2){
      frame = 0;
    }
  
  if(yb > 550){
    yb = 0;
    xb = random(4000);
  }
  
// INIMIGO.
  for(i=0; i<4; i++){
    fill(0, 0, 255);
    //ellipse(xi[i], yi[i], 2*raioi, 2*raioi);
    image(imgWindows, xi[i], yi[i]);
    
    yi[i] = yi[i] + 1;
    
    if(yi[i] > 550){
      xi[i] = random(0, 550);
      yi[i] = 0;
    }
  }
  
// COLISÃO ENTRE PERSONAGEM E INIMIGO.
  
  for(i=0; i<4; i++){
    if(dist(x, y, xi[i], yi[i]) < (raioe+raioi)){
      vida = vida - 1;
      xi[i] = random(0, 550);
      yi[i] = 0;
    }
  }
    if(vida == 0){ 
      tela = 3; 
    }

// COLISÃO ENTRE DISPARO E INIMIGO.
  
  for(i=0; i<4; i++){
    if(dist(xd, yd, xi[i], yi[i]) < (raiod+raioi)){
      pontuacao = pontuacao + 1;
      xi[i] = random(0, 550);
      yi[i] = 0;
    }
  }
  
// COLISÃO ENTRE PERSONAGEM E BONÚS.
  
  if(dist(x, y, xb, yb) < (raioe+raioe)){
    vida = vida + 1;
    yb = 0;
    xb = random(4000);
  }
  
// NÍVEIS DO JOGO.
  for(i=0; i<4; i++){
     if(pontuacao >= 20){
       yi[i] = yi[i] + 1;
       nivel = 2
     }
     if(pontuacao >= 40){
       yi[i] = yi[i] + 1;
       nivel = 3
     }
     if(pontuacao >= 60){
       yi[i] = yi[i] + 1;
       nivel = 4
     }
     if(pontuacao >= 80){
       yi[i] = yi[i] + 1;
       nivel = 5
     }
     if(pontuacao == 100){
       tela = 4;
     }
  }
 }
// TELA DE GAME OVER
  if(tela == 3){
    background(0);
    image(imgTela03, 285, 285) 
  }
  
// TELA FINAL.
  
  if(tela == 4){
    background(0);
    image(imgTela04, 285, 285);
  } 
}
