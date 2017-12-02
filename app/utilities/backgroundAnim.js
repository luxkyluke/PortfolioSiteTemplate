const DISTANCE = 200;
const OVERFLOW = 20;
const MAX_ALPHA = 0.5;

var mousePointer = new MousePointeur(new Point(0, 0));
const CONST_NB_POINTS = 0.08
var width, height;
var points =[];	
var links = [];


function Point (x, y) {
	const PAS = 1;
	this.x = x;
	this.y = y;

	this.init = function(){
		do{
			this.dx = getRandomArbitrary(-PAS, PAS)
		}while(Math.abs(this.dx)-0<Math.EPSILON);
		do{
			this.dy = getRandomArbitrary(-PAS, PAS);
		}while(Math.abs(this.dy)-0<Math.EPSILON);
	}

	this.init();

	this.draw = function(c, radius=1){
		c.fillStyle = "rgba(255, 255, 255,"+ MAX_ALPHA +")";;
		c.beginPath();
		c.arc(this.x, this.y, radius, 0, Math.PI*2, false);
		c.fill();
	}

	this.update = function(){
		if((this.x+this.dx) > width+OVERFLOW || (this.x+this.dx) < -OVERFLOW 
				|| (this.y+this.dy) > height+OVERFLOW || (this.y+this.dy) < -OVERFLOW){
			this.init();
			return;
		}
		this.x += this.dx;
		this.y += this.dy;
	}

	this.linkAllOtherPoint = function(){
		for(let i=0; i<points.length ; i++){
			links.push(new Link(this, points[i]));
		}
		links.push(new Link(this, mousePointer));
	}
}

function Link(p1, p2){
	this.p1 = p1;
	this.p2 = p2;
	this.x = p1.x-p2.x;
	this.y = p1.y-p2.y;

	this.norm = function(){
		this.x = this.p1.x-this.p2.x;
		this.y = this.p1.y-this.p2.y;
		
		var sqrtNorm = this.x * this.x + this.y * this.y;
		return Math.sqrt(sqrtNorm);
	}

	this.draw = function(c){
		var alpha = 1- this.norm()/DISTANCE;

		if(alpha<0 || alpha > 1)
			return;
		if(alpha > MAX_ALPHA)
			alpha = MAX_ALPHA;
		c.fillStyle = "white";
		c.beginPath();
		c.moveTo(this.p1.x, this.p1.y);
		c.lineTo(this.p2.x, this.p2.y);
		c.strokeStyle = "rgba(255, 255, 255,"+ alpha +")";
		c.stroke();
	}
}

function MousePointeur(p) {
	this.point = p;
	this.x =p.x;
	this.y =p.y;

	this.draw = function(c){
		this.point.draw(c, 0.1);
	}

	this.update = function(x, y){
		this.point.x = x;
		this.point.y = y;
		this.x =x;
		this.y =y;
	}

	this.click = function(){
		const p = new Point(this.x, this.y);
		p.linkAllOtherPoint();
		points.push(p);
	}
}

function resizeCanvas(){
	let canvas = document.getElementById("scene");
	width 	= canvas.width 	= window.innerWidth;
	height 	= canvas.height = window.innerHeight;
}

window.onresize = function(e){
	resizeCanvas();
}

function createPoints(){
	let nbPoints = Math.floor(width *CONST_NB_POINTS);
	let posX = width/2; 
	let posY = height/2;


	for(let i=0; i<nbPoints; i++){
		const x = getRandomArbitrary(0, width);
		const y = getRandomArbitrary(0, height);
		points.push(new Point(x, y));
	}
	let cpt=0;
	for(let i=0; i<nbPoints; i++){
		points[i].linkAllOtherPoint();
		/*for(let j=0; j<nbPoints ; j++){
			links[cpt++] = new Link(points[i], points[j]);
		}
		links[cpt++] = new Link(points[i], mousePointer);*/
	}
}

function initCanvas(c){
	resizeCanvas();
	c.fillStyle = "#000819";
	c.fillRect(0, 0, width, height);
}

function animCanvas(c){
	setInterval(function(){
		c.fillStyle = "#000819";
		c.fillRect(0, 0, width, height);

		for(let i=0; i<points.length; i++){
			//console.log("point pos "+ points[i].dx + " " + points[i].dy);
			points[i].update(); 
			points[i].draw(c);
		}
		for(let i=1; i<links.length; i++){
			links[i].draw(c);
		}
		//console.log("mousePointer pos "+ mousePointer.point.x + " " +mousePointer.point.y);
		mousePointer.draw(c);

	}, 30);

	document.addEventListener("mousemove", function(event){
		mousePointer.update(event.clientX, event.clientY);
	});

	document.addEventListener("click", function(e){
		mousePointer.click()
	});
}


window.onload = function () {
	let canvas = document.getElementById("scene");
	let c = canvas.getContext("2d");
	//document.body.appendChild(canvas);

	initCanvas(c);
	createPoints();
	animCanvas(c);
}


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}