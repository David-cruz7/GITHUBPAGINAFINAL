(function (window, undefined) {
    'use strict';
    var KEY_ENTER = 13,
        KEY_LEFT = 37,
        KEY_UP = 38,
        KEY_RIGHT = 39,
        KEY_DOWN = 40,
        
        canvas = null,
        ctx = null,
        lastPress = null,
        pressing = [],
        pause = false,
        gameover = true,
        onGround = false,
        worldWidth = 0,
        worldHeight = 0,
        cam = null,
        player = null,
        wall = [],
        lava = [],
        map0 = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

    function Camera() {
        this.x = 0;
        this.y = 0;
    }

    Camera.prototype = {
        constructor: Camera,
        
        focus: function (x, y) {
            this.x = x - canvas.width / 2;
            this.y = y - canvas.height / 2;

            if (this.x < 0) {
                this.x = 0;
            } else if (this.x > worldWidth - canvas.width) {
                this.x = worldWidth - canvas.width;
            }
            if (this.y < 0) {
                this.y = 0;
            } else if (this.y > worldHeight - canvas.height) {
                this.y = worldHeight - canvas.height;
            }
        }
    };
    
    function Rectangle2D(x, y, width, height, createFromTopLeft) {
        this.width = (width === undefined) ? 0 : width;
        this.height = (height === undefined) ? this.width : height;
        if (createFromTopLeft) {
            this.left = (x === undefined) ? 0 : x;
            this.top = (y === undefined) ? 0 : y;
        } else {
            this.x = (x === undefined) ? 0 : x;
            this.y = (y === undefined) ? 0 : y;
        }
    }
    
    Rectangle2D.prototype = {
        constructor: Rectangle2D,
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        vx: 0,
        vy: 0,
        
        get x() {
            return this.left + this.width / 2;
        },
        set x(value) {
            this.left = value - this.width / 2;
        },
        
        get y() {
            return this.top + this.height / 2;
        },
        set y(value) {
            this.top = value - this.height / 2;
        },
        
        get right() {
            return this.left + this.width;
        },
        set right(value) {
            this.left = value - this.width;
        },
        
        get bottom() {
            return this.top + this.height;
        },
        set bottom(value) {
            this.top = value - this.height;
        },
        
        intersects: function (rect) {
            if (rect !== undefined) {
                return (this.left < rect.right &&
                    this.right > rect.left &&
                    this.top < rect.bottom &&
                    this.bottom > rect.top);
            }
        },
        
        fill: function (ctx) {
            if (ctx !== undefined) {
                if (cam !== undefined) {
                    ctx.fillRect(this.left - cam.x, this.top - cam.y, this.width, this.height);
                } else {
                    ctx.fillRect(this.left, this.top, this.width, this.height);
                }
            }
        }
    };

    document.addEventListener('keydown', function (evt) {
        if (!pressing[evt.which]) {
            lastPress = evt.keyCode;
        }
        pressing[evt.which] = true;
    }, false);

    document.addEventListener('keyup', function (evt) {
        pressing[evt.which] = false;
    }, false);

    function setMap(map, blockSize) {
        var col = 0,
            row = 0,
            columns = 0,
            rows = 0;
        wall.length = 0;
        lava.length = 0;
        for (row = 0, rows = map.length; row < rows; row += 1) {
            for (col = 0, columns = map[row].length; col < columns; col += 1) {
                if (map[row][col] === 1) {
                    wall.push(new Rectangle2D(col * blockSize, row * blockSize, blockSize, blockSize, true));
                } else if (map[row][col] === 2) {
                    lava.push(new Rectangle2D(col * blockSize, row * blockSize, blockSize, blockSize, true));
                }
            }
        }
        worldWidth = columns * blockSize;
        worldHeight = rows * blockSize;
    }

    function reset() {
        player.left = 40;
        player.top = 40;
        player.vx = 0;
        player.vy = 0;
        gameover = false;
    }

    function paint(ctx) {
        var i = 0,
            l = 0;
        
        // Clean canvas
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw player
        ctx.fillStyle = '#0f0';
        player.fill(ctx, cam);

        // Draw walls
        ctx.fillStyle = '#999';
        for (i = 0, l = wall.length; i < l; i += 1) {
            wall[i].fill(ctx, cam);
        }
        
        // Draw lava
        ctx.fillStyle = '#f00';
        for (i = 0, l = lava.length; i < l; i += 1) {
            lava[i].fill(ctx, cam);
        }

        //  lastpressed
        ctx.fillStyle = '#fff';
        ctx.fillText('Last Press: ' + lastPress, 0, 20);
        
        // Draw pause
        if (pause) {
            ctx.textAlign = 'center';
            if (gameover) {
                ctx.fillText('GAMEOVER', 150, 100);
            } else {
                ctx.fillText('PAUSE', 150, 100);
            }
            ctx.textAlign = 'left';
        }
    }

    function act() {
        var i = 0,
            l = 0;
        
        if (!pause) {
            // GameOver Reinicio
            if (gameover) {
                reset();
            }

            // Set vectors
            if (pressing[KEY_RIGHT]) {
                if (player.vx < 10) {
                    player.vx += 1;
                }
            } else if (player.vx > 0) {
                player.vx -= 1;
            }
            if (pressing[KEY_LEFT]) {
                if (player.vx > -10) {
                    player.vx -= 1;
                }
            } else if (player.vx < 0) {
                player.vx += 1;
            }

            // Estableciendo gravedad
            player.vy += 1;
            if (player.vy > 10) {
                player.vy = 10;
            }

            // Saltos
            if (onGround && lastPress === KEY_UP) {
                player.vy = -10;
            }

            // Moniento en X
            player.x += player.vx;
            for (i = 0, l = wall.length; i < l; i += 1) {
                if (player.intersects(wall[i])) {
                    if (player.vx > 0) {
                        player.right = wall[i].left;
                    } else {
                        player.left = wall[i].right;
                    }
                    player.vx = 0;
                }
            }
            
            // moviento del jugador en y
            onGround = false;
            player.y += player.vy;
            for (i = 0, l = wall.length; i < l; i += 1) {
                if (player.intersects(wall[i])) {
                    if (player.vy > 0) {
                        player.bottom = wall[i].top;
                        onGround = true;
                    } else {
                        player.top = wall[i].bottom;
                    }
                    player.vy = 0;
                }
            }

            // Out Screen
            if (player.x > worldWidth) {
                player.x = 0;
            }
            if (player.x < 0) {
                player.x = worldWidth;
            }

            // Bellow world
            if (player.y > worldHeight) {
                gameover = true;
                pause = true;
            }

            // Player Intersects Lava
            for (i = 0, l = lava.length; i < l; i += 1) {
                if (player.intersects(lava[i])) {
                    gameover = true;
                    pause = true;
                }
            }

            // Focus player
            cam.focus(player.x, player.y);
        }
        
        // Pause/Unpause
        if (lastPress === KEY_ENTER) {
            pause = !pause;
        }
    }

    function repaint() {
        window.requestAnimationFrame(repaint);
        paint(ctx);
    }

    function run() {
        setTimeout(run, 50);
        act();

        lastPress = null;
    }

    function init() {
        // Get canvas and context
        canvas = document.getElementById('canvasJuego');
        ctx = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 200;
        worldWidth = canvas.width;
        worldHeight = canvas.height;

        // Create camera and player
        cam = new Camera();
        player = new Rectangle2D(40, 40, 10, 10, true);
        
        // Set initial map
        setMap(map0, 10);
        
        // Start game
        run();
        repaint();
    }

    window.addEventListener('load', init, false);
}(window));

