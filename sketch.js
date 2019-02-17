function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(220, 0, 220);
	textSize(50);
	textAlign(CENTER, CENTER)
	text("Welcome to my website!!", windowWidth / 2, windowHeight / 2);
	let time = millis();
	rotateZ(time / 1234);
	ellipse(mouseX, mouseY, 80, 80);
}
