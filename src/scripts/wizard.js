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
  }

  draw(ctx){
    
    if (key.isPressed('/') || key.isPressed('?')){
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

    ctx.drawImage(this.image, this.x-penguinDimX/2, this.y-penguinDimY/2, penguinDimX, penguinDimY )
    // ctx.drawImage(image, this.x, this.y, 30, 40 )

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