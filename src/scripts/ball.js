import Entity from './entity';

class Ball extends Entity {
  constructor(x,y,vx,vy,radius,color){
    super(x,y,vx,vy);
    // this.x = x;
    // this.y = y;
    // this.vx = vx;
    // this.vy = vy;
    this.radius = radius;
    this.dimX = 2*radius;
    this.dimY = 2*radius;
    this.backgroundColor = color;
    this.gravity = 1;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0, Math.PI*2);
    ctx.fillStyle  = this.backgroundColor;
    ctx.fill();
    ctx.closePath();
  }

  move(){
    this.vy +=this.gravity;
    this.x += this.vx;
    this.y =Math.round(this.y+this.vy);
  }
}
export default Ball;

