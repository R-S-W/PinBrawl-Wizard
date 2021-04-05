import {multiply, rotationMatrix} from 'mathjs';
import Circle from './circle';
import Ball from './ball';
import Enemy from './enemy';

class Rectangle {
  constructor(x,y,width,length, angle = 0){
    this.x=  x;
    this.y = y;
    this.width = width;
    this.length = length;
    this.angle= angle;
    
    let bl = multiply(rotationMatrix(angle) , [-this.width/2, -this.length/2])._data;
    let br = multiply(rotationMatrix(angle) , [+this.width/2, -this.length/2])._data;
    let tl = multiply(rotationMatrix(angle) , [-this.width/2, +this.length/2])._data;
    let tr = multiply(rotationMatrix(angle) , [+this.width/2, +this.length/2])._data;
    
    bl = [bl[0]+this.x, bl[1]+this.y];
    br = [br[0]+this.x, br[1]+this.y];
    tl = [tl[0]+this.x, tl[1]+this.y];
    tr = [tr[0]+this.x, tr[1]+this.y];
    this.verts = [tr,tl,bl,br];
  }

  draw(ctx){
    //this.x and this.y is the center of the rectangle.
    ctx.translate(this.x,this.y);
    ctx.rotate(this.angle);
    ctx.translate(-this.x,-this.y);

    ctx.beginPath();
    ctx.rect(this.x-this.width/2, this.y-this.length/2, this.width, this.length);
    ctx.fillStyle ='#636579';
    ctx.fill();
    ctx.closePath();

    ctx.translate(this.x,this.y);
    ctx.rotate(-this.angle);
    ctx.translate(-this.x, -this.y);
  }


  move(){}


  isCollidedWith(other){

    if(other instanceof Ball){
      
      if ( this.isInside([other.x,other.y]) 
        || this.isInside([other.x-other.radius, other.y])
        || this.isInside([other.x+other.radius, other.y])
        || this.isInside([other.x, other.y+other.radius])
        || this.isInside([other.x, other.y-other.radius]) ){
        return true;
      }
      for (let h = 0; h< 4; h++){
        let otherCircle= new Circle(other.x, other.y, other.radius);
        if (otherCircle.isInside(this.verts[h])) return true;
      }
      return false;
      

    }else if(other instanceof Enemy){
      let otherRectangle = new Rectangle(other.x, other.y, other.dimX, other.dimY);      
      for (let i=0; i< 4; i++){
        if (this.isInside(otherRectangle.verts[i])) return true;
        if (otherRectangle.isInside(this.verts[i])) return true;
      }
      return false;
    }

  }

  isInside(p){
    let point = new Array(...p);
    // console.log(point);
    point[0]-=this.x;
    point[1]-=this.y;
    point = multiply(rotationMatrix(-this.angle),point)._data;
    // console.log(point)
    if (-this.width/2 <= point[0] 
      && point[0] <= this.width/2
      && -this.length/2 <= point[1]
      && point[1] <= this.length/2 ){
        return true;
    }
    return false;
  }
}
export default Rectangle;
