function preload() {
  surferImg = loadImage('../img/KaiAdventure.png'); 
  //startMusic = loadSound('../sound/music.mp3');
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('sketch-container');
  //startMusic.loop();
}

function draw() {
  background(135, 206, 235);
  image(surferImg, 0, 0, width, height);
}