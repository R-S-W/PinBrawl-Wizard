
class GameView {

  constructor(game, ctx){
    this.game=  game;
    this.ctx = ctx;


    this.startButton = document.getElementsByClassName('start-button')[0];
    this.titleScreenModal = document.getElementsByClassName('title-screen-modal')[0];
    this.gameOverScreenModal = document.getElementsByClassName('game-over-screen-modal')[0];
    this.gameOverScreenHeader = document.getElementsByClassName('game-over-header')[0];
    this.resetGameButton = document.getElementsByClassName('restart-button')[0];
    this.step = this.step.bind(this);

  }

  step(timestamp){
    
    this.game.moveEntities();
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
      this.game.setupEnemies();
    }

    // this.game.manageLivesBar();
    if (this.game.isCompleted()){
      this.gameOverScreenHeader.textContent = this.game.gameOverMessage();
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
export default GameView;