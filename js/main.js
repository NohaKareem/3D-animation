let angle = 0;
let translateY = 0, rotX = 0, rotY = 0;
let grow = true;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(40);
}
  
function draw() {
	background(6, 8, 40);
  	// background(255);
	//   background(12, 17, 89);
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

	//  specularMaterial(255);
	 
	// rotate entire scene
	push();
		rotateY(190);
		render();
	pop();
}

function setLights() {
	// ambientLight(100, 200, 155);
	
	pointLight(223, 40, 164, 100, 100, 0);
	pointLight(223, 40, 164, 0, 0, 1000);
	pointLight(223, 40, 164, width/2, height/2, -1000);
	pointLight(223, 191, 40, 100, -100, 100);
}

function render() {
	push();
		rotateX(rotX);
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
					// rotateY(angle)
					translate(-translateY, translateY * 2, 1);
					sphere(15, 100, 100);
				pop();
				// push();
				// 	rotateX(30);
				// 	translate(1, translateY * 3, 1);
				// 	sphere(15, 100, 100);
				// pop();
				push();
					rotateX(30);
					scale(2);	
					translate(1, translateY * 2, 1);
					sphere(15, 100, 100);
				pop();
				box(15, 300, 10, 12, 12);
			pop();
		}
	pop();
}

// responsive
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// function mousePressed() {
// 	push();
// 		translate(width / 4, height / 3);
// 		scale(0.1);
// 		rotateY(190);
// 		render();
// 	pop();
// }

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
				save('photo.png');
				break;
			}
			break;
	}
  }