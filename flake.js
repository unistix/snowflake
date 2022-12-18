//H-square fractal snow flakes 
//at a 

let c = document.createElement('canvas');

c.setAttribute("id", "Div1");
const ctx = c.getContext('2d');
document.body.appendChild(c);

c.width = window.innerWidth;
c.height = window.innerHeight;

//const maxLevel = 5;
//const branches = 2;

const maxLevel = 5; //Density of branches in center (lower less dense) //CHANGE
const branches = 2;

ctx.translate(c.width /2, c.height /2); //set canvas in screen center, draw each branch separately rotate each time

const angle = Math.PI * 2 * 0.85; //angle which we split 


function drawLine(level){
	if (level > maxLevel) return; //recursive breakout out if level is higher then max level stop calling drawline

	ctx.strokeStyle = '#fff'
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(100,0); //Length of Branches Outer CHANGE [200-100]
	ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
	ctx.stroke();

	//DRAW BRANCHES 
	//number times runs determined by number of draw small off shoots branching out from the mainline
	//stay aligned with first main line and draw two brnaches on either side
	for (let i = 1; i < branches + 1; i++){

		ctx.save(); // save current canvas position
		ctx.translate(150 * i / (branches +1), 0);   //Length of inner + Branches Outer CHANGE [200-100]
		ctx.scale(0.5,0.5); //whenever a branch splits the next branch will be half the length and size of the current branch
		ctx.save();

		
		ctx.rotate(angle);
		drawLine(level+1); //draw line recursively increase level
		ctx.restore(); //set canvas to position before last rotate
		ctx.save()

		ctx.rotate(-angle); //rotate canvas in opposite angle
		drawLine(level+1); //increase level
		ctx.restore(); //set canvas to position before last rotate

		ctx.restore(); //set canvas to position before initial save point
	}


}

//DRAW ONE SIDE OF 5 SIDED SNOW FLAKES
drawLine(0);
ctx.rotate(Math.PI *2 /6);
//DRAW ADDITIONAL SIDES 


drawLine(0);
ctx.rotate(Math.PI *2 /6);
//DRAW ADDITIONAL SIDES 
drawLine(0);
ctx.rotate(Math.PI *2 /6);
//DRAW ADDITIONAL SIDES 
drawLine(0);
ctx.rotate(Math.PI *2 /6);
//DRAW ADDITIONAL SIDES 
drawLine(0);
ctx.rotate(Math.PI *2 /6);
//DRAW ADDITIONAL SIDES 
drawLine(0);
ctx.rotate(Math.PI *2 /6);
//DRAW ADDITIONAL SIDES 


//const s = document.createElement('canvas');

//const stx = s.getContext('2d');

let s = document.createElement('canvas');

s.setAttribute("id", "Div2");
const stx = s.getContext('2d');
document.body.appendChild(s);



let totalSnow = 200;
let listSnow = [];




const Snow = function () {
	this.x = Math.random()*s.width; //
	this.y = Math.random()*s.height;
	this.radius = Math.random()*3 + 1;
	this.speedX = _random(-1, 2);
	this.speedY = _random(2, 6);

	this.draw = function() {
		stx.beginPath();
		stx.arc(this.x, this.y, this.radius, Math.PI*2, false);
		stx.fillStyle = 'white';
		stx.fill();
		stx.closePath();

		// update
		this.x += this.speedX;
		this.y += this.speedY;

		if (this.y > s.height) {
			this.y = -10;
			this.x = Math.random() * s.width * 1.5;
		}
	}
}

const _random = (min, max) => {
	return min + Math.random() * (max - min + 1);
}

const init = () => {
	s.width = window.innerWidth;
	s.height = window.innerHeight;
	document.body.appendChild(s);
	createSnow();
}

const createSnow = () => {
	for(let i = 0; i < totalSnow; i++ ) {
		listSnow.push(new Snow);
	}
}

const loop = () => {
	stx.fillStyle = 'black';
	stx.fillRect(0, 0, s.width, s.height);
	
	listSnow.forEach((snow) => {
		snow.draw();
	});

	requestAnimationFrame(loop);
}

// main logic
(() => {
	init();
	loop();
})();





