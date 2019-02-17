let avenir;
function preload() {
  avenir = loadFont('assets/Avenir.otf');
}
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	textSize(50);
	textAlign(CENTER, CENTER);
	textFont(avenir);
}

function draw() {
	background(220, 0, 220);
	let time = millis();
	rotateZ(time / 1234);
	text("Welcome to my website!!", windowWidth / 2, windowHeight / 2);
	ellipse(mouseX, mouseY, 80, 80);
}
