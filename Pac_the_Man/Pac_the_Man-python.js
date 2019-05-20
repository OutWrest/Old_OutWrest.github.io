function preload() {
  pacman = loadImage("pacman.png");
}

function setup() {
  createCanvas(800, 800);
  Pac = new thing(1,1,pacman);
  map = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
         [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
          ];
  Game = new maze(map,width,height);
}

function draw() {
  SPEED = 1;
  //image(maze, 0, 0);
  Game.draw_maze();
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
    img.resize((width/10)-5,(height/10)-5);
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
      //this.x += -1 *_x;
      rotate(HALF_PI);
    }
  }
  
  play() {
    image(this.img, this.x, this.y);
  }
  play_draw_instead() {
    image(this.img, this.x, this.y);
  }
}

class maze {
  constructor(maze,wd,hi) {
    this.maze = maze;
    this.w = wd;
    this.h = hi-1;
  }
  
  
  draw_maze() {
    rectMode(CORNER);
    noStroke();
    for(var i=0; i<this.maze.length; i++) {
      for(var x=0; x<this.maze[i].length; x++) {
        if(this.maze[i][x] == 1) {
          fill(0,255,0);
          //stroke();
        }
        else {
          noFill();
        }
        rect((this.w/this.maze[i].length)*x,(this.h/this.maze[i].length-2)*i,(this.w/this.maze[i].length),(this.h/this.maze[i].length));
      }
    }
  }
}
