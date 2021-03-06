import Entity from './entity'
import AnimationData from './animation_data';
import { normalizeVector, distance} from './math_utils';

class Enemy extends Entity{
  constructor(x,y,vx,vy,dimX,dimY,imageURL, soundNames, targetPos){
    super(x,y,vx,vy,dimX,dimY );
    this.vxi = vx;
    this.vyi = vy;
    this.isImage = imageURL;
    if (this.isImage){
      this.image = new Image();
      this.image.src = imageURL;//'./src/images/creeper.png';
    }
    this.squishAD= new AnimationData(45, 'reverse');

    this.soundNames = soundNames;

    this.targetPos = targetPos;
    this.targetForceMagnitude = .00007;

  }

  draw(ctx){
    if (this.isImage){
      this.squishAD.go();
      let squishNumber = Math.round(this.squishAD.fractionCompleted());
      let enemyY = this.y - .5*this.dimY* squishNumber;
      let enemyDimY = this.dimY * (.7 + .3*squishNumber); 

      
      let enemyDimX = (-.35*squishNumber +1+.35) * this.dimX;

      ctx.drawImage(this.image, this.x-enemyDimX/2, enemyY, enemyDimX, enemyDimY);
    }else{
      super.draw(ctx);
    }
  }

  move(){


    // influence of target force
    let vec = [this.targetPos[0]-this.x,   this.targetPos[1]-this.y];
    let vecDist = distance(vec[0],vec[1],0,0);
    let TFUnitVector = normalizeVector(vec);
    // debugger
    this.vx += TFUnitVector[0]*this.targetForceMagnitude*vecDist;
    this.vy += TFUnitVector[1]*this.targetForceMagnitude*vecDist;

    this.x+=this.vx;
    this.y+=this.vy;


  }
}
export default Enemy;