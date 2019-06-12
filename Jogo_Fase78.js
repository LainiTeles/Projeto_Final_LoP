//Equipe: Laini Teles Silva Melo - Subturma 1D.

//COORDENADAS DO BONUS.
  let yb = 0;
  let xb = 73;
  let imgBonus;
  let imgEstrela = [];
  let frame = 0;
  let paraFrame = 0;

  function preload(){
    for(i=0; i<3; i++){ 
      imgEstrela[i] = loadImage('estrela'+i+'.png'); 
    }
  } 

 function draw(){
    
// BONUS.
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

// COLISÃO ENTRE PERSONAGEM E BONUS.
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
