import Circle from './circle';
import Rectangle from './rectangle';
import {add, multiply,rotationMatrix} from 'mathjs';
import {makeAngleInBounds,  arcTangent, distance, reflectVector} from './math_utils';


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
    this.angleRange = Math.PI/6;
    this.endAngle = this.startAngle-this.angleRange;
    this.omega = -.1; // angular velocity

    this.shape = {
      baseCircle : new Circle(this.x,this.y,this.baseRadius),
      body : new Rectangle(this.x+ .5*this.bodyLength, this.y, this.bodyLength, this.edgeRadius*2),
      edgeCircle : new Circle(this.x+this.bodyLength,this.y, this.edgeRadius)
    }
    this.damper = .5;
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
    if (this.oldAngle==undefined){
      this.oldAngle = 0;
      debugger
    }else{
      this.oldAngle = this.angle;
    }
    
    // this.angle+=this.omega;
    if (this.isTurnsClockwise && (key.isPressed('/') || key.isPressed('?')) ){
      this.angle = this.endAngle;
    }
    else if (!this.isTurnsClockwise && (key.isPressed("z") || key.isPressed('Z') ) ){
      this.angle = this.endAngle;
    }else{
      this.angle= this.startAngle;
    }

    debugger
    for (const s of Object.values(this.shape)) {
      s.x-=this.x;
      s.y-=this.y;
      [s.x,s.y] = multiply(rotationMatrix(-this.oldAngle+this.angle ), [s.x,s.y])._data;
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

  handleCollision(other){
    //Find projection 
    debugger

    let relPos = [other.x- this.x, other.y-this.y];
    let otherAngle = arcTangent(relPos);

    let othersProjectionOnFlipper = distance(this.x,this.y, other.x, other.y ) * 
      Math.cos( Math.abs(otherAngle - this.angle) );
    let vBumpMag = this.damper * othersProjectionOnFlipper * this.omega;

    let normalAngle = this.angle+Math.PI/2;
    let normalVector = [Math.cos(normalAngle), Math.sin(normalAngle)];
    let reflectedVelocity = reflectVector(normalVector, [other.vx, other.vy]);

    [other.vx, other.vy] = add( [other.vx, other.vy], reflectedVelocity, multiply(normalVector,vBumpMag) )

    other.x += normalVector[0]*2*other.dimX;
    other.y += normalVector[1]*2*other.dimY;



  }


}
export default Flipper;