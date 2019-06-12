//Equipe: Laini Teles Silva Melo - Subturma 1D

// LEGENDA.
  let vida = 5;
  let pontuacao = 0;
  let nivel = 1;

// LEGENDA.
  textSize(20);
  fill(255);
  text("LIFE: "+vida, 10, 30);
  text("SCORE: "+pontuacao, 190, 30);
  text("LEVEL: "+nivel, 400, 30);

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
  
// COLISÃO ENTRE PERSONAGEM E BONUS.
  if(dist(x, y, xb, yb) < (raioe+raioe)){
    vida = vida + 1;
    yb = 0;
    xb = random(4000);
  }
