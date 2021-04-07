import Rectangle from './rectangle';
import Circle from './circle';
import Ball from './ball';
import Enemy from './enemy';
import Flipper from './flipper';



class Game {
  
  constructor(){
    this.DIM_X = 700;
    this.DIM_Y = 680;
    this.NUM_MAX_ENEMIES = 10;
    this.entities = [];
    this.blocks = [];
    this.flippers = [];
    
    this.timeVal;
    this.setupField();
    this.successfulEnemiesCount = 0;

    
  }

  setupField(){


    // this.blocks.push(new Rectangle(this.DIM_X/2, this.DIM_Y/2, 150,150, Math.PI/4))
    // this.blocks.push(new Circle(this.DIM_X/2, this.DIM_Y*.9, 30))
    
    let leftCircle = new Circle(.3*this.DIM_X, .2*this.DIM_Y, 50);
    this.blocks.push(leftCircle);
    let rightCircle = new Circle(.7*this.DIM_X, .2*this.DIM_Y, 50);
    this.blocks.push(rightCircle);
    
    
    let leftRect = new Rectangle(.25*this.DIM_X+20, .50*this.DIM_Y, 240, 40,Math.PI/4);
    this.blocks.push(leftRect);

    let rightRect = new Rectangle(.75*this.DIM_X-20, .50*this.DIM_Y, 240, 40,-Math.PI/4);
    this.blocks.push(rightRect);


    let leftCornerRect = new Rectangle(0,.85*this.DIM_Y, 400,300, .9*Math.PI/4);
    let rightCornerRect = new Rectangle(this.DIM_X,this.DIM_Y*.85, 400,300, - .9*Math.PI/4);
    this.blocks.push(leftCornerRect);
    this.blocks.push(rightCornerRect);


    let flipperXCenterOffset = 135;
    let flipperYCenterOffset = 260;

    let leftFlipper = new Flipper(
      this.DIM_X/2-flipperXCenterOffset,
      this.DIM_Y/2 + flipperYCenterOffset,
      'ccw', 
      Math.PI/6
    );

    let rightFlipper = new Flipper(
      this.DIM_X/2+flipperXCenterOffset,
      this.DIM_Y/2 + flipperYCenterOffset,
      'cw', 
      5/6*Math.PI
    )
    this.flippers.push(leftFlipper);
    this.flippers.push(rightFlipper);




    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    // this.addEnemy();
    // this.addEnemy();
    this.addTestEnemy();

    this.addBall();
    

  }

  addEnemy(){
    let angle = -Math.PI*Math.random();
    let vMag = 2;
    let vx = vMag*Math.cos(angle);
    let vy = -vMag*Math.sin(angle);
    let enemy = new Enemy(Math.round(20+ (this.DIM_X-25)*Math.random()),20/2,vx,vy,20,20);
    this.entities.push(enemy);
  }
  addTestEnemy(){
    // this.entities.push(new Enemy(.4*this.DIM_X-15, .6*this.DIM_Y, 0, 1, 23,23));
    this.entities.push(new Enemy(this.DIM_X/2, .4*this.DIM_Y, 0, 2, 23,23));
  }

  addBall(side = 0){
    // let angle = Math.PI*2*Math.random();
    // let vMag = 6;
    // let vx = vMag*Math.cos(angle);
    // let vy = vMag*Math.sin(angle);
    let radius= 12;
    let x = (side===0) ? radius : this.DIM_X-radius;
    let y = 370; //this.DIM_Y/2;
    let vx = 0;
    let vy = 0;
    let ball = new Ball(x,y,vx,vy,radius,'#0095DD');
    this.entities.push(ball);
  }


  draw(ctx){
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);

    this.blocks.forEach((b)=>{b.draw(ctx)});
    this.flippers.forEach((flipper)=>{flipper.draw(ctx)})
    // this.blocks[0].draw(ctx);
    for (let i= 0 ; i< this.entities.length; i++){
      this.entities[i].draw(ctx);
    }
  }

  moveEntities(){
    this.flippers.forEach((flipper)=>{flipper.move()})
    this.entities.forEach((entity)=>{entity.move()})
  }


  handleLostEntities(){// entities that fell past the flippers
    let indicesToDelete = [];
    this.entities.forEach((e, idx)=>{
      if (e.y+e.dimY/2 >= this.DIM_Y){
        if (e instanceof Ball){
          indicesToDelete.unshift(idx);
          this.addBall(Math.round(Math.random()));

        }else if (e instanceof Enemy){
          this.successfulEnemiesCount++;
          indicesToDelete.unshift(idx);
        }
      }
    });
    indicesToDelete.forEach((i)=>{
      this.entities.splice(i,1);
    })



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

    //Block-Entity Collisions
    for (let g = 0; g< this.entities.length; g++ ){
      for (let h =0; h< this.blocks.length; h++){
        if (this.blocks[h].isCollidedWith(this.entities[g])){
          this.blocks[h].handleCollision(this.entities[g]);
          this.entities[g].handleCollision();

        }
      }
    }

    //Flipper collisions
    for (let h=0; h< this.flippers.length;h++){
      this.entities.forEach((e)=>{
        if (this.flippers[h].isCollidedWith(e)){
          console.log('Collided with flipper')
          this.flippers[h].handleCollision(e);
          
        }
      });
    } 


    //Entity-Entity Collisions
    for (let i = 1; i< this.entities.length; i++){
      for (let j = 0 ; j< i; j++){
        if (this.entities[i].isCollidedWith(this.entities[j])){

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



  // makeCanvasBackground(ctx){
  //   let backgroundImage=  new Image();
  //   backgroundImage.src = 'src/images/grass.png';
  //   backgroundImage.onload = ()=>{
  //     ctx.drawImage(backgroundImage, 0,0);
  //   }
  // }
}
export default Game;