/// juego memorama 
var ctx, canvas;
		var primerCarta = true;
		var cartaPrimera, cartaSegunda;
		var colorDelante="yellow";
		var colorAtras="blue";
		var colorCanvas="green";
		var inicioX=30;
		var inicioY=30;
		var cartaMargen=30;
		var cartaLon=30;
		var cartaAncho=cartaLon*4;
		var cartaAlto=cartaLon*4;
		var cartas_array=new Array();
		var iguales=false;
		var cartas=0;
		
		var imagenes=new Array(6);
		function cargarImagenes(){

		}
		
		window.onload = cargarImagenes;
	
		function cargarImagenes(){
			imagenes[cartas] = new Image();
			imagenes[cartas].src = "images/"+cartas+".jpg";
			cartas++;
			if(cartas<6){
				imagenes[cartas-1].onload = cargarImagenes;
			}else{
				imagenes[cartas-1].onload = iniciar;
			}
		}
		
		function iniciar(){
			cartas=0;
			canvas=document.getElementById("canvasMemorama");
			canvas.width=630;
			canvas.height=510;
			if(canvas && canvas.getContext){
				ctx = canvas.getContext("2d");
				if(ctx){
					canvas.removeEventListener("click",iniciar,false);
					canvas.addEventListener("click",selecciona,false);
					tablero();
					barajar();
					aciertos();
				}else{
					document.write("Tu navegador no soporta canvas");
				}
			}
		}

		function tablero(){
			var i, j;
			var carta;
			var x=inicioX;
			var y=inicioY;
			for(i=0; i<4; i++){
				for(j=0; j<3; j++){
					carta=new Carta(x,y,cartaAncho,cartaAlto,i);
					cartas_array.push(carta);
					carta.dibuja();
					
					y +=inicioY+cartaAlto;
				}
				y = inicioY;
				x+=cartaAncho+cartaMargen;
			}
		}
		
		function Carta(x,y,ancho,largo,info){
			this.x=x;
			this.y=y;
			this.ancho=ancho;
			this.largo=largo;
			this.info=info;
			this.dibuja=dibujaCarta;
		}
		function dibujaCarta(){
			ctx.fillStyle=colorAtras;
			ctx.fillRect(this.x,this.y,this.ancho,this.largo);
		}

		
		function barajar(){
			var i,j;
			var aTemp1= new Array();
			var aTemp2= new Array();
			var lon=cartas_array.length/2;
			for(i=0; i<lon;i++){
				do{
					j=Math.floor(Math.random()*lon);
				}while(aTemp1.indexOf(j)!=-1)
				aTemp1.push(j);
				do{
					j=Math.floor(Math.random()*lon);
				}while(aTemp2.indexOf(j)!=-1)
				aTemp2.push(j);	
			}
			aTemp1 = aTemp2.concat(aTemp1);
			for(i=0; i<lon*2; i++){
				cartas_array[i].info=aTemp1[i];
			}
		}
		
		function ajusta(xx,yy){
			var posCanvas = canvas.getBoundingClientRect();
			var x = xx-posCanvas.left;
			var y = yy-posCanvas.top;
			return {x:x,y:y}
		}
		function selecciona(e){
			var pos=ajusta(e.clientX,e.clientY);
			//alert(pos.x+','+pos.y);
			
			for(var i=0; i<cartas_array.length; i++){
				var carta = cartas_array[i];
				if(carta.x>0){
					if( (pos.x>carta.x) && (pos.x<carta.x+carta.ancho) && (pos.y>carta.y) && (pos.y<carta.y+carta.largo)){
						if((primerCarta) || (i!=cartaPrimera)) {
							break;
						}
					}
				}
			}
			if(i<cartas_array.length){
				if(primerCarta){
					cartaPrimera=i;
					primerCarta=false;
					pinta(carta);
				}else{
					canvas.removeEventListener("click",selecciona,false);
					cartaSegunda=i;
					pinta(carta);
					primerCarta=true;
					if(cartas_array[cartaPrimera].info==cartas_array[cartaSegunda].info){
						iguales=true;
						cartas++;
						aciertos();
					}else{
						iguales=false;
					}
					setTimeout(volteaCarta,1000);
				}
			}
		}
		function pinta(carta){
			ctx.fillStyle = colorDelante;
			ctx.fillRect(carta.x,carta.y,carta.ancho,carta.largo);
			
			ctx.font="bold 40px comic";
			ctx.fillStyle = "black";
			//ctx.fillText(String(carta.info), carta.x+carta.ancho/2-10, carta.y+carta.largo/2+10);
			ctx.drawImage(imagenes[carta.info],carta.x,carta.y,carta.ancho,carta.largo);
		}
		function volteaCarta(){
			if(!iguales){
				cartas_array[cartaPrimera].dibuja();
				cartas_array[cartaSegunda].dibuja();
			}else{
				ctx.clearRect(	cartas_array[cartaPrimera].x,
								cartas_array[cartaPrimera].y,
								cartas_array[cartaPrimera].ancho,
								cartas_array[cartaPrimera].largo);
				
				ctx.clearRect(	cartas_array[cartaSegunda].x,
								cartas_array[cartaSegunda].y,
								cartas_array[cartaSegunda].ancho,
								cartas_array[cartaSegunda].largo);
				
				cartas_array[cartaPrimera].x = -1;
				cartas_array[cartaSegunda].x = -1;
			}
			if(cartas<6){
				canvas.addEventListener("click",selecciona,false);
			}else{
				cartas=0;
				cartas_array=[];
				canvas.addEventListener("click",iniciar,false);
				ctx.fillStyle="white";
				ctx.fillText("JUEGO TERMINADO",120,canvas.height/2);
			}
		}
		
		function aciertos(){
			ctx.save();
			ctx.clearRect(0,480,canvas.width,canvas.height);
			ctx.fillStyle="gray"
			ctx.fillRect(0,480,canvas.width,canvas.height);
			ctx.font = "bold 40px comic";
			ctx.fillStyle="black";
			ctx.fillText("Aciertos: "+String(cartas),canvas.width-220,510);
			ctx.restore();
		}