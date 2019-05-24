class ghost {
  constructor(hi,wd,maze,type_ghost) {
    this.map = maze;
    this.type = type_ghost;
    for(var i=0; i<this.map.length; i++) {
        for(var x=0; x<this.map[i].length; x++) {
          if(this.map[i][x]==this.type) {
            this.xc = x;
            this.yc = i;
          }
        }
    }
    this.h = hi;
    this.w = wd;
    this.x = this.xc * this.h/20;
    this.y = this.yc * this.w/20;
    this.dir = 5;
    this.speed = 2;
    this.blocked = false;
    
  }
  
  draw_ght() {
    if(this.type == 'i') {
      fill(0,204,204);
      ellipseMode(CENTER);
      ellipse(this.x+this.w/40, this.y+this.h/40, this.w/20, this.h/20);
      rectMode(CENTER);
      rect(this.x+this.w/40,this.y+this.h/20 -this.h/80, this.w/20, this.h/40);
    }
    if(this.type == 'p') {
      fill(204,0,102);
      ellipseMode(CENTER);
      ellipse(this.x+this.w/40, this.y+this.h/40, this.w/20, this.h/20);
      rectMode(CENTER);
      rect(this.x+this.w/40,this.y+this.h/20 -this.h/80, this.w/20, this.h/40);
    }
    if(this.type == 'b') {
      fill(255,0,0);
      ellipseMode(CENTER);
      ellipse(this.x+this.w/40, this.y+this.h/40, this.w/20, this.h/20);
      rectMode(CENTER);
      rect(this.x+this.w/40,this.y+this.h/20 -this.h/80, this.w/20, this.h/40);
    }
    if(this.type == 'c') {
      fill(255,198,0);
      ellipseMode(CENTER);
      ellipse(this.x+this.w/40, this.y+this.h/40, this.w/20, this.h/20);
      rectMode(CENTER);
      rect(this.x+this.w/40,this.y+this.h/20 -this.h/80, this.w/20, this.h/40);
    }
    fill(255);
    triangle(this.x,this.y+this.h/20,this.x+this.w/80, this.y+this.h/20-this.h/80, this.x+this.w/40, this.y+this.h/20);
    triangle(this.x+this.w/40, this.y+this.h/20, this.x+this.w/40+this.w/80, this.y+this.h/20-this.h/80, this.x+this.w/20, this.y+this.h/20);
    circle(this.x+this.w/80,this.y+this.h/20-this.h/30,this.h/160);
    circle(this.x+this.w/40+this.w/80,this.y+this.h/20-this.h/30,this.h/160);
    fill(0);
    circle(this.x+this.w/80,this.y+this.h/20-this.h/30,this.h/320);
    circle(this.x+this.w/40+this.w/80,this.y+this.h/20-this.h/30,this.h/320);
  }
  
  move() {//0 right 1 left 2 up 3 down
    if((((this.y+(this.h/40)) % (this.h/20)) == 20) && ((((this.x+(this.w/40)) % (this.w/20)) == 20))) {
      var pos = updatePos(this.x,this.y,this.h,this.w);
      if(this.xc != pos[0] || this.yc != pos[1]) {
        for(var i=0; i<this.map.length; i++) {
          for(var x=0; x<this.map[i].length; x++) {
            if(this.map[i][x]==this.type) {
              this.map[i][x] = 0;
            }
          }
        }
        this.xc = pos[0];
        this.yc = pos[1];
        for(var i=0; i<this.map.length; i++) {
          for(var x=0; x<this.map[i].length; x++) {
            if(i == this.yc && x == this.xc) {
              this.map[i][x] = this.type;
            }
          }
        }
      }
      //randMove(this,this.xc,this.yc);
      g_play(this,this.xc,this.yc, this.x,this.y);
      //play(this,this.xc,this.yc, this.type);
      if(!blockInFront(this.map,this.dir,this.xc, this.yc)) {
        this.blocked = true; 
      }
      else {
        this.blocked = false;
      }
    }
    if(this.dir == 2 && !this.blocked) {
      this.y = this.y-this.speed;
    }
    if(this.dir == 3 && !this.blocked) {
      this.y = this.y+this.speed;
    }
    if(this.dir == 1 && !this.blocked) {
      this.x = this.x-this.speed;
    }
    if(this.dir == 0 && !this.blocked) {
      this.x = this.x+this.speed;
    }
  }
  
  get_loca() {
    return [this.xc,this.yc];
  }
  
  play() {
  }
  isBlocked() {
    return this.blocked;
  }
  
  set_dir(dir) {
    this.dir = dir;
  }
  
  get_dir() {
    return this.dir;
  }
  
  set_speed(speed) {
    this.speed = speed;
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
}
