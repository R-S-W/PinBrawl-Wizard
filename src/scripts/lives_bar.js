class LivesBar  {
  constructor(){
    this.livesList = document.getElementsByClassName('lives-list')[0].children;
    this.livesCount = this.livesList.length;
  }
  reset(){
    this.livesCount = this.livesList.length;
    console.log(`This.livescount: ${this.livesCount},${this.livesList.length}`)
    for (let i = 0; i< this.livesList.length; i++){
      this.livesList[i].classList.remove('lost-life');
    }
  }
  removeLife(){
    for (let i = this.livesList.length-1; i>=0 ; i--){
      if (!this.livesList[i].classList.contains('lost-life')){
        this.livesList[i].classList.add('lost-life');
        break;
      }
    }
    if (this.livesCount >=0) this.livesCount--;
  }
  isEmpty(){
    console.log(`In .isEmpty(), livesCount = ${this.livesCount}`)
    return this.livesCount === 0;
  }
}
export default LivesBar;