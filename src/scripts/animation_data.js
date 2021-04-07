

class AnimationData {
  constructor(numFrames, type){
    this.numFrames = numFrames;
    this.frameIdx = 0;
    this.itr = 1;
    this.isAutoReset = type === 'reset';
    this.isAutoReverse = type === 'reverse';
  }

  go(){
    if (  (this.itr ===1 && 0<= this.frameIdx && this.frameIdx < this.numFrames)
      || (this.itr === -1 && 0 < this.frameIdx && this.frameIdx <= this.numFrames)
    ){
      this.frameIdx += this.itr;
    }
    
    if (this.isComplete() && this.isAutoReset) this.reset();
    else if (this.isComplete() && this.isAutoReverse) this.reverse(); 
  }
  reverse(){
    this.itr *=-1;
  }

  switchToIncrement(){this.itr = 1;}

  switchToDecrement(){this.itr = -1;}

  reset(){
    this.frameIdx = 0;
    this.itr=1;
  }

  isComplete(){return (this.isAtStart() || this.isAtEnd())}

  isAtStart(){return this.frameIdx === 0;}

  isAtEnd(){return this.frameIdx === this.numFrames;}

  fractionCompleted(){
    return this.frameIdx/this.numFrames;
  }
}

export default AnimationData;