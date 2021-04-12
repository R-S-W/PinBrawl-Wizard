import Rectangle from './rectangle';
import Circle from './circle';
import Ball from './ball';
import Enemy from './enemy';
import Flipper from './flipper';
import Sound from './sound';
import SoundCollection from './sound_collection';

import LivesBar from './lives_bar'
import Wizard from './wizard';

import {createElasticCollisionVelocities} from './physics_utils';
import {add} from 'mathjs';



class Game {
  
  constructor(){
    this.DIM_X = 700;
    this.DIM_Y = 680;
    this.NUM_MAX_ENEMIES = 10;
    this.entities = [];
    this.blocks = [];
    this.flippers = [];
    
    this.timeVal;

    this.successfulEnemiesCount = 0;
    this.targetPos = [this.DIM_X/2,this.DIM_Y];



    this.livesBar = new LivesBar();
    this.enemyTypeList= [];
    this.sounds;


    this.setupAssets();
    this.setupField();
    this.setupEntities();
  }

  setupAssets(){

    let explosion = new Sound('./src/audio/explosion.mp3', .13);
    let creeper_win = new Sound('./src/audio/creeper_win.mp3', .35);
    let kyubey_win = new Sound('./src/audio/kyubey_win.mp3');
    let wat = new Sound('./src/audio/wat.mp3');
    let pikachu_win = new Sound('./src/audio/pikachu_win.mp3',.15);
    
    // explosion.play();


    let flipper_1 = new Sound('./src/audio/flipper_1.mp3',.75);
    let flipper_2 = new Sound('./src/audio/flipper_2.mp3',.8);
    let flipper_3 = new Sound('./src/audio/flipper_3.mp3',.75);
    let flipper_4 = new Sound('./src/audio/flipper_4.mp3',.8);
    let flipperCollection = new SoundCollection({flipper_1, flipper_2, flipper_3, flipper_4});

    // let flipper1 = new Sound('./src/audio/ .mp3');

    let penguin_hurt_1 = new Sound('./src/audio/penguin_hurt_1.mp3',.81);
    let penguin_hurt_2 = new Sound('./src/audio/penguin_hurt_2.mp3',.81);
    let penguinCollection = new SoundCollection({penguin_hurt_1, penguin_hurt_2});

    this.sounds = {explosion, creeper_win, kyubey_win, flipperCollection, penguinCollection, wat, pikachu_win}
    Object.freeze(this.sounds);
  }

  setupField(){



    // this.blocks.push(new Rectangle(this.DIM_X/2, this.DIM_Y/2, 150,150, Math.PI/4))
    // this.blocks.push(new Circle(this.DIM_X/2, this.DIM_Y*.9, 30))
    

    //Blocks___________________________
    let leftCircle = new Circle(.3*this.DIM_X, .2*this.DIM_Y, 50, './src/images/rock.png');
    this.blocks.push(leftCircle);
    let rightCircle = new Circle(.7*this.DIM_X, .2*this.DIM_Y, 50,'./src/images/rock.png');
    this.blocks.push(rightCircle);
    
    
    let leftRect = new Rectangle(.25*this.DIM_X+20, .50*this.DIM_Y, 240, 40,Math.PI/4, './src/images/column.png', [1,11/7]);
    this.blocks.push(leftRect);

    let rightRect = new Rectangle(.75*this.DIM_X-20, .50*this.DIM_Y, 240, 40,-Math.PI/4,'./src/images/column.png', [1,11/7]);
    this.blocks.push(rightRect);


    let leftCornerRect = new Rectangle(0,.85*this.DIM_Y, 400,300, .9*Math.PI/4, './src/images/brick_wall.png');
    let rightCornerRect = new Rectangle(this.DIM_X,this.DIM_Y*.85, 400,300, - .9*Math.PI/4, './src/images/brick_wall.png');
    this.blocks.push(leftCornerRect);
    this.blocks.push(rightCornerRect);


    //Flippers______________________
    let flipperXCenterOffset = 135;
    let flipperYCenterOffset = 260;

    let leftFlipper = new Flipper(
      this.DIM_X/2-flipperXCenterOffset,
      this.DIM_Y/2 + flipperYCenterOffset,
      'ccw', 
      Math.PI/6,
      this.sounds.flipperCollection
    );

    let rightFlipper = new Flipper(
      this.DIM_X/2+flipperXCenterOffset,
      this.DIM_Y/2 + flipperYCenterOffset,
      'cw', 
      5/6*Math.PI,
      this.sounds.flipperCollection
    )
    this.flippers.push(leftFlipper);
    this.flippers.push(rightFlipper);
    this.sounds.flipperCollection
  }


  setupEntities(){

    //add wizard

    this.coolPenguin = new Wizard(this.DIM_X/2, this.DIM_Y*.95);
    this.addBall();
    this.setupEnemies();
  }

  setupEnemies(){

    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
  }

