import Entity from './entity';

class Ball extends Entity {
  constructor(x,y,vx,vy,radius,imageURL, soundNames){
    super(x,y,vx,vy);
    this.radius = radius;
    this.dimX = 2*radius;
    this.dimY = 2*radius;
    // this.backgroundColor = color;
    this.gravity = .25;

    this.image = new Image();
    this.image.src = imageURL;

    this.soundNames = soundNames;
  }

  draw(ctx){
    // ctx.beginPath();
    // ctx.arc(this.x,this.y,this.radius,0, Math.PI*2);
    ctx.drawImage(this.image, this.x, this.y, this.radius*2, this.radius*2)
    // ctx.fillStyle  = this.backgroundColor;
    // ctx.fill();
    // ctx.closePath();
  }

  move(){
    this.vy +=this.gravity;
    this.x += this.vx;
    this.y =Math.round(this.y+this.vy);
  }

  handleCollision(){
    let damper= (  .7  )**.5;
    this.vx *=damper;
    this.vy *= damper;
  }
}
export default Ball;

