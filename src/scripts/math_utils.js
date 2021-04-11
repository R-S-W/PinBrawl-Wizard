import {multiply, matrix, rotationMatrix} from 'mathjs';

export const distance = (ax, ay,bx,by)=>{
  return ((ax-bx)**2+(ay-by)**2)**.5
}

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


export const normalizeVector = (vec)=>{
  let mag = 0;
  vec.forEach((e)=>{mag+= e**2});
  mag = mag**.5;
  return multiply(vec,1/mag);
}


export const selfDyad2D = (vec)=>{
  let a = vec[0];
  let b=  vec[1];
  return matrix([[a**2, a*b],[a*b, b**2]]);
}

export const tangentMatrix=(vec)=>{
  let v = normalizeVector(vec);
  return selfDyad2D(v);
}
export const normalMatrix=(vec)=>{
  let v =  multiply(rotationMatrix(Math.PI/2),normalizeVector(vec))._data;
  return selfDyad2D(v);
}

