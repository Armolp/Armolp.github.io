window.onload = () => {

	var particle = function(){
		this.x = Math.random()*w;
		this.y = Math.random()*3*h-h;
		this.d = Math.random()*(size-2)*2 + 2;
		//function to draw the particle
		this.draw = function() {
			ctx.fillStyle = "rgba(255,255,255,0.3)";
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.d, 0, 2*Math.PI);
			ctx.fill();
		}
		//function to update particle
		this.update = function() {
			if(this.d < size) {
				this.x += (1/3)*(this.d-size)*(this.d-size);
			}else{
				this.x -= (1/3)*(this.d-size)*(this.d-size);
			}
			if(this.x < -50 || this.x > w+50) {
				this.d = size*2 - this.d;
			}
		}
	}

	function setup() {

		w = cnv.width = cnv.offsetWidth;
		h = cnv.height = w * 0.6;

		particles = [];

		for(var i=0; i < particleCount; i++) {
			particles.push(new particle());
		}
	}

	function draw() {

		if(w != cnv.offsetWidth) {
			setup();
		}

		ctx.fillStyle = "#334";
		ctx.fillRect(-w,-h,3*w,3*h);
		ctx.translate(w/2,h/2);
		ctx.rotate(0.004);
		ctx.translate(-w/2,-h/2);
		for(var i=0; i<particles.length; i++) {
			particles[i].draw();
			particles[i].update();
		}
		
		window.requestAnimationFrame(draw);
	}


	var particleCount = 1000;
	var size = 5;

	var cnv = document.getElementById("stars");
	console.log(cnv);
	var ctx = cnv.getContext("2d");
	cnv.style.width = "100%";
	var w = cnv.width = cnv.offsetWidth;
	var h = cnv.height = w * 0.6;

	var particles;

	ctx.fillStyle = "rgba(255,255,255,0.3)";
	
	setup();
	draw();
};