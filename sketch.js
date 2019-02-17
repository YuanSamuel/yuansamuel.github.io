function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(220, 0, 220);
	text("Welcome to my website!!", windowWidth / 2, windowHeight / 2);
	ellipse(mouseX, mouseY, 80, 80);
}
