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
let dx = 10;
let dy = -15;
let  stepStart;


let ballRadius = 10;

//STOP Save this into a branch this is sick!

const step = (timestamp)=>{
  if (!stepStart){
    stepStart = timestamp;
  }
  const t = timestamp - stepStart;
  
  if (t < 500000){ 
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall(t,x,y);
    reflectEntities(x,y,[ballRadius,ballRadius]);
    x+=dx;
    y+=dy;
    window.requestAnimationFrame(step);
  }

}





const drawBall = (t,x,y)=>{
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0, Math.PI*2);
  ctx.fillStyle  = '#0095DD';
  ctx.fill();
  ctx.closePath();
}


const reflectEntities = (x,y,entityDim)=>{
  let ex = entityDim[0]/2;
  let ey= entityDim[1]/2;
  if ( (y < 0 + ey) || (y > canvas.height - ey) )    dy = -dy;
  if ( (x<0 + ex)  || (x>canvas.width - ex) ) dx = -dx;
}


window.requestAnimationFrame(step)