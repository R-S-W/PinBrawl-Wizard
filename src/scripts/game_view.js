
class GameView {

  constructor(game, ctx){
    this.game=  game;
    this.ctx = ctx;

    this.step = this.step.bind(this);

  }

  step(timestamp){
    
    this.game.moveEntities();
    this.game.draw(this.ctx);
    this.game.reflectEntities();
    this.game.checkCollisions();

    if (!this.timeVal) this.timeVal = timestamp;
    if (timestamp - this.timeVal > 10000){
      this.timeVal =0;
      this.game.addEnemy();
    }

    window.requestAnimationFrame(this.step);
  }

  start(){
    
    window.requestAnimationFrame(this.step)
  }
}
export default GameView;