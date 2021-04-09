

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
    
    if (this.isAtStartOrEnd() && this.isAutoReset) this.reset();
    else if (this.isAtStartOrEnd() && this.isAutoReverse) this.reverse(); 
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

  isAtStartOrEnd(){return (this.isAtStart() || this.isAtEnd())}

  isAtStart(){return this.frameIdx === 0;}

  isAtEnd(){return this.frameIdx === this.numFrames;}

  fractionCompleted(){
    return this.frameIdx/this.numFrames;
  }
}

export default AnimationData;