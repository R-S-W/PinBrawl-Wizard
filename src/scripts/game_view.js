
class GameView {

  constructor(game, ctx){
    this.game=  game;
    this.ctx = ctx;


    this.startButton = document.getElementsByClassName('start-button')[0];
    this.titleScreenModal = document.getElementsByClassName('title-screen-modal')[0];
    this.step = this.step.bind(this);

  }

  step(timestamp){
    
    this.game.moveEntities();
    this.game.handleLostEntities();
    this.game.reflectEntitiesOffWalls();
    this.game.draw(this.ctx);
    this.game.checkCollisions();

    if (!this.timeVal) this.timeVal = timestamp;
    if (this.game.entities.length < 12 && timestamp - this.timeVal > 10000){
      this.timeVal =0;
      this.game.addEnemy();
    }

    // this.game.manageLivesBar();

    window.requestAnimationFrame(this.step);
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