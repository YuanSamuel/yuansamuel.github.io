function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	textSize(50);
	textAlign(CENTER, CENTER);
	textFont('Georgia');
}

function draw() {
	background(220, 0, 220);
	let time = millis();
	rotateZ(time / 1234);
	text("Welcome to my website!!", windowWidth / 2, windowHeight / 2);
	ellipse(mouseX, mouseY, 80, 80);
}
