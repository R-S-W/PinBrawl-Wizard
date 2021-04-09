import Ball from './ball';
import Enemy from './enemy';
import {multiply, matrix} from 'mathjs';
import {distance} from './math_utils';


class Circle  {
  constructor(x,y,radius, imageURL){
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (imageURL){
      this.image= new Image();
      this.image.src = imageURL;
    }
  }

  draw(ctx){
    if (!this.image){
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.radius,0, Math.PI*2);
      ctx.fillStyle  = '#636579';
      ctx.fill();
      ctx.closePath();
    }else{
      ctx.drawImage(this.image, this.x-this.radius, this.y-this.radius,this.radius*2, this.radius*2);
    }
  }


  handleCollision(other){
    let a;
    let b;
    let distAB = distance(this.x, this.y, other.x, other.y);
    [a,b] = [(other.x-this.x)/distAB, (other.y-this.y)/distAB];
    let reflectionMatrix = matrix([[1-2*a**2, -2*a*b],[-2*a*b, 1-2*b**2]]);
    [other.vx, other.vy] = multiply(reflectionMatrix, [other.vx, other.vy])._data;

    other.x += a*other.dimX/2;
    other.y += b*other.dimX/2;

  }


  isCollidedWith(other){
    if (other instanceof Ball){
      return distance(this.x,this.y,other.x,other.y) < this.radius+other.radius    
    }else if (other instanceof Enemy){
      // This is a simple calculation and good for small enemies and big circles.
      let verts = other.getVertices();
      for (let i = 0; i< verts.length; i++){
        if (this.isInside(verts[i])) return true;
      }
      return false;
    }
    
  }
  isInside(point){
    return (distance(point[0], point[1], this.x,this.y) < this.radius) ? true : false;
  }

}

export default Circle;


