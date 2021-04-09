import "./styles/index.scss";
import Game from './scripts/game'
import GameView from './scripts/game_view'
import Entity from './scripts/entity';


document.addEventListener("DOMContentLoaded", ()=>{

  const game = new Game();
  
  var canvas = document.getElementById('game-canvas');
  canvas.width = game.DIM_X;
  canvas.height = game.DIM_Y;
  
  var ctx = canvas.getContext('2d');

  // let e = new Entity(canvas.width/2, canvas.height/2, 2,2, 10,10);
  // e.draw(ctx);

  
  let gameView = new GameView(game, ctx);
  gameView.start();
  
  
})
