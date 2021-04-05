import "./styles/index.scss";

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.rect(20, 40, 30, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*.45, false);
ctx.fillStyle = "green";
// ctx.strokeStyle = 'green';
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();




let x = canvas.width/2;
let y = canvas.height - 30;
let dx = 4;
let dy = -10;
let  stepStart;

let runGame = true;


let ballRadius = 10;


let paddleHeight = 10;
let paddleWidth = 75;
let paddleX= (canvas.width - paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;
let  dxPaddle = 7;




let brickRowCount =3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks = [];
for (let i = 0; i< brickRowCount; i++){
  bricks[i] = [];
  for (let j = 0; j< brickColumnCount; j++){
    bricks[i][j] = {x:0,y:0};
  }
}




const step = (timestamp)=>{
  if (!stepStart){
    stepStart = timestamp;
  }
  const t = timestamp - stepStart;
  
  if (t < 500000){ 
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall(t,x,y);
    reflectEntities(x,y,[ballRadius,ballRadius]);
    x+=dx;
    y+=dy;
    if (runGame) window.requestAnimationFrame(step);


    if(rightPressed && paddleX + dxPaddle< canvas.width-paddleWidth) paddleX += dxPaddle;
    else if (leftPressed && paddleX- dxPaddle > 0) paddleX-=dxPaddle;
    drawPaddle();
    drawBricks();

  }

}








const drawBall = (t,x,y)=>{
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0, Math.PI*2);
  ctx.fillStyle  = '#0095DD';
  ctx.fill();
  ctx.closePath();
}


const drawPaddle = ()=>{
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD"
  ctx.fill();
  ctx.closePath();
}

const drawBricks = ()=>{
  for (let c = 0; c< brickColumnCount; c++){
    for (let r =0; r< brickRowCount; r++){
      var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
      var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}

const reflectEntities = (x,y,entityDim)=>{
  let ex = entityDim[0]/2;
  let ey= entityDim[1]/2;
  if ( (y < 0 + ey) )    dy = -dy;
  else if (y > canvas.height - ey) {
    y = 20;
    alert("GAME OVER");
    document.location.reload();
    // window.cancelAnimationFrame(frame);
    runGame = false;

  }
  if ( (x<0 + ex)  || (x>canvas.width - ex) ) dx = -dx;
}


const handleKeyDown  = (e)=>{
  if (e.key == 'Right' || e.key == 'ArrowRight'){
    rightPressed =true;
  }
  if (e.key ==='Left' || e.key === 'ArrowLeft') leftPressed = true;
}

const handleKeyUp = (e)=>{
  if (e.key == 'Right' || e.key == 'ArrowRight'){
    rightPressed =false;
  }
  if (e.key ==='Left' || e.key === 'ArrowLeft') leftPressed = false;
}





document.addEventListener('keydown', handleKeyDown, false);
document.addEventListener('keyup', handleKeyUp, false);

let frame = window.requestAnimationFrame(step)