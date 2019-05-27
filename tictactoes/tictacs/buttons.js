class buttons {
  constructor(size,loca) {
    this.size = size;
    this.loca = loca;
    this.h = height/size[0];
    this.w = width/size[1];
    this.containing = '0';
  }
  
  draw_buttons() {
    if(this.containing == '0') {
      fill(0);
    }
    else {
      fill(100);
    }
    rect(this.w*this.loca[0],this.h*this.loca[1],this.w,this.h);
    fill(255);
    text([this.loca,this.containing],this.w*this.loca[0],(this.h*this.loca[1])+50);
  }
  
  clicked(content) {
    this.containing = content;
  }
  
  get_containing() {
    return this.containing;
  }
}
