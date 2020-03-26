let rows = 3;
let col = 3;
let board = [];
let temp = [];
let ExsDee=false;
let boardPieces;

function setup() {
  createCanvas(500,500);
  
  for(var i =0; i<rows; i++) {
    for(var k =0; k<col; k++) {
       temp.push(new buttons([rows,col], [i,k]));
    }
    board.push(temp);
    temp = [];
  }
  
  print(board);
}


function draw() {
  text("hi",50,50);
  for(var i =0; i<rows; i++) {
    for(var k =0; k<col; k++) {
       board[i][k].draw_buttons();
    }
  }
}

function mousePressed() {
  clickedWhere(mouseX,mouseY);
  checkWin(get_boardPieces());
}

function clickedWhere(x,y) {
  var tempx;
  var tempy;
  
  for(var i =0; i<rows; i++) {
    tempx = i * height/rows;
    for(var k =0; k<col; k++) {
      tempy = k * height/col;
       if(x<=tempx+height/rows && y<=tempy+height/rows && x>=tempx && y>=tempy && board[i][k].get_containing() == '0' ) {
         board[i][k].clicked(decodoe(ExsDee));
         changeEx();
       }
    }
  } 
}

function decodoe(x) {
  if(x) {
    return 'x';
  }
  else {
    return 'o';
  }
}

function changeEx() {
  if(ExsDee) {
    ExsDee = false;
  }
  else {
    ExsDee = true;
  }
}

function get_boardPieces() {
  var tempAr = [];
  var output = [];
   for(var i =0; i<rows; i++) {
    for(var k =0; k<col; k++) {
       tempAr.push(board[i][k].get_containing());
    }
    output.push(tempAr);
    tempAr=[];
  }
  return output;
}

function checkWin(boardpie) {
  //check hors and verticla
  var tempxBool = true;
  var tempyBool = true;
  
  for(var i =0; i<rows; i++) {
    tempxBool = true;
    tempyBool = true;
    for(var k =0; k<col; k++) {
       tempxBool = boardpie[i][k] == 'o' && tempxBool;
       tempyBool = boardpie[i][k] == 'x' && tempyBool;
    }
    if(tempxBool) {
      print("o",i);
      return ['o',i];
    }
    if(tempyBool) {
      print("x",i);
      return ['x',i];
    }
  }
  for(var k =0; k<rows; k++) {
    tempxBool = true;
    tempyBool = true
    for(var i =0; i<col; i++) {
       tempxBool = boardpie[i][k] == 'o' && tempxBool;
       tempyBool = boardpie[i][k] == 'x' && tempyBool;
    }
    if(tempxBool) {
      print("o",k,"ha");
      return ['o',k];
    }
    if(tempyBool) {
      print("x",k,"ha");
      return ['x',k];
    }
  }
  
}
