
import Circle from './circle';

class Rectangle {
  constructor(x,y,width,length, angle = 0){
    this.x=  x;
    this.y = y;
    this.width = width;
    this.length = length;
    this.angle= angle;
    
    let bl = Math.multiply(Math.rotationMatrix(angle) , [this.x-this.dimX/2, this.y-this.dimY/2]);
    let br = Math.multiply(Math.rotationMatrix(angle) , [this.x+this.dimX/2, this.y-this.dimY/2]);
    let tl = Math.multiply(Math.rotationMatrix(angle) , [this.x-this.dimX/2, this.y+this.dimY/2]);
    let tr = Math.multiply(Math.rotationMatrix(angle) , [this.x+this.dimX/2, this.y+this.dimY/2]);
    bl = [bl[0]+this.x, bl[1]+this.y];
    br = [br[0]+this.x, br[1]+this.y];
    tl = [tl[0]+this.x, tl[1]+this.y];
    tr = [tr[0]+this.x, tr[1]+this.y];
    this.verts = [tr,tl,bl,br];
  }

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

  isInside(point){
    point[0]-=this.x;
    point[1]-=this.y;
    point = Math.multiply(Math.rotationMatrix(-angle),point);
    if (-this.dimX/2 <= point[0] 
      && point[0] <= this.dimX/2
      && -this.dimY/2 <= point[1]
      && point[1] <= this.dimY/2 ){
        return true;
    }
    return false;
  }
}
export default Rectangle;