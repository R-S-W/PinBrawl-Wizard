import AnimationData from "./animation_data";
import Rectangle from './rectangle';


class Wizard {

  constructor(x,y){
    this.x = x;
    this.y = y;
    let heightWidthRatio = 4/3;
    this.dimX = 50;
    this.dimY = this.dimX*heightWidthRatio;

    let left = new Image();
    left.src = './src/images/penguin_back_left.png';
    let right = new Image();
    right.src = './src/images/penguin_back_right.png';
    let front = new Image();
    front.src = './src/images/penguin_front.png';
    let back = new Image();
    back.src  ='./src/images/penguin_back.png';
    this.imageCollection = { left, right, front, back };
    this.image;  //currently drawn image.

    this.isSquashed = false;
    this.squashedAD = new AnimationData(90);

    this.isGetNewRestImage = true; //rest images are this.imageCollection.front and .back.



    this.probabilityShowFront = .14;


    // './src/images/fireball_ .png'
    
    // this.isFireball= false;
    // this.fireBall; //Used for collision detection
    // this.fireBallAnimation = new Animation(
    //   [
    //     './src/images/fireball_1.png',
    //     './src/images/fireball_2.png',
    //     './src/images/fireball_3.png',
    //     './src/images/fireball_4.png',
    //     './src/images/fireball_5.png'
    //   ],
    //   {
    //     type: 'reset',
    //     framesToImgIndices: [ 0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,
    //       4,5,5,5,4,4,4,5,5,5,4,4,4,5,5,5,4,4,4,5,5,5,4,4,4,5,5,5,4,4,4,5,5,5,
    //       5,5,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1
    //     ]
    //   }
    // );

  }

  update(){


    //Flippers
    if (key.isPressed('.') || key.isPressed('>')){
      this.image = this.imageCollection.right;
      this.isGetNewRestImage = true;
    }else if(key.isPressed('z') || key.isPressed('Z')){
      this.image = this.imageCollection.left;
      this.isGetNewRestImage = true;
    }else{
      if (this.isGetNewRestImage){
        let rando = Math.random();
        this.image = (rando >= this.probabilityShowFront) ? this.imageCollection.back  : this.imageCollection.front;
        this.isGetNewRestImage = false;
      }
    }



    //Fireball
    // if (key.isPressed('x') || key.isPressed('X')){
    //   this.isFireball = true;
    //   let dimX = this.fireBallAnimation.currentFrame.width;
    //   let dimY = this.fireBallAnimation.currentFrame.height;
    //   debugger
    //   this.fireball  = new Rectangle(this.x,this.y-this.dimY/2-dimY/2,dimX, dimY);
    // }
    // if (this.isFireball){
    //   this.fireBallAnimation.step();
    // }
    // if (this.fireBallAnimation.isAtEnd()){
    //   this.isFireball =false;
    //   delete this.fireball;
    // }

  }


  draw(ctx){

    
    //Handle squashed effect
    let penguinDimY = this.dimY;
    let penguinDimX = this.dimX;
    if (this.isSquashed){
      if (!this.squashedAD.isAtEnd()){
        this.squashedAD.go();
        penguinDimY =this.dimY/2;
        penguinDimX = this.dimX*1.3;
      }else {
        this.isSquashed = false;
        this.squashedAD.reset();
      }
    }
    //Wizard
    ctx.drawImage(this.image, this.x-penguinDimX/2, this.y-penguinDimY/2, penguinDimX, penguinDimY )
    // ctx.drawImage(image, this.x, this.y, 30, 40 )


    //Fireball
    // if (this.isFireball){
    //   debugger
    //   ctx.drawImage(this.fireBallAnimation.currentFrame,this.fireball.x-this.fireball.width, this.fireball.y-this.fireball.length, this.fireball.width, this.fireball.length);
    // }
  }
  

  isCollidedWith(other){
    let rect = new Rectangle(this.x, this.y, this.dimX, this.dimY);
    return rect.isCollidedWith(other);
  }

  handleCollision(){
    this.isSquashed = true;
    this.squashedAD.reset();
  }




}
export default Wizard;