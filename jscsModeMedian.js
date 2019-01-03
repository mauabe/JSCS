//JSCS DAY 6 MODE & MEDIAN

////////////////////////////
//     FIND MODE
////////////////////////////

// Given an array, return its mode (the number that appears most often)
// Assume there is never a tie (don't worry about [1, 1, 1, 2, 3, 3, 3], for example, since there's a tie between 1 and 3)

function mode(arr) {
	let counts = {};
  
  // fill counts
  for (let elem of arr) {
    if (!counts[elem]) counts[elem] = 0;
    counts[elem] ++;
  }
  
  for (let i = 0; i < arr.length; i ++) {
    let element = arr[i];
    
  }
  
  let mode;
  let most = 0;
  
  // compare each key in counts to current mode
  for (let elem in counts) {
    if (counts[elem] > most) {
      mode = elem;
      most = counts[elem];
    }
  }
  return mode;
}

function mode2(arr) {
  let sorted = arr.sort((a, b) => a - b);
  
  let mode;
  let most = 0;
  
  let curr;
  let currCount = 0;
  
  for (let i = 0; i < sorted.length; i ++) {
    if (sorted[i] === curr) {
      currCount ++;
    } else {
      curr = sorted[i];
      currCount = 1;
    }
    if (currCount > most) {
      most = currCount;
      mode = curr;
    }
  }
  return mode;
}

function mode3(arr) {
  let mode;
  let most = 0;
  for (let i = 0; i < arr.length; i ++) {
    let curr = arr[i];
    let currCount = 0;
    for (let j = 0; j < arr.length; j ++) {
      if (arr[i] === arr[j]) {
        currCount ++;
      }
    }
    if (currCount > most) {
      most = currCount;
      mode = curr;
    }
  }
  return mode
}


// n^2 * logn

// nlogn * n
function mode4(arr){
   return arr.sort((a,b) =>
         arr.filter(v => v===a).length
       - arr.filter(v => v===b).length
   ).pop();
}

// Extension: solve this in 0(n) time

function modeTests() {
  console.log(mode3([1,2,2,1,1,3, 7, 3]), ' -> 1');
  console.log(mode3([1]), '1');
  console.log(mode3([2, 2, 2, 2, 3, 3, 3]), ' -> 2');
}

// modeTests() // uncomment to test!

////////////////////////////
//     FIND MEDIAN
////////////////////////////


// Given an array, return its median (the element whose value falls in the middle of all other values in the array)
// Ex: [1, 2, 3, 4, 5], median is 3
// Ex: [10, 4, 7, 6, 1], median is 6

function median(array) {
	let arr = array.sort(function(a, b) {return a - b})
  if (arr.length % 2 === 1) return arr[Math.floor(arr.length / 2)];
  return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
}

function medianTests() {
  console.log(median([1, 2, 3, 4, 5]), ' -> 3');
  console.log(median([10, 4, 7, 6, 1]), ' -> 6');
  console.log(median([2, 2, 2, 2, 3, 3, 3]), ' -> 2');
  console.log(median([2, 2, 2, 2, 3, 3, 3, 3]), ' -> 2.5');
}

// medianTests() // uncomment to test!
