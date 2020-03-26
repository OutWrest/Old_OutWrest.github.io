function updatePos(x,y,h,w) {
  xMid = x / (w/20);
  yMid = y / (h/20);
  
  return [xMid,yMid];
}

class PacMan{
  constructor(start_x, start_y,hi,wd,maze) {
    this.xc = start_x;
    this.yc = start_y;
    this.h = hi;
    this.w = wd;
    this.x = this.xc * this.h/20;
    this.y = this.yc * this.w/20;
    this.looking = 5;
    this.speed = 2;
    this.map = maze;
  }
  
  changeDir(dir) {
    if((((this.y+(this.h/40)) % (this.h/20)) == 20) && ((((this.x+(this.w/40)) % (this.w/20)) == 20))) {
      var pos = updatePos(this.x,this.y,this.h,this.w);
      this.xc = pos[0];
      this.yc = pos[1];
      //print(updatePos(this.x,this.y,this.h,this.w));
    }
    if(dir == 'SPACE') {
      this.looking = 5;
    }
    if(dir == 'UP' || dir == 'DOWN') {
      if(((this.x+(this.w/40)) % (this.w/20)) == 20) {
        if(dir == 'UP') {
          if(blockInFront(this.map,2,this.xc,this.yc)) {
            this.looking = 2;
          }
        }
        else {
          if(blockInFront(this.map,3,this.xc,this.yc)) {
            this.looking = 3;
          }
        }
      }
    }
    else if(dir == "RIGHT" || dir == "LEFT") {
      if(((this.y+(this.h/40)) % (this.h/20)) == 20) {
        if(dir == "RIGHT") {
          if(blockInFront(this.map,0,this.xc,this.yc)) {
            this.looking = 0;
          }
        }
        else {
          if(blockInFront(this.map,1,this.xc,this.yc)) {
            this.looking = 1;
          }
        }
      }
    }
  }
  
  move() {
    if(this.looking == 0 && blockInFront(this.map,this.looking,this.xc,this.yc)) {// right
      if((this.x <= width && this.y <= height && this.x >=0 && this.y >= 0)) {
        this.x += this.speed;
        this.looking = 0;
      }
    }
    if(this.looking == 1 && blockInFront(this.map,this.looking,this.xc,this.yc)) {// left
      if((this.x <= width && this.y <= height && this.x >=0 && this.y >= 0)) {
        this.x += -1 *this.speed;
        this.looking = 1;
      }
    }
    if(this.looking == 2 && blockInFront(this.map,this.looking,this.xc,this.yc)) { // up
      if((this.x <= width && this.y <= height && this.x >=0 && this.y >= 0)) {
        this.y += this.speed*-1;
        this.looking = 2;
      }
    }
    if(this.looking == 3 && blockInFront(this.map,this.looking,this.xc,this.yc)) {// down
      if((this.x <= width && this.y <= height && this.x >=0 && this.y >= 0)) {
        this.y += this.speed;
        this.looking = 3;
      }
    }
  }
  
  play() {
    fill(255, 0, 0);
    textSize(40);
    text([this.xc,this.yc],100,33);

  }
  
  get_pacCords() {
    return [this.xc,this.yc];
  }
  
  get_dir() {
    return this.looking;
  }
  
  get_x() {
    return this.x;
  }
  
  get_y() {
    return this.y;
  }
  
  get_xc() {
    return this.xc;
  }
  
  get_yc() {
    return this.yc;
  }
  
  set_speed(speed) {
    this.speed = speed;
  }
  
  drawPac() {
    noStroke();
    ellipseMode(CORNER);
    fill(255,255,0);
    ellipse(this.x,this.y,this.h/20,this.w/20);
    fill(255,255,255);
    var ww = this.w/20;
    var hh = this.h/20;
    if(this.looking == 0) { // right
      triangle(this.x+(ww/2), this.y+(hh/2), this.x+(ww), this.y+(hh), this.x+(ww),this.y);
    }
    else if (this.looking == 1) { // left
      triangle(this.x+(ww/2), this.y+(hh/2), this.x, this.y, this.x,this.y+(hh));
    }
    else if (this.looking == 2) { // up
      triangle(this.x+(ww/2), this.y+(hh/2), this.x, this.y, this.x+(hh),this.y);
    }
    else if (this.looking == 3) { //down
      triangle(this.x+(ww/2), this.y+(hh/2), this.x, this.y+(hh), this.x+(ww),this.y+(hh));
    }
  }
}
