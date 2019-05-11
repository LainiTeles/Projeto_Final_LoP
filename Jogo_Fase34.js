/*

  Equipe:
  Laini Teles Silva Melo - Subturma 1D.
  Etapa 1 e 2.

*/

let y1 = 120; 
let y2 = 250; 
let y3 = 20;
let x = 200; 
let y = 350;
let xd = 0; 
let yd = 0;
let = estadoDisparo = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 178, 238);
  
  if(keyIsDown(LEFT_ARROW))
    x = x - 8;
  if(keyIsDown(RIGHT_ARROW))
    x = x + 8;
  
  fill(255, 130, 171);
  ellipse(x, y, 50, 50);
  
  
  if(keyIsDown(32) && estadoDisparo == false){
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if(estadoDisparo == true){  
    fill(0)
    ellipse(xd, yd, 5, 5);
    yd = yd - 20;
    if(yd < 0){
      estadoDisparo = false;
    }
  }
  
  
  fill(255);
  rect(190, y1, 50, 50, 5);
  rect(20, y2, 50, 50, 5);
  rect(340, y3, 50, 50, 5);
  
  y1 = y1 + 5;
  y2 = y2 + 5;
  y3 = y3 + 5;
  
  if(y1 > 400)
    y1 = 0;
  if(y2 > 400)
    y2 = 0;
  if(y3 > 400)
    y3 = 0;
}
