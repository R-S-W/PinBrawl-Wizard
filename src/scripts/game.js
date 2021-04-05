import Rectangle from './rectangle';
import Circle from './circle';
import Ball from './ball';
import Enemy from './enemy';


class Game {
  
  constructor(){
    this.DIM_X = 700;
    this.DIM_Y = 680;
    this.NUM_MAX_ENEMIES = 20;
    this.entities = [];
    
    this.timeVal;
    this.setupField();

    
  }

  setupField(){


    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    this.addBall();

  }

  addEnemy(){
    let angle = -Math.PI*Math.random();
    let vMag = 5;
    let vx = vMag*Math.cos(angle);
    let vy = -vMag*Math.sin(angle);
    let enemy = new Enemy(Math.round(20+ (this.DIM_X-25)*Math.random()),20/2,vx,vy,20,20);
    this.entities.push(enemy);
  }

  addBall(){
    let angle = Math.PI*2*Math.random();
    let vMag = 6;
    let vx = vMag*Math.cos(angle);
    let vy = vMag*Math.sin(angle);
    let x = this.DIM_X/2;
    let y = this.DIM_Y/2;
    let ball = new Ball(x,y,vx,vy,10,'#0095DD');
    this.entities.push(ball);
  }


  draw(ctx){
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);
    for (let i= 0 ; i< this.entities.length; i++){
      this.entities[i].draw(ctx);
    }
  }

  moveEntities(){
    this.entities.forEach((entity)=>{entity.move()})
  }

  reflectEntitiesOffWalls(){
    this.entities.forEach((e)=>{
      if ( e.y - e.dimY/2 < 0 ){
        e.y = e.dimY/2;
        e.vy = -e.vy;
      }else if (e.y + e.dimY/2 > this.DIM_Y){
        e.y = this.DIM_Y - e.dimY/2;
        e.vy*=-1;
      }
      if (e.x - e.dimX/2 < 0 ){
        e.x = e.dimX/2;
        e.vx = -e.vx;
      }else if (e.x + e.dimX/2 > this.DIM_X){
        e.vx = -e.vx;
        e.x = this.DIM_X - e.dimX/2;
      }
    });
  }


  checkCollisions(){
    let deleteIndex = -1;
    for (let i = 1; i< this.entities.length; i++){
      for (let j = 0 ; j< i; j++){
        if (this.entities[i].isCollidedWith(this.entities[j])){
          console.log('Collision');

          if (this.entities[i] instanceof Ball){
            deleteIndex = j;
          }else if (this.entities[j] instanceof Ball){
            deleteIndex = i;
          }else{
            let temp = this.entities[i].vx;
            this.entities[i].vx  = -this.entities[j].vx;
            this.entities[j].vx =-temp;
          }
        }
      }
    }
    if (deleteIndex !== -1)  this.entities.splice(deleteIndex,1);
  }

}
export default Game;