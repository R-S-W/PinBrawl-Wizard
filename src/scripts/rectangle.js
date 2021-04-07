import {add,multiply, cross,rotationMatrix, matrix} from 'mathjs';
import {makeAngleInBounds, reflectVector} from './math_utils';
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
    
    let bl = multiply(rotationMatrix(angle) , [-this.width/2, +this.length/2])._data;
    let br = multiply(rotationMatrix(angle) , [+this.width/2, +this.length/2])._data;
    let tl = multiply(rotationMatrix(angle) , [-this.width/2, -this.length/2])._data;
    let tr = multiply(rotationMatrix(angle) , [+this.width/2, -this.length/2])._data;
    
    
    bl = [bl[0]+this.x, bl[1]+this.y];
    br = [br[0]+this.x, br[1]+this.y];
    tl = [tl[0]+this.x, tl[1]+this.y];
    tr = [tr[0]+this.x, tr[1]+this.y];
    this.verts = [tr,tl,bl,br];
    
    let brA = Math.atan(this.length/this.width);
    let trA = -brA;
    let tlA = brA- Math.PI;
    let blA = Math.PI-brA;
    this.vertAngles = [trA, tlA,blA,brA];
    
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



  handleCollision(other){

    let distV = [other.x-this.x , other.y-this.y];
    //Angles will follow -PI < angle < PI  radians.
    let oAngle = Math.atan(distV[1]/distV[0]);
    if (distV[1]>0 && distV[0] < 0) oAngle+=Math.PI;
    if (distV[1] < 0 && distV[0]< 0) oAngle -= Math.PI
    
    // debugger
    oAngle = makeAngleInBounds(oAngle-this.angle); //bring angle to the reference frame of the unrotated rectangle
    let side = '';
    let lineVerts = [];
    let normAngle;


    if (this.vertAngles[3] > oAngle && oAngle > this.vertAngles[0]){
      side = 'r';
      normAngle = 0;
      // lineVerts = [this.verts[3],this.verts[0]];
    }else if (this.vertAngles[0] > oAngle && oAngle > this.vertAngles[1]){
      side = 't';
      normAngle = -Math.PI/2;
      // lineVerts = [this.verts[0],this.verts[1]];
    }else if ((this.vertAngles[1] > oAngle ) || (oAngle > this.vertAngles[2] )){
      side = 'l';
      normAngle = Math.PI;
      // lineVerts = [this.verts[1],this.verts[2]];
    }else {
      side = 'b';
      normAngle= Math.PI/2;
      // lineVerts = [this.verts[2],this.verts[3]];
    }
    
    normAngle  = makeAngleInBounds(normAngle + this.angle);
    //normal vector components a and b 
    let a = Math.cos(normAngle);
    let b = Math.sin(normAngle);
    let newVelocity =   reflectVector([a,b], [other.vx, other.vy]);

    other.vx = newVelocity[0] ; 
    other.vy = newVelocity[1] ;

    other.x += a*other.dimX*.2;
    other.y += b*other.dimY*.2;

  }

/*
  handleCollision(other){
    //find the closest side to the collided entity.
    // let posOther = [other.x, other.y];

    other.x -= other.vx/2;
    other.y -= other.vy/2;

    let distanceDict = {};
    for(let i =0; i< 4; i++){
      let key = this.findNormalDistance(this.verts[i], this.verts[(i+1)%4], posOther);
      distanceDict[key] = [i,(i+1)%4];
    }


    let minKey = Math.min(...Object.keys(distanceDict));
    // debugger
    let vertexPair =  [ this.verts[distanceDict[minKey][0]],  this.verts[distanceDict[minKey][1]] ] ;
    //calculate slope and reflect velocity of 'other'
    let slopeMag = distance(vertexPair[0][0], vertexPair[0][1], vertexPair[1][0], vertexPair[1][1]);
    let c = (vertexPair[0][0]-vertexPair[1][0])/slopeMag ;
    let d = (vertexPair[0][1]-vertexPair[1][1])/slopeMag;
    let reflectionMatrix = matrix([[1-2*d**2,2*c*d],[2*c*d,1-2*c**2]]);
    
    let newVx;
    let newVy;
    [newVx, newVy] = multiply(reflectionMatrix, [other.vx, other.vy])._data;
    
    let normalV = multiply(other.dimX, normalizeVector([newVx, newVy]));
      
      //add([newVx,newVy], [other.vx, other.vy])));

    [other.vx, other.vy] = [newVx, newVy];

    // other.x += normalV[0];
    // other.y += normalV[1];

  }
  */


  findNormalDistance(a,b,c){
    let naa = [-a[0],-a[1],0];
    let bb = [b[0],b[1],0];
    let cc = [c[0], c[1],0];
    return Math.abs(cross(add(cc,naa), add(bb,naa))[2]);
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
