function preload() {
  surferImg = loadImage('/img/KaisAdventure.png'); 
  music = loadSound('/sound/music.mp3');
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('sketch-container');
  music.loop();
}

function draw() {
  background(135, 206, 235);
  image(surferImg, 0, 0, width, height);
}