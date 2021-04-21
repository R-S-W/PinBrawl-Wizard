
/*
Helper class used in .draw() function to help animate entities.
Entities, Pinball flippers, and the Wizard class move and change shape with each
iteration of game.step(), each instance being a 'frame.'
These objects do not have gifs or an array of pictures to flip through, so there 
are no actual frames of animation, just commands in .draw() that transform the 
entity's png or canvas shape.  These commands cycle through transformations to 
complete one 'cycle' of animation.

AnimationData is used in the entity's .draw() function to create animation cycles 
with more ease.  This class has the number of 'frames' and a 'frame index,' the 
latter representing the current step in the animation cycle.
*/
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