function preload() {
  //maze = loadImage("maze.png");
  soundFormats('wav', 'mp3');
  
  pacman_beginning = loadSound('data/pacman_beginning.wav');
  pacman_death = loadSound('data/pacman_death.wav');
  pacman_intermission = loadSound('data/pacman_intermission.wav');
}
let PacCords;
let pacDir;
let b_dir;
let timer;
let wait = 30000;
let hit = false;
var pressed = false;
let played = false;
let played2 = false;

function setup() {
  createCanvas(800, 800);
  //1 = wall, 2 = pacMan, 3 = inky, 4 = blinky
   map = [
         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
         [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1],
         [1,0,1,'i',0,0,0,0,0,0,0,0,0,0,0,'b',1,0,1,1],
         [1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1],
         [1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
         [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1],
         [1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1],
         [1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1],
         [1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1],
         [1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1],
         [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
         [1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1],
         [1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1],
         [1,0,1,'p',0,0,0,0,0,0,0,0,0,0,0,'c',1,0,1,1],
         [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1],
         [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
          ];
  Game = new maze(map,width,height);
  Pac = new PacMan(1,1,height,width,map);
  inky = new ghost(height,width,map,'i');
  blinky = new ghost(height,width,map,'b');
  pinky = new ghost(height,width,map,'p');
  clyde = new ghost(height,width,map,'c');
}

function draw() {
  if(pressed && (millis() - timer <= wait) && !hit) {//
    if(millis() - timer >= 20000) {
      playSound2(pacman_intermission);
    }
    Game.draw_maze();
   
    Pac.move();
    Pac.drawPac();
    Pac.play();
    PacCords = Pac.get_pacCords();
    pacDir = Pac.get_dir();
    
    inky.draw_ght();
    inky.play();
    inky.move();
    isItIn(Pac.get_x(),Pac.get_y(),inky.get_x(),inky.get_y());
    
    blinky.draw_ght();
    blinky.play();
    blinky.move();
    b_dir = blinky.get_dir();
    isItIn(Pac.get_x(),Pac.get_y(),blinky.get_x(),blinky.get_y());
    
    pinky.draw_ght();
    pinky.play();
    pinky.move();
    isItIn(Pac.get_x(),Pac.get_y(),pinky.get_x(),pinky.get_y());
    
    clyde.draw_ght();
    clyde.play();
    clyde.move();
    isItIn(Pac.get_x(),Pac.get_y(),clyde.get_x(),clyde.get_y());
    
    fill(255, 0, 0);
    textSize(40);
    text(floor((millis() - timer)/1000), width-50,33);
    
    if(dir=='LEFT') {
      Pac.changeDir(dir);
    }
    else if (dir=='RIGHT') {
      Pac.changeDir(dir);
    }
    else if (dir=='DOWN') {
      Pac.changeDir(dir);
    }
    else if (dir=='UP') {
      Pac.changeDir(dir);
    }
  }
  else {
    if(hit) {
      playSound(pacman_death);
      fill(0);
      rect(0, 0, 500, 500);
      fill(255, 0, 0);
      textSize(99);
      textAlign(CENTER);
      text("you suck and died",height/2,width/2);
      textSize(30);
      text("You got hit man, sucks to suck",width/2,height - height/4);
    }
    else if((millis() - timer >= wait)) {
      playSound(pacman_death);
      
      fill(0);
      rect(0, 0, 500, 500);
      fill(255, 0, 0);
      textSize(99);
      textAlign(CENTER);
      text("you won",height/2,width/2);
      textSize(30);
      text("refresh to die again",width/2,height - height/4);
    }
    else {
      fill(0);
      rect(100, 100, height-100, width-100);
      fill(255, 0, 0);
      textSize(99);
      textAlign(CENTER);
      text("Click to start",height/2,width/2);
      textSize(30);
      text("Survive for 30 seconds\n Ghost get faster as the time progresses",width/2,height - height/4);
      timer = millis();
    }
  }
  
  
  
  
  
}

let dir = '';
function keyPressed() {
    if(keyCode == LEFT_ARROW) {
      dir = 'LEFT';
      Pac.changeDir(dir);
    }
    if(keyCode == RIGHT_ARROW) {
      dir = 'RIGHT';
      Pac.changeDir(dir);
    }
    if(keyCode == UP_ARROW) {
      dir = 'UP';
      Pac.changeDir(dir);
    }
    if(keyCode == DOWN_ARROW) {
      dir = 'DOWN';
      Pac.changeDir(dir);
    }
    if(keyCode == SHIFT) {
      dir = 'SPACE';
      Pac.changeDir(dir);
    }
}

function mousePressed() {
  if(!pressed) {
    pressed = true;
    pacman_beginning.play();
  }
}

function blockInFront(maze,direction,x,y) {//0 right 1 left 2 up 3 down
  for(var i=0; i<maze.length; i++) {
      for(var z=0; z<maze[i].length; z++) {
        if((i == y) && (z == x)) {
          if(direction == 0) {
            if(maze[i][z+1]==1) {
              return false;
            }
          }
          if(direction == 1) {
            if(maze[i][z-1]==1) {
              return false;
            }
          }
          if(direction == 2) {
            if(maze[i-1][z]==1) {
              return false;
            }
          }
          if(direction == 3) {
            if(maze[i+1][z]==1) {
              return false;
            }
          }
        }
        
      }
    }
  return true;
}

function avalDir(map,x,y,dir) {
  var te = [];
  var lis = [];
  for(var i=0; i<map.length; i++) {
    for(var z=0; z<map[i].length; z++) {
      if(i == y && z == x) {
        if(map[i][x+1] != 1) {
          te.push(0);
        }
        if(map[i][x-1] != 1) {
          te.push(1);
        }
        if(map[i-1][x] != 1) {
          te.push(2);
        }
        if(map[i+1][x] != 1) {
          te.push(3);
        }
      }
    }
  }
  for(var k=0; k<te.length; k++) {
    if(!(te[k] == Opp(dir))) {
      lis.push(te[k])
    }
  }
  return lis;
}

function randMove(gh,xc,yc) {//0 right, 1 left, 2 up, 3 down
  
  
  var k = avalDir(map,xc,yc,gh.get_dir());
  var ind = Math.floor(Math.random() * (k.length))
  gh.set_dir(k[ind]);
  //print("set ", gh.type, " to",k[ind]);
  
}

function Opp(dir) {//0 right, 1 left, 2 up, 3 down
  if(dir == 0) {
    return 1;
  }
  if(dir == 1) {
    return 0;
  }
  if(dir == 2) {
    return 3;
  }
  if(dir == 3) {
    return 2;
  }
}

function g_play(gh,xc,yc,x,y) {
  if(gh.get_dir() == 5) {
    var a = Math.floor((Math.random() * 4));
    //print(a, "0 right, 1 left, 2 up, 3 down");
    gh.set_dir(a);
  }
  
  if(gh.type == "b") {
    blinky_move(gh,xc,yc,PacCords[0],PacCords[1]);
  }
  if(gh.type == "p") {
    pinky_move(gh,xc,yc,PacCords[0],PacCords[1]);
  }
  if(gh.type == "i") {
    inky_move(gh,xc,yc,b_dir);
  }
  if(gh.type == "c") {
    clyde_move(gh,xc,yc,PacCords[0],PacCords[1]);
  }
}

function farAway(xc,yc,pxc,pyc) {
  return 800-dist((xc*(width/20)+(width/40)),(yc*(height/20)+(height/40)),(pxc*(width/20)+(width/40)),(pyc*(height/20)+(height/40)));
}

function argMax(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

function closePac(xc,yc,pxc,pyc,dirs) {//0 right, 1 left, 2 up, 3 down
  var lis = [];
  for(var p=0; p<dirs.length; p++) {
    if(dirs[p]==0) {
      lis.push(farAway(xc+1,yc,pxc,pyc));
    }
    if(dirs[p]==1) {
      lis.push(farAway(xc-1,yc,pxc,pyc));
    }
    if(dirs[p]==2) {
      lis.push(farAway(xc,yc-1,pxc,pyc));
    }
    if(dirs[p]==3) {
      lis.push(farAway(xc,yc+1,pxc,pyc));
    }
  }
 return dirs[argMax(lis)];
}

function blinky_move(gh,xc,yc,pxc,pyc) {//blinky move
  gh.set_dir(closePac(xc,yc,pxc,pyc,avalDir(map,xc,yc,gh.get_dir())));
}

function twoFront(ary,dir) {//0 right, 1 left, 2 up, 3 down
  var newDirs = [];
  if(dir == 0) {
    newDirs = [ary[0]+2,ary[1]];
  }
  if(dir == 1) {
    newDirs = [ary[0]-2,ary[1]];
  }
  if(dir == 2) {
    newDirs = [ary[0],ary[1]-2];
  }
  if(dir == 3) {
    newDirs = [ary[0],ary[1]+2];
  }
  if(dir == 5) {
    newDirs = ary;
  }
  return newDirs;
}

function fourFront(ary,dir) {//0 right, 1 left, 2 up, 3 down
  var newDirs = [];
  if(dir == 0) {
    newDirs = [ary[0]+4,ary[1]];
  }
  if(dir == 1) {
    newDirs = [ary[0]-4,ary[1]];
  }
  if(dir == 2) {
    newDirs = [ary[0],ary[1]-4];
  }
  if(dir == 3) {
    newDirs = [ary[0],ary[1]+4];
  }
  if(dir == 5) {
    newDirs = ary;
  }
  return newDirs;
}

function pinky_move(gh,xc,yc,pxc,pyc,pdir) {//pinky move
  var pac4Cords = fourFront(PacCords,pdir);
  gh.set_dir(closePac(xc,yc,pac4Cords[0],pac4Cords[1],avalDir(map,xc,yc,gh.get_dir())));
}

function toLeftof(gh,pxc,pyc) {
  
}




function inky_move(gh,xc,yc,pxc,pyc,bdir) {//inky move
  var Poffset = twoFront(PacCords,pacDir);
  var angle = atan2(blinky.get_y() - Poffset[1]*height/20, blinky.get_x() - Poffset[0]*width/20);
  //print((180 * atan2(inky.get_y() - Pac.get_y(), inky.get_x() - Pac.get_x()))/PI);
  var hy = dist(blinky.get_x(),blinky.get_y(),Pac.get_x(),Pac.get_y());
  
  var hors = round(cos(angle) * hy/40);
  
  var negaHors = true;
  if(hors <= 0) {
    negaHors = false;
  }
  
  var vert = round(sin(angle) * hy/40);
  
  var negaVert = true;
  if(vert <= 0) {
    negaVert = false;
  }
  
  if(!negaHors) {
    hors = hors * -1;
  }
  if(!negaVert) {
    vert = vert * -1;
  }
  
  var distx = (hors)+Pac.get_xc();
  var disty = (vert)+Pac.get_yc();
  
  gh.set_dir(closePac(xc,yc,distx,disty,avalDir(map,xc,yc,gh.get_dir())));
}

function farAwayAway(xc,yc,pxc,pyc) {
  return dist((xc*(width/20)+(width/40)),(yc*(height/20)+(height/40)),(pxc*(width/20)+(width/40)),(pyc*(height/20)+(height/40)));
}

function clyde_move(gh,xc,yc,pxc,pyc) {//clyde move
  if(fourSqrs) {
    gh.set_dir(FarPac(xc,yc,pxc,pyc,avalDir(map,xc,yc,gh.get_dir())));
  }
  else {
    gh.set_dir(closePac(xc,yc,pxc,pyc,avalDir(map,xc,yc,gh.get_dir())));
  }
}

function fourSqrs(xc,yc,pxc,pyc) {
  if(dist((xc*(width/20)+(width/40)),(yc*(height/20)+(height/40)),(pxc*(width/20)+(width/40)),(pyc*(height/20)+(height/40)))<=160) {
    return true;
  }
  return false;
}

function FarPac(xc,yc,pxc,pyc,dirs) {//0 right, 1 left, 2 up, 3 down
  var lis = [];
  for(var p=0; p<dirs.length; p++) {
    if(dirs[p]==0) {
      lis.push(farAwayAway(xc+1,yc,pxc,pyc));
    }
    if(dirs[p]==1) {
      lis.push(farAwayAway(xc-1,yc,pxc,pyc));
    }
    if(dirs[p]==2) {
      lis.push(farAwayAway(xc,yc-1,pxc,pyc));
    }
    if(dirs[p]==3) {
      lis.push(farAwayAway(xc,yc+1,pxc,pyc));
    }
  }
 return dirs[argMax(lis)];
}

function isItIn(px,py,x,y) {
  if(dist((x+(width/40)),(y+(height/40)),(px+(width/40)),(py+(height/40)))<=35) {
    hit = true;
    print("treu man");
  }
  return false;
}

function playSound(sound) {
  if(!played) {
    sound.play();
    played = true;
  }
}

function playSound2(sound) {
  if(!played2) {
    sound.play();
    played2 = true;
  }
}
