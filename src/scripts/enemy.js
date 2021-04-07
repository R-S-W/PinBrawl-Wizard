import Entity from './entity'
import AnimationData from './animation_data';

class Enemy extends Entity{
  constructor(x,y,vx,vy,dimX,dimY, imageURL, soundNames){
    super(x,y,vx,vy,dimX,dimY );
    this.isImage = imageURL;
    if (this.isImage){
      this.image = new Image();
      this.image.src = imageURL;//'./src/images/creeper.png';
    }
    this.squishAD= new AnimationData(45, 'reverse');

    this.soundNames = soundNames;

  }

  draw(ctx){
    debugger
    if (this.isImage){
      this.squishAD.go();
      let squishNumber = Math.round(this.squishAD.fractionCompleted());
      let enemyY = this.y - .5*this.dimY* squishNumber;
      let enemyDimY = this.dimY * (.7 + .3*squishNumber); 

      
      let enemyDimX = (-.35*squishNumber +1+.35) * this.dimX;

      ctx.drawImage(this.image, this.x, enemyY, enemyDimX, enemyDimY);
    }else{
      super.draw(ctx);
    }
  }
}
export default Enemy;