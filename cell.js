class Cell {
  constructor(pos = createVector(random(0.25*width,0.75*width),random(0.25*height,0.75*height)), r=random(25,50),velocity=createVector(0,0)) {
    this.r = r;
    this.pos = pos;
    this.clr = color(random(100,255),0,random(100,255),150);
    this.velocity = velocity;
  }
  
  mouseIsOnObject() {
    if (dist(mouseX,mouseY,this.pos.x,this.pos.y) <= this.r) {
      return true;
    }
    return false;
  }
  
  show() {
    fill(this.clr);
    circle(this.pos.x,this.pos.y,2*this.r); 
  }
  
  move() {
    this.pos.add(p5.Vector.random2D());
    this.pos.add(this.velocity);
    if (this.velocity.mag() > 1) {
      this.velocity.mult(0.8);
    } else {
      this.velocity.set(0,0);
    }
  }
  
  split() {
    this.r = this.r*0.8;
    this.velocity = p5.Vector.random2D().mult(this.r*0.5);
    //this.pos.add(this.velocity);
    return new Cell(this.pos.copy(),this.r,this.velocity.copy().mult(-1));
  }
  
  isFinishedSplitting() {
    if (this.velocity.mag() == 0) {
      return true;
    }
    return false;
  }
}
