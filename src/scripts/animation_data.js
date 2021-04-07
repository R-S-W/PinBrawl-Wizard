

class AnimationData {
  constructor(numFrames){
    this.numFrames = numFrames;
    this.frameIdx = 0;
    this.itr = 1;
  }

  go(){
    if (  (this.itr ===1 && 0<= this.frameIdx && this.frameIdx < this.numFrames)
      || (this.itr === -1 && 0 < this.frameIdx && this.frameIdx <= this.numFrames)
    ){
      this.frameIdx += this.itr;
    }
  }
  flip(){
    this.itr *=-1;
  }

  switchToIncrement(){this.itr = 1;}

  switchToDecrement(){this.itr = -1;}

  reset(){
    this.frameIdx = 0;
    this.itr=1;
  }

  fractionCompleted(){
    return this.frameIdx/this.numFrames;
  }
}

export default AnimationData;