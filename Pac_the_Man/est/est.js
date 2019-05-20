function preload() {
  maze = loadImage("maze.png");
  pacman = loadImage("pacman.png");
}

function setup() {
  createCanvas(480, 360);
  Pac = new thing(1,1,pacman);
  //map = []
  Game = new maze(map);
}

function draw() {
  //image(pacman, PacX, PacY);
  //ellipse(mouseX, mouseY, 80, 80);
  SPEED = 1
  //image(maze, 0, 0);
  Pac.play();
  if(dir == 'DOWN'){
    Pac.moveDOWN(SPEED);
  }
  if(dir == 'UP'){
    Pac.moveUP(SPEED);
  }
  if(dir == 'LEFT'){
    Pac.moveLEFT(SPEED);
  }
  if(dir == 'RIGHT'){
    Pac.moveRIGHT(SPEED);
  }
}

let dir = '';
function keyPressed(){
    if(keyCode == LEFT_ARROW) {
      dir = 'LEFT';
    }
    if(keyCode == RIGHT_ARROW) {
      dir = 'RIGHT';
    }
    if(keyCode == UP_ARROW) {
      dir = 'UP';
    }
    if(keyCode == DOWN_ARROW) {
      dir = 'DOWN';
    }
}


class thing{
  constructor(start_x, start_y, img) {
    this.x = start_x;
    this.y = start_y;
    this.img = img;
  }
  moveUP(_x) {
    if((this.x <= width && this.y <= height && this.x >=0 && this.y >= 0)) {
      this.y += _x*-1;
    }
  }
  moveDOWN(_x) {
    if((this.x <= width && this.y <= height && this.x >=0 && this.y >= 0)) {
      this.y += _x;
    }
  }
  moveRIGHT(_x) {
    if((this.x <= width && this.y <= height && this.x >=0 && this.y >= 0)) {
      this.x += _x;
    }
  }
  moveLEFT(_x) {
    if((this.x <= width && this.y <= height && this.x >=0 && this.y >= 0)) {
      this.x += -1 *_x;
    }
  }
  
  play() {
    image(this.img, this.x, this.y);
  }
}

class maze {
  constructor(maze) {
    this.maze = maze;
    w = width;
    h = height;
  }
  draw() {
    for(var i=0; i<=this.maze.length(); i++) {
      for(var x=0; x<=this.maze[i].length(); x++) {
        print(x);
      }
    }
  }
}
