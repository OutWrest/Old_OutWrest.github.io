class PacMan{
  constructor(start_x, start_y,hi,wd,maze) {
    this.xc = start_x;
    this.yc = start_y;
    this.h = hi;
    this.w = wd;
    this.x = this.xc * this.h/20;
    this.y = this.yc * this.w/20;
    this.looking = 5;
    this.speed = 1;
    this.map = maze;
  }
  
  changeDir(dir) {
    if(dir == 'SPACE') {
      this.looking = 5;
    }
    if(dir == 'UP' || dir == 'DOWN') {
      if(((this.x+(this.w/40)) % (this.w/20)) == 20) {
        if(dir == 'UP') {
          this.looking = 2;
        }
        else {
          this.looking = 3;
        }
      }
    }
    else if(dir == "RIGHT" || dir == "LEFT") {
      if(((this.y+(this.h/40)) % (this.h/20)) == 20) {
        if(dir == "RIGHT") {
          this.looking = 0;
        }
        else {
          this.looking = 1;
        }
      }
    }
    else {
      print("nada");
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
    textSize(50);
    var xMd = this.x+(this.w/40);
    var yMd = this.y+(this.w/40);
    text([round((xMd*20)/(this.w-(this.w/40)))-1,round((yMd*20)/(this.h-(this.h/40)))-1],50,50);
    this.xc = round((xMd*20)/(this.w-(this.w/40)))-1;
    this.yc = round((yMd*20)/(this.h-(this.h/40)))-1;

    
    strokeWeight(4);
    stroke(50);
    var p = dist(xMd, yMd, 250, 250);
    text(p,200,200);
    
    
  }
  get_pacCords() {
    
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
