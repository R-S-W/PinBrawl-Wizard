import Circle from './circle';
import Rectangle from './rectangle';
import {multiply,rotationMatrix} from 'mathjs';


class Flipper {

  constructor(x,y ,rotationDirection = 'cw', startAngle= 5*Math.PI/6){
    this.x = x;
    this.y = y;
    this.isTurnsClockwise = rotationDirection === 'cw';
    this.bodyLength = 100;
    this.baseRadius = 15;
    this.edgeRadius = this.baseRadius;
    this.color = '#9C1A00';
    this.startAngle = startAngle;
    this.angle = startAngle;

    this.shape = {
      baseCircle : new Circle(this.x,this.y,this.baseRadius),
      body : new Rectangle(this.x+ .5*this.bodyLength, this.y, this.bodyLength, this.edgeRadius*2),
      edgeCircle : new Circle(this.x,this.y+this.bodyLength, this.edgeRadius)
    }
    
  }
  
  draw(ctx){
    // debugger
    ctx.translate(this.x,this.y);
    ctx.rotate(this.angle);
    ctx.translate(-this.x,-this.y);


    ctx.beginPath();
    ctx.arc(this.x,this.y,this.baseRadius,0, Math.PI*2);
    ctx.rect(this.x, this.y-this.baseRadius, this.bodyLength,this.baseRadius*2);
    
    ctx.arc(this.x+this.bodyLength, this.y, this.edgeRadius, 0, 2*Math.PI);
    ctx.fillStyle =this.color;
    ctx.fill();
    ctx.closePath();


    ctx.translate(this.x,this.y);
    ctx.rotate(-this.angle);
    ctx.translate(-this.x, -this.y);
  }


  move(){
    let oldAngle = this.angle;
    
    this.angle+=-.1;

    let dAngle = this.angle-oldAngle;

    for (const [key, s] of Object.entries(this.shape)) {
      s.x-=this.x;
      s.y-=this.y;

      [s.x,s.y] = multiply(rotationMatrix(dAngle), [s.x,s.y])._data;

      s.x+=this.x;
      s.y+=this.y;
    }

  }
  isCollidedWith(other){


    let shapeList = Object.values(this.shape);
    for (let i = 0; i< 3; i++){
      if (shapeList[i].isCollidedWith(other)) return true;
    }
    return false;
  }
}
export default Flipper;