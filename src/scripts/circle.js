import Ball from './ball';
import Enemy from './enemy';


class Circle  {
  constructor(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0, Math.PI*2);
    ctx.fillStyle  = '#636579';
    ctx.fill();
    ctx.closePath();
  }

  isCollidedWith(other){
    // console.log('c')
    if (other instanceof Ball){
      // console.log('b')
      return this.distance(this.x,this.y,other.x,other.y) < this.radius+other.radius    
    }else if (other instanceof Enemy){
      // console.log('e')
      // This is a simple calculation and good for small enemies and big circles.
      let verts = other.getVertices();
      for (let i = 0; i< verts.length; i++){
        if (this.isInside(verts[i])) return true;
      }
      return false;
    }
    
  }
  isInside(point){
    return (this.distance(point[0], point[1], this.x,this.y) < this.radius) ? true : false;
  }

  distance(ax, ay,bx,by){
    return ((ax-bx)**2+(ay-by)**2)**.5
  }
}

export default Circle;