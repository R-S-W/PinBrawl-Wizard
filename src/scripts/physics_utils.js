import {tangentMatrix, normalMatrix,normalizeVector} from './math_utils';
import {add, multiply} from 'mathjs'

export const createElasticCollisionVelocities=(x1,x2,v1,v2)=>{
  // debugger
  const normal = normalizeVector([x1[0]-x2[0],x1[1]-x2[1] ]);
  const N = tangentMatrix(normal);  //because we used normal vector
  const T = normalMatrix(normal);
  const newV1 = add(multiply(T, v1), multiply(N,v2))._data;
  const newV2 = add(multiply(T, v2), multiply(N,v1))._data;
  
  return [newV1, newV2];
}



