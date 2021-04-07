import {multiply, matrix} from 'mathjs';

export const distance = (ax, ay,bx,by)=>{
  return ((ax-bx)**2+(ay-by)**2)**.5
}

// export const  normalizeVector = (a)=>{
//   let s = 0;
//   a.forEach((el)=>{s+=el**2});
//   s = s**.5;
//   return a.map((el)=>(el/s));
// }


export const makeAngleInBounds = (angle)=>{
  if (angle > Math.PI) return angle - 2*Math.PI;
  else if (angle < -Math.PI) return angle + 2*Math.PI;
  return angle;
}

export const arcTangent = (vector)=>{
  // set theta from -PI to +PI
  let angle = Math.atan(vector[1]/vector[0])
  if (vector[1]>0 && vector[0] < 0) angle+=Math.PI;
  else if (vector[1]< 0 && vector[0]<0) angle-=Math.PI;
  return angle;
}

export const reflectVector = (normalVector, vector)=>{
  let a;
  let b;
  [a,b] = normalVector;
  let reflectionMatrix = matrix([[1-2*a**2, -2*a*b],[-2*a*b, 1-2*b**2]]);
  return   multiply(reflectionMatrix, vector)._data;
}