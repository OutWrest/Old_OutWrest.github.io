function preload() {
  //maze = loadImage("maze.png");
  pacman = loadImage("pacman.png");
}

function setup() {
  createCanvas(800, 800);
  Pac = new PacMan(1,1,pacman,height,width);
  //1 = wall, 2 = pacMan
  map = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
         [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
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
         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
          ];
  Game = new maze(map,width,height);
}

function draw() {
  SPEED = 1;
  //image(maze, 0, 0);
  Game.draw_maze();
  Pac.play();
  Pac.play_a(Game.getPac());
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


class PacMan{
  constructor(start_x, start_y, img,hi,wd) {
    this.x = start_x;
    this.y = start_y;
    this.h = hi;
    this.w = wd;
    this.img = img;
    img.resize((width/20)-1,(height/20)-1);
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
  play_a(cords) {
    ellipseMode(CORNER);
    fill(255,255,0);
    var x = this.h/20;
    var y = this.h/20;
    ellipse(cords[1]*x,cords[0]*y,x,y);
    fill(255,0,0);
    triangle((cords[1]*x)+(x/2), (cords[0]*y)+(y/2), (cords[1]*x)+x, (cords[0]*y)+y, (cords[1]*x)-y,(cords[0]*y)-y);
  }
}

class maze {
  constructor(maze,wd,hi) {
    this.maze = maze;
    this.w = wd;
    this.h = hi;
  }
  
  getPac() {
    for(var i=0; i<this.maze.length; i++) {
      for(var x=0; x<this.maze[i].length; x++) {
        if(this.maze[i][x] == 2) {
          return [i,x];
        }
      }
    }
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
        rect((this.w/this.maze[i].length)*x,(this.h/this.maze[i].length)*i,(this.w/this.maze[i].length),(this.h/this.maze[i].length));
      }
    }
  }
}
