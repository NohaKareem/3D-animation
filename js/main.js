let angle = 0;
let translateY = 0, rotX = 0, rotY = 0;
let grow = true;
let hasBackground = true;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(40);
}
  
function draw() {
	if(hasBackground) background(6, 8, 40);
	setLights();
	smooth();

	updateAnimation();

	// rotate, and scale, entire scene
	push();
		rotateY(190);
		scale(0.5);
		render();
	pop();
}

// set scence lights
function setLights() {
	pointLight(223, 40, 164, 100, 100, 0);
	pointLight(223, 40, 164, 0, 0, 1000);
	pointLight(223, 40, 164, width/2, height/2, -1000);
	pointLight(223, 191, 40, 100, -100, 100);
}

// conditionally update animation parameters 
function updateAnimation() {
	if (grow) {
		if (translateY < 200) translateY += 0.5;
		else grow = false;
	} else {
		if (translateY > 0) translateY -= 0.5;
		else grow = true;
	}
}

// render art scene
function render() {
	push();
		rotateX(rotX);
		rotateY(rotY);
		
		for(let i = 0; i < 10; i++) {
			push();
				rotateX(angle += 0.7);
				translate(1, translateY);
				box(230, 15, 3, 12, 12);
			pop();

			push();
				rotateX(angle + 10);
				translate(1, translateY);

				renderSphere(1, 0, translateY, translateY * 2);
				renderSphere(1, 0, -translateY, translateY * 2);
				renderSphere(2, 30, 1, translateY * 2);

				box(15, 300, 10, 12, 12);
			pop();
		}
	pop();
}

// render a sphere with custom transformations
function renderSphere(scaleFactor, rotateAngle, translateX, translateY) {
	push();
		scale(scaleFactor);	
		rotateX(rotateAngle);
		translate(translateX, translateY, 1);
		sphere(15, 100, 100);
	pop();
}

// responsive
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// interactive menu
function keyPressed() {
	// non-ascii
	switch(keyCode) {
		case LEFT_ARROW:
			rotY += 0.5;
			break;
		case RIGHT_ARROW:
			rotY -= 0.5;
			break;
		case UP_ARROW:
			rotX += 0.5;
			break;
		case DOWN_ARROW:
			rotX -= 0.5;
			break;

		// ascii
		default: 
			switch(key) {
				case('s'):
					save('animation.png');
				break;

				case('b'):
					hasBackground = ! hasBackground;
				break;
			}
			break;
	}
  }