class Animation {

  constructor(imageURLs, {type, framesToImgIndices} = {} ){
    /*
    Normally, the class assumes you should animate from the first image to 
    the last image in order of imageURLs. framesToImgIndices is an array that 
    maps the frames to what index in the this.imageList it should display, 
    */

    this.imageList = imageURLs.map((url)=>{
      let image = new Image();
      image.src = url;
      return image;
    });
    this.itr = 1;
    this.frameIdx = 0;
    this.isAutoReset = type === 'reset';
    this.isAutoReverse = type === 'reverse';
    
    
    if (framesToImgIndices){
      this.framesToImgIndices = framesToImgIndices;
      this.numFrames = this.framesToImgIndices.length;
      // if (framesToImgIndices.length === this.numFrames){
      // }else{
      //   this.framesToImgIndices = [];
      //   let idx;
      //   for (let i = 0; i< this.numFrames; i++){
      //     idx = Math.round(i*framesToImgIndices.length / this.numFrames);
      //     this.framesToImgIndices.push(framesToImgIndices[idx]);
      //   }
      // }
    }else{
      this.numFrames = this.imageURLs.length;
      this.framesToImgIndices =Array.from(Array().keys(this.numFrames));
    }

    this.currentFrame = this.getFrame(0);


  }

  

  step(){
    if (  (this.itr ===1 && 0<= this.frameIdx && this.frameIdx < this.numFrames)
      || (this.itr === -1 && 0 < this.frameIdx && this.frameIdx <= this.numFrames)
    ){
      this.frameIdx += this.itr;
      this.currentFrame = this.getFrame(this.frameIdx);
    }
    
    if (this.isAtStartOrEnd() && this.isAutoReset) this.reset();
    else if (this.isAtStartOrEnd() && this.isAutoReverse) this.reverse(); 


  }

  getFrame(ind){
    return this.imageList[this.framesToImgIndices[ind]];
  }

  setFrame(ind){
    this.currentFrame = this.getFrame(ind);
  }
  


  reset(){
    this.frameIdx = 0;
    this.itr=1;
    this.currentFrame = this.getFrame(0);

  }


  isAtStartOrEnd(){return (this.isAtStart() || this.isAtEnd())}

  isAtStart(){return this.frameIdx === 0;}

  isAtEnd(){return this.frameIdx === this.numFrames;}


  fractionCompleted(){
    return this.frameIdx/this.numFrames;
  }
}
export default Animation;