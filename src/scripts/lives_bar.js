class LivesBar  {
  constructor(){
    this.livesList = document.getElementsByClassName('lives-list')[0].children;
    this.livesCount = this.livesList.length;
  }
  reset(){
    for (let i = 0; i< this.livesList.length; i++){
      this.livesList[i].classList.remove('lost-life');
    }
    this.livescount = this.livesList.length;
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
    return this.livesCount === 0;
  }
}
export default LivesBar;