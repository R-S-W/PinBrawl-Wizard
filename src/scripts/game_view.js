import { e } from "mathjs";

class GameView {

  constructor(game, ctx){
    this.game=  game;
    this.ctx = ctx;


    this.startButton = document.getElementsByClassName('start-button')[0];
    this.titleScreenModal = document.getElementsByClassName('title-screen-modal')[0];
    this.imageUploadPanel = document.getElementsByClassName('image-upload-panel')[0];
    this.gameOverScreenModal = document.getElementsByClassName('game-over-screen-modal')[0];
    this.gameOverScreenHeader = document.getElementsByClassName('game-over-header')[0];
    this.gameOverScreenSection = document.getElementsByClassName('game-over-section')[0];
    this.resetGameButton = document.getElementsByClassName('restart-button')[0];
    this.step = this.step.bind(this);

    this.numWavesComplete = 0;

    this.handleDrop = this.handleDrop.bind(this);
    this.makeUserImageRef = this.makeUserImageRef.bind(this);
  }

  step(timestamp){
    
    this.game.update();
    this.game.handleLostEntities();
    this.game.reflectEntitiesOffWalls();
    this.game.draw(this.ctx);
    this.game.checkCollisions();

    if (!this.timeVal) this.timeVal = timestamp;
    if (this.game.entities.length < 20 && timestamp - this.timeVal > 8000){
      this.timeVal =0;
      this.game.addEnemy();
    }
    
    if (this.game.isNoEnemies()){
      this.numWavesComplete++;
      this.game.setupEnemies();
    }

    // this.game.manageLivesBar();
    if (this.game.isCompleted()){
      this.gameOverScreenHeader.textContent = this.game.gameOverMessage();
      if (this.numWavesComplete > 0 ){
        let messageStr = `You cleared ${this.numWavesComplete} `;
        messageStr+= (this.numWavesComplete ===1) ?  'wave!' : 'waves!';
        this.gameOverScreenSection.textContent = messageStr;
      }
      this.gameOverScreenModal.classList.remove('hide');
      this.resetGameButton.addEventListener('click', (e)=>{
        this.gameOverScreenModal.classList.add('hide');
        this.game.reset();
        window.requestAnimationFrame(this.step);
      })
    }else{
      window.requestAnimationFrame(this.step);
    }

  }

  start(){
    this.startButton.addEventListener('click', (e)=>{
      this.titleScreenModal.classList.add('hide')
      window.requestAnimationFrame(this.step)
    })

    this.imageUploadPanel.addEventListener('dragenter', stopDefaults, false);
    this.imageUploadPanel.addEventListener('dragleave', stopDefaults, false);
    this.imageUploadPanel.addEventListener('dragover', stopDefaults, false);
    this.imageUploadPanel.addEventListener('drop', stopDefaults , false);  
    this.imageUploadPanel.addEventListener('drop', this.handleDrop, false);
  }

  
  makeUserImageRef(){
    this.userImage = document.getElementsByClassName('user-image')[0];
    this.game.addUserEnemyInfo(this.userImage);
  }
  
  handleDrop(e){
    let dt = e.dataTransfer;
    let files =  dt.files;
    ([...files]).forEach((file)=>{
      let image = document.createElement('img');
      image.classList.add('user-image');
      let src  = URL.createObjectURL(file);
      image.src = src;
      
      let panel = document.getElementsByClassName('image-upload-panel')[0];
      panel.appendChild(image);

      this.makeUserImageRef();
    });
  }
  

  bindKeyHandlers(){
  // Object.keys(GameView.MOVES).forEach(function(k)  {
  //   const move = GameView.MOVES[k];
  //   key(k, function () { ship.power(move); });
  // });

  // key( "z", ()=>{this.game.isLeftPressed = true});
  // key( "/", ()=>{this.game.isRightPressed = true});
  // key( "", ()=>{});

  // key("space", function () { ship.fireBullet(); });
  }
}



const stopDefaults = (e)=>{
  e.preventDefault();
  e.stopPropagation();

}
export default GameView;