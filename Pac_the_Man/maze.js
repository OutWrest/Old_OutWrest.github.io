class maze {
  constructor(maze,wd,hi) {
    this.maze = maze;
    this.w = wd;
    this.h = hi;
  }
  
  setPac(cords) {
    for(var i=0; i<this.maze.length; i++) {
      for(var x=0; x<this.maze[i].length; x++) {
        if(this.maze[i][x] == 2) {
          this.maze[i][x] = 0;
        }
        if(cords[0] == i && cords[1] == x) {
          this.maze[i][x] = 2;
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
          fill(0,0,0);
          //stroke();
        }
        else {
          fill(255,255,255);
        }
        rect((this.w/this.maze[i].length)*x,(this.h/this.maze[i].length)*i,(this.w/this.maze[i].length),(this.h/this.maze[i].length));
      }
    }
  }
}
