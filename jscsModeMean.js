/*
* Given an array of numbers, determine if the mode and mean of the array are equivalent
* Caveats:  - Math.floor the mean
*           - If there are multiple modes, use the max of the modes
* Return true or false
*/
let mean = 0; //mean = average
let mode = 0; //mode = value that appears more often

const findMean = function(array){
  let sum = array.reduce(((a, b) => a + b), 0);
  mean = Math.floor(sum / array.length);
  return mean;
}

const findMode = function(array){
  const storage = {};
  for (let i = 0; i < array.length; i++){
    if(!storage[array[i]]){storage[array[i]] = 1;}
    else {storage[array[i]] += 1;}
  }
  let mostFreq = 0;
  const modesArr = [];
  for (let key in storage){
    if (storage[key] > mostFreq){
      mostFreq = storage[key];
      mode = key;
    }
    else if (storage[key] === mostFreq){
      modesArr.push(key);
      modesArr.sort((a, b) => b - a);
      //mostFreq = storage[key];
      mode = modesArr[0];
    }
  }
  return parseInt(mode);
}

const modeMean = function(array) {
  if(mean === mode){return true;}
  else return false;
}

/* 
//USING FOR LOOP
const mean = function(array){
  let sum = 0;
  let x = sum / array.length;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
    return sum;
  }
  return x;
}
//USING REDUCE
let sumAll = array.reduce((a, b) => {return a + b;}, 0);
const mean = Math.floor(sumAll / array.length)
*/