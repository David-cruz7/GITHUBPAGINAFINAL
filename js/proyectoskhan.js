var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      background(186, 145, 20); // wooden table
      ellipse(200, 200, 350, 350); // plate
      ellipse(200, 200, 300, 300); 
      fill(255, 170, 0);
      stroke(217, 255, 0);
      triangle(151,167,109,85,83,184);//pizza
      fill(255, 0, 0);
      ellipse(114,122,13,15);
      ellipse(104,157,13,15);
      ellipse(132,160,13,15);
      stroke(255, 221, 0);
      fill(255, 119, 0);
      ellipse(236,147,80,28);//pan hambuersa2
      fill(0, 255, 119);
      ellipse(236,134,69,20);//lechuga;
      fill(255, 0, 0);
      ellipse(236,126,69,27);//carne
      fill(255, 119, 0);
      ellipse(236,116,81,28);//hambuurguesa
      noStroke();
      fill(179, 191, 219);
      rect(127,219,142,76);//plato rectangular
      fill(255, 221, 0);
      ellipse(200,258,123,70);//homelet 
    }
  };
  var canvas = document.getElementById("canvas");
  var processing = new Processing(canvas, sketchProc);

  /* Estrella Fugaz*/ 

  var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
var xPos = 141,xPos2=64,yPos2=41,an2=43,alt2=33;
var yPos = 194;
var an=15,alt=15;
var bx=43,by=300,h=21,al=24;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, an, alt);
    fill(255, 140, 0);
    ellipse(xPos2,yPos2,an2,alt2);//estrella callendo a la tierra
    
    ellipse(bx,by,h,al);//bala de cano
    fill(20, 19, 19);
    rect(25,288,76,21);//canon
    rect(24,310,31,20);
    ellipse(22,299,26,30);
    xPos+=3;
    xPos+=3;
    an+=4;
    
    fill(20, 19, 19);
    rect(33,45,67,189);
    rect(113,98,67,136);
    rect(258,45,67,189);
    rect(327,114,65,120);
    fill(222, 171, 17);
    rect(41,54,20,17);
    rect(72,54,20,17);
    rect(41,87,20,17);
    rect(71,87,20,17);
    rect(42,123,20,17);
    rect(71,122,20,17);
    rect(119,104,20,17);
    rect(152,105,20,17);
    rect(152,134,20,17);
    rect(120,134,20,17);
    rect(264,65,20,17);
    rect(298,65,20,17);
    rect(264,97,20,17);
    rect(299,99,20,17);
    rect(332,121,20,17);
    rect(367,120,20,17);
    rect(333,150,19,17);
    rect(368,151,20,17);
    fill(235, 226, 226);
    ellipse(29,14,10,10);
    ellipse(88,20,10,10);
    ellipse(56,16,10,10);
    ellipse(173,14,10,10);
    ellipse(218,20,10,10);
    ellipse(312,23,10,10);
    ellipse(386,18,89,77);
    xPos2+=8;
   
    
    bx+=10;
  
  
   
};
    }
  };
  var canvas = document.getElementById("canvasEstrella");
  var processing = new Processing(canvas, sketchProc);

   /* *Ataque Animal*********
  *****************/ 

  var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      
      var bodyX = 182;
var bodyY = 166;
var bodyW = 133;
var faceW = bodyW/3;

draw = function() {
    //es un gato aunque no lo parezca
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 117); // body?
    ellipse(bodyX-30, bodyY-84, faceW, 93); // face?
    ellipse(bodyX+34, bodyY-83, faceW, 95);
    fill(237, 232, 232);
    ellipse(bodyX-29, bodyY-8, faceW+-19, 35);
    ellipse(bodyX+22, bodyY-7, faceW+-19, 35);
    fill(0, 21, 255);
    ellipse(bodyX+22, bodyY-1, faceW+-23, 21);
    ellipse(bodyX+-29, bodyY-1, faceW+-24, 21);
    fill(10, 9, 9);
    ellipse(bodyX-1, bodyY+31, faceW+18, 30);
    fill(247, 242, 242);
    bodyW++;
    
    
};

    }
  };
  var canvas = document.getElementById("canvasAtaque");
  var processing = new Processing(canvas, sketchProc);

  /*****************Anuncio tamales */
  var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      fill(255, 0, 0);
textSize(19);
text("!!!EXQUISITOS TAMALES OAXAQUENOS",15,30);
fill(37, 52, 219);
textSize(14);
text("****Comete un tamal y rejuvenece 10 anos menos*****",20,60);
fill(255, 187, 0);
rect(66,118,46,79);
fill(255, 0, 0);
rect(81,118,15,79);
fill(34, 255, 0);
rect(85,118,9,79);
fill(255, 179, 0);
rect(150,119,46,79);
fill(255, 0, 0);
rect(164,118,15,79);
fill(34, 255, 0);
rect(167,118,9,79);


