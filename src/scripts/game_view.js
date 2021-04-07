
class GameView {

  constructor(game, ctx){
    this.game=  game;
    this.ctx = ctx;

    this.step = this.step.bind(this);

  }

  step(timestamp){
    
    this.game.moveEntities();
    this.game.draw(this.ctx);
    this.game.reflectEntitiesOffWalls();
    this.game.checkCollisions();

    if (!this.timeVal) this.timeVal = timestamp;
    if (this.game.entities.length < 12 && timestamp - this.timeVal > 10000){
      this.timeVal =0;
      this.game.addEnemy();
    }

    window.requestAnimationFrame(this.step);
  }

  start(){
    
    window.requestAnimationFrame(this.step)
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