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

  /*proyecto librero*/

  var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(400,400);
      //PROGRAMA QUE MUESTRA LOS LIBROS QUE CONTIENE UNA LIBRERIA

// EN ESTE ARREGLO DE OBJETOS SE AGREGAR LOS LIBROS DE MI LIBRERIA
var book = [
    {
        title: "The Giver",
        autor: "Juan Escutia",
        stars: 4,
        recomiendas: false,
    },
    {
        title : "Marianela",
        autor : "Benito Perez Galdos",
        stars: 5,
        recomiendas: true,
        
    },
    {
        title: "1OO años de sol.",
        autor: "Gabriel Garcia Marquez",
        stars: 5,
        recomiendas: true,
    },
    {
        title: "Arte de la guerra.",
        autor: "Tun Zun",
        stars: 5,
        recomiendas: true,
    }
];
for(var x= 0; x < 400; x+=121){
    fill(242, 155, 24);
    rect(0,x,399,18);
}

/* Ete ciclo for nos ayuda para recorrer los nombres del los autores, 
    estrellas y titulo de mi objeto de arreglos book*/
for(var i = 0; i < book.length; i++){
    fill(240, 22, 22);
    rect(-1 + i*138, 20, 113, 100);
    fill(0, 0, 0);
    text(book[i].title, 15+i*132, 23, 70, 98);
    text(book[i].autor, 15+i*136, 48, 70, 100);
    /* aqui valida si las personas recomeindan leer este libro,
        si es asi deplegara el mensaje recomendado
        si no mostrara no recomendado*/
    if(book[i].recomiendas === true){
         text("recomendado",i*138,99);
        }
        else{
            text("no reconmedado",i*203,99);
        }
    //muestra las imagenes de estrellas  que contiene cada libro
    for (var j = 0; j < book[i].stars; j++) {
    image(getImage("cute/Star"), 23 + j * 18 + i*127, 93, 20, 30);
    }
    
  }
    }
  };
  var canvas = document.getElementById("canvasLibrero");
  var processing = new Processing(canvas, sketchProc);

