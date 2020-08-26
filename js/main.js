let angle = 0;
let translateY = 0, rotY = 0;
let grow = true;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(40);
}
  
function draw() {
  	background(255);
	ambientLight(200, 155, 155);
	
	pointLight(255,0, 0, 100, 100, 100);
	pointLight(0, 255, 255, 100, -100, 100);

	smooth();

	// translateY =  (translateY + 0.5) % 100;
	if (grow) {
		if (translateY < 200) {
			translateY += 0.5;
		} else {
			grow = false;
		}
	} else {
		if (translateY > 0) {
			translateY -= 0.5;
		} else {
			grow = true;
		}
	}

	// rotate entire scene
	push();
		rotateY(rotY);
		for(let i = 0; i < 10; i++) {
			push();
				rotateX(angle += 0.7);
				translate(1, translateY);
				box(300, 15, 3, 12, 12);
			pop();
		}
	pop();
}

// responsive
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// save result
function keyPressed() {
	// non-ascii
	switch(keyCode) {
		case LEFT_ARROW:
			rotY += 0.5;
			break;
		case RIGHT_ARROW:
			rotY -= 0.5;
			break;
		// ascii
		default: 
			switch(key) {
				case('s'):
				save('photo.png');
				break;
			}
			break;
	}
  }