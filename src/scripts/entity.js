
class Entity {
  constructor(x=0,y=0,vx=0,vy=0, dimX=0, dimY=0, color='#11D6CD'){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dimX = dimX;
    this.dimY = dimY;
    this.backgroundColor = color;

  }


  draw(ctx){
    ctx.beginPath();
    // ctx.rect(this.pos.x, this.pos.y, 10,10);
    ctx.rect(this.x - this.dimX/2, this.y - this.dimY/2,this.dimX, this.dimY );
    ctx.fillStyle =this.backgroundColor;
    ctx.fill();
    ctx.closePath();

  }

  move(){
    this.x += this.vx;
    this.y += this.vy;
  }

  isCollidedWith(otherEntity){
    if ( this.isInside([otherEntity.x - otherEntity.dimX/2, otherEntity.y - otherEntity.dimY/2])
      || this.isInside([otherEntity.x + otherEntity.dimX/2, otherEntity.y - otherEntity.dimY/2])
      || this.isInside([otherEntity.x - otherEntity.dimX/2, otherEntity.y + otherEntity.dimY/2])
      || this.isInside([otherEntity.x + otherEntity.dimX/2, otherEntity.y + otherEntity.dimY/2])
    ){
      return true;
    }
    return false;
  }

  isInside(point){
    if (this.x-this.dimX/2 <= point[0] 
      && point[0] <= this.x+this.dimX/2
      && this.y-this.dimY/2 <= point[1]
      && point[1] <= this.y+this.dimY/2 ){
        return true;
    }
    return false;
  }

  getVertices(){
    return [
      [this.x-this.dimX/2,this.y-this.dimY/2],
      [this.x+this.dimX/2,this.y+this.dimY/2],
      [this.x-this.dimX/2,this.y+this.dimY/2],
      [this.x+this.dimX/2,this.y-this.dimY/2]
    ]
  }

}


export default Entity;