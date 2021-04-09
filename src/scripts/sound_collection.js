class SoundCollection {
  constructor(dict){
    this.collection = dict;
    this.size = Object.keys(dict).length;
    
  }

  sample(){
    let ridx = Math.round(Math.random()*(this.size-1));
    return this.collection[Object.keys(this.collection)[ridx]];
  }

  isASongPlaying(){
    let songs = Object.values(this.collection);
    debugger
    for( let i=0; i< songs.length; i++){
      if (songs[i].isPlaying()) return true;
    }
    return false;
  }

  add(k,v){
    this.collection[k] = v;
  }
}
export default SoundCollection