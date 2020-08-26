let angle = 0;
let translateY = 0, rotY = 0;
let grow = true;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(40);
}
  
function draw() {
  	background(255);
	// ambientLight(200, 155, 155);
	setLights();
	// stroke("#eeeeee");

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

			push();
				rotateX(angle + 10);
				translate(1, translateY);
				push();
					translate(translateY, translateY * 2, 1);
					// translateY(angle + 20)
					sphere(15, 100, 100);
				pop();
				push();
					translate(-translateY, translateY * 2, 1);
					sphere(15, 100, 100);
				pop();
				box(15, 300, 10, 12, 12);
			pop();

			// push();
			// 	rotateY(angle);
			// 	// translate(1, translateY);
			// 	sphere(15, 100, 100);
			// pop();
		}
	pop();
}

function setLights() {
	// ambientLight(100, 200, 155);
	
	pointLight(255,0, 0, 100, 100, 100);//~
	pointLight(0, 255, 255, 100, -100, 100);//~
	pointLight(0, 0, 255, width, 0, 100);//
	
	// pointLight(0, 255, 255, width, height, 10);//~
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