import Circle from './circle';
import Rectangle from './rectangle';
import {add, multiply,rotationMatrix, dot} from 'mathjs';
import {makeAngleInBounds,  arcTangent, distance, reflectVector} from './math_utils';
import AnimationData from './animation_data';

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
    
    this.shape = {
      baseCircle : new Circle(this.x,this.y,this.baseRadius),
      body : new Rectangle(this.x+ .5*this.bodyLength, this.y, this.bodyLength, this.baseRadius*2),
      edgeCircle : new Circle(this.x+this.bodyLength,this.y, this.edgeRadius)
    }
    this.damper = .5;
    
    this.flipAnimationData = new AnimationData(5);
    this.dOmegaMag = 1/this.flipAnimationData.numFrames;
    this.omega = 0; // angular velocity
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
    let oldFrame;
    if (this.oldAngle==undefined){
      this.oldAngle = 0;
      oldFrame = 0;
      // debugger
    }else{
      this.oldAngle = this.angle;
      oldFrame = this.flipAnimationData.frameIdx;

    }
    
    // this.angle+=this.omega;
    if ( (this.isTurnsClockwise && (key.isPressed('/') || key.isPressed('?')) ) 
      || (!this.isTurnsClockwise && (key.isPressed("z") || key.isPressed('Z')) ) 
    ){
      this.flipAnimationData.switchToIncrement();
    }else{
      this.flipAnimationData.switchToDecrement();
    }
    this.flipAnimationData.go()
    this.angle = this.startAngle - this.angleRange*this.flipAnimationData.fractionCompleted();      
    this.omega = this.dOmegaMag * (this.flipAnimationData.frameIdx - oldFrame);
    let dAngle = -this.oldAngle+this.angle;
    // debugger

    if (Math.abs(dAngle) > .000001){
      for (const s of Object.values(this.shape)) {
        if (s instanceof Rectangle){
          debugger
          s.rotateOnPivot([this.x,this.y], dAngle);
        }else{
          s.x-=this.x;
          s.y-=this.y;
          [s.x,s.y] = multiply(rotationMatrix( dAngle), [s.x,s.y])._data;
          s.x+=this.x;
          s.y+=this.y;
        }
        
      }
    }
  }


  isCollidedWith(other){
    let shapeList = Object.values(this.shape);
    for (let i = 0; i< 3; i++){
      if (shapeList[i].isCollidedWith(other)) {
        if (shapeList[i] instanceof Rectangle) debugger
        return true;
      }
    }
    return false;
  }

  handleCollision(other){
    //Find projection 
    
    let relPos = [other.x- this.x, other.y-this.y];
    let otherAngle = arcTangent(relPos);
    
    let othersProjectionOnFlipper = distance(this.x,this.y, other.x, other.y ) * 
    Math.cos( Math.abs(otherAngle - this.angle) );
    let vBumpMag = this.damper * othersProjectionOnFlipper * this.omega;
    
    let normalAngle = this.angle+Math.PI/2;
    let normalVector = [-Math.cos(normalAngle), -Math.sin(normalAngle)];
    let reflectedVelocity = reflectVector(normalVector, [other.vx, other.vy]);
    // debugger
    
    //The new velocity is equal to the velocity parallel to the bumper body plus
    // the the largest vector of this pair in the normal direction:   the tangential bumper speed or
    //the reflected normal velocity of the entity.
    
    let reflectedVelocityNormalMag = dot(reflectedVelocity, normalVector);
    let newVelocity;
    if (reflectedVelocityNormalMag >= vBumpMag){
      newVelocity=  reflectedVelocity;
    }else{
      let addedVel = multiply(vBumpMag-reflectedVelocityNormalMag , normalVector);
      newVelocity = add(reflectedVelocity, addedVel);
    }

    [other.vx, other.vy] = newVelocity;
    
    other.x += normalVector[0]*other.dimX + .5* other.vx;
    other.y += normalVector[1]*other.dimY + .5*other.vy;



  }


}
export default Flipper;