  addEnemy(){
    let angle = -Math.PI*Math.random();
    let vMag = 2;
    let vx = vMag*Math.cos(angle);
    let vy = -vMag*Math.sin(angle);
    let creeper = new Enemy(
      Math.round(20+ (this.DIM_X-25)*Math.random()),
      20/2,
      vx,
      vy,
      20,
      40,
      './src/images/creeper.png',
      {
        death: "explosion",
        win: "creeper_win",
      },
      this.targetPos
      // 'explosion'
    );
    let kyubey = new Enemy(
      Math.round(20+ (this.DIM_X-25)*Math.random()),
      20/2,
      vx,
      vy,
      40,
      40,
      './src/images/kyubey.png',
      {
        death: "explosion", 
        win: 'kyubey_win'
      },
      this.targetPos
    )

    let js = new Enemy(
      Math.round(20+ (this.DIM_X-25)*Math.random()),
      20/2,
      vx*3,
      vy*3,
      30,
      30,
      './src/images/js.png',
      {
        death:"wat",
        win: 'wat'
      },
      this.targetPos
    )

    let pikachu = new Enemy(
      Math.round(20+ (this.DIM_X-25)*Math.random()),
      10,
      vx,
      vy,
      45,
      45,
      './src/images/evil_pikachu.png',
      {
        death:'explosion',
        win: 'pikachu_win'
      },
      this.targetPos

    )    

    let enemyArray = [creeper, kyubey, js, pikachu];
    let randIdx =Math.abs(Math.round(Math.random()*enemyArray.length-1));
    // debugger
    this.entities.push(enemyArray[randIdx]);
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
    let imageURL = './src/images/pinball.png';
    let ball = new Ball(x,y,vx,vy,radius,imageURL);
    this.entities.push(ball);
  }

  isNoEnemies(){
    for (let i = 0; i< this.entities.length; i++){
      if (this.entities[i] instanceof Enemy) return false;
    }
    return true;
  }


  draw(ctx){
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);

    this.blocks.forEach((b)=>{b.draw(ctx)});
    this.flippers.forEach((flipper)=>{flipper.draw(ctx)})
    // this.blocks[0].draw(ctx);
    for (let i= 0 ; i< this.entities.length; i++){
      this.entities[i].draw(ctx);
    }

    this.coolPenguin.draw(ctx);
  }

  update(){
    this.flippers.forEach((flipper)=>{flipper.move()})
    this.entities.forEach((entity)=>{entity.move()})
    this.coolPenguin.update();
  }


  handleLostEntities(){// entities that fell past the flippers
    let indicesToDelete = [];
    this.entities.forEach((e, idx)=>{
      if (e.y+e.dimY/2 >= this.DIM_Y){
        if (e instanceof Ball){
          indicesToDelete.unshift(idx);
          this.addBall(Math.round(Math.random()));


          this.livesBar.removeLife();


        }else if (e instanceof Enemy){
          this.successfulEnemiesCount++;
          indicesToDelete.unshift(idx);
          this.livesBar.removeLife();
          if (e.soundNames)  this.sounds[e.soundNames.win].play();
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
            if (this.entities[j].soundNames)  this.sounds[this.entities[j].soundNames.death].play();
          }else if (this.entities[j] instanceof Ball){
            deleteIndex = i;
            if (this.entities[i].soundNames)  this.sounds[this.entities[i].soundNames.death].play();
          }else{//Calculate new velocities
            let newVi;
            let newVj;
            
            [newVi, newVj] = createElasticCollisionVelocities(
              [this.entities[i].x, this.entities[i].y],
              [this.entities[j].x, this.entities[j].y],
              [this.entities[i].vx, this.entities[i].vy],
              [this.entities[j].vx, this.entities[j].vy]
            );
            [this.entities[i].vx, this.entities[i].vy] = newVi;
            [this.entities[j].vx, this.entities[j].vy] = newVj;

            let aNormalVec = [this.entities[i].x- this.entities[j].x, this.entities[i].y-this.entities[j].y];
            this.entities[i].x += newVi[0]*.5;
            this.entities[i].y += newVi[1]*.5;
            this.entities[j].x -= newVj[0]*.5;
            this.entities[j].y -= newVj[1]*.5;
              //  aNormalVec[0]*.5;
              //  aNormalVec[0]*.5;
              //  aNormalVec[1]*.5;
              //  aNormalVec[1]*.5;
            // let temp = this.entities[i].vx;
            // this.entities[i].vx  = -this.entities[j].vx;
            // this.entities[j].vx =-temp;
          }
        }
      }
    }
    if (deleteIndex !== -1)  this.entities.splice(deleteIndex,1);


    //Wizard-entity Collisions
    this.entities.forEach((e)=>{
      if (this.coolPenguin.isCollidedWith(e)){
        this.coolPenguin.handleCollision();

        if (!this.sounds.penguinCollection.isASongPlaying()){
          // let aSound = this.sounds.penguinCollection.sample();
          this.sounds.penguinCollection.sample().play();

        }

      }
    })
  }



  isCompleted(){
    return (this.livesBar.isEmpty() );//|| this.entities)
    // if (this.livesBar.isEmpty()){
    //   this.
    // }
  }

  gameOverMessage(){
    if (this.livesBar.isEmpty()){
      return 'Game Over'
    }
    // return 
  }

  reset(){
    this.livesBar.reset();
    this.successfulEnemiesCount = 0;
    this.entities = [];
    this.setupEntities();
    this.timeval = undefined;
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