fill(255, 0, 0); 
textSize(15);
text("!!por cada tamal comprado, veneficia mi calificacion ",mouseX,mouseY);

    }
  };
  var canvas = document.getElementById("canvasAnuncio");
  var processing = new Processing(canvas, sketchProc);

  /* Proyecto pecera*/

  var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      background(89, 216, 255);
var bodyColor=fill(232, 237, 240);

var drawFish = function (centerX,centerY,bodyLength,bodyHeight){
   
    noStroke();

// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(77, 65, 77);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

};
fill(255, 81, 0);
drawFish(206,154,56,26);
fill(0, 68, 255);
drawFish(296,236,95,50);
fill(223, 240, 34);
drawFish(116,236,65,25,(221,20,20));    
var algas=function(x,y,an,al){
   rect(x,y,an,al);
        
};
fill(43, 255, 0);
algas(300,275,27,374);  
fill(43, 255, 0);
algas(182,330,27,374);
fill(43, 255, 0);
algas(18,275,27,374);

    }
  };
  var canvas = document.getElementById("canvasPecera");
  var processing = new Processing(canvas, sketchProc);

  /** BOLA 8 MAGICA */

  var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 371, 275, 46, 280);
fill(255, 255, 255);

var answer = floor(random(1, 5));
var answer=3;
if (answer ===0) {
    text("cual es mu edad?", 162, 206);
    text("20 y cumpliras 21 en octubre", 136, 229); 
}
if(answer===2){
    text("Sere un buen programador?", 131, 200);
    fill(255, 238, 0);
    text("vas a ser un crack wey :)", 147, 229); 
}
if(answer===2){
    text("Que fue primero, el huevo \no la gallina?", 120, 200);
    fill(255, 238, 0);
    text("\nEL HUEVO :)", 147, 229); 
}
if(answer===3){
    text("Ella me ama?", 153, 200);
    fill(255, 238, 0);
    text("ELLA NO TE AMA \nNUNCA LO HIZO :( ", 147, 229); 
}
if(answer>3 && answer<5){
    text("saludos profesor", 139, 200);
   
}
else{
    if (answer>3&& answer>5){
        fill(227, 52, 25);
        textSize(20);
        text("Paseme con 10 profesor", 100, 236);
   
    }
}




    }
  };
  var canvas = document.getElementById("canvasBola");
  var processing = new Processing(canvas, sketchProc);

  /** PROYECTO CASA */

  var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      background(28, 36, 36);
ellipse(371,35,101,97);
fill(199, 48, 68);
triangle(200, 28, 350, 150, 50, 150);
fill(255, 255, 255);
rect(60, 150, 280, 213);
for(var j = 148; j < 300; j += 47){// bucle aninado
    for(var i=58;i<320;i+=95){
        image(getImage("cute/StoneBlockTall"),i,j,94,83);
    }
}
fill(120, 80, 19);
rect(188, 301, 37, 55);

for(var j=162; j<300;j+=73){// bucle aninado
    for(var i=82;i<320;i+=190){
        fill(255, 255, 0);
        rect(i,j,40,36);
    }
}
for(var i=0;i<400;i+=100){
image(getImage("cute/TreeUgly"),i,312,105,101);
}


    }
  };
  var canvas = document.getElementById("canvasCasa");
  var processing = new Processing(canvas, sketchProc);

  /** PROYECTO DE HACER LLOVER EL CIELO */

  var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      var posicionx=[100, 150, 200],posiciony=[0, 50, 150];

for(var x = 0; x < 50; x++  ){
    posicionx.push (random(0.680));
    posiciony.push (random(0.479));
    
}

draw = function() {
    background(26, 24, 24);
    
    for(var i =0; i < posicionx.length; i++){
        noStroke();
        fill(110, 109, 96);
        
        var nubex = 100;
        var nubey = 40;
        
        ellipse(nubex+250, nubey, 300, 120);
        ellipse(nubex, nubey, 300, 115);
        ellipse(nubex, nubey, 300, 123);
        
        fill(0, 145, 255);
        ellipse(posicionx[i] - 1, posiciony[i]+94, 9, 20);
        posiciony[i] += 10; 
        
        fill(227, 16, 227);
        ellipse(posicionx[i] - 109, posiciony[i]+111, 10, 20);
        fill(13, 255, 0);
        if(posiciony[i] > 450){
            posiciony[i] = 0;
        }
    }
};
mouseClicked = function(){
   posicionx.push(mouseX); 
   posiciony.push(mouseY);
};

    }
  };
  var canvas = document.getElementById("canvasLLueve");
  var processing = new Processing(canvas, sketchProc);