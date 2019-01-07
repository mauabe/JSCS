////////////////////////////
//     FIND MISSING
////////////////////////////

// You are given an array of length n containing every number from 0 to n except for one missing number. Find that number!
// Challenge: give this function 0(n) time complexity, 0(1) space complexity

function sumUpTo(n) {
  let sum = 0;
  if (n % 2 === 1) {
    sum += n;
    n --;
  }
  return sum + (n + 1) * (n / 2);
}

function findMissing(array) {
  let min = Math.min.apply(null, array);
  let max = Math.max.apply(null, array);
  let sum = array.reduce(((a, b) => a + b), 0);
  let sumFull = 0;
  // let min = Math.min(...array);
  // let max = Math.max(...array);

    console.log('sum', sum)
    console.log('min', min)
    console.log('max', max)
    console.log('sumFull', sumFull)

  // 

  for(let i = min; i < max; i++){
    sumFull =+ i;
    return sumFull;
  }

  // let sumAll = function(min, max){
  //   if(min ===  max){return min;}
  //   sumFull = max + sumAll(max - 1);
  //   return sumFull;
  // } 
  // sumAll(min, max);
  return sumFull - sum;
}

// findMissingTests() // Uncomment to test this function
function findMissingTests() {
  console.log(findMissing([0, 1, 2, 3, 4, 5]), ' -> 6');
  console.log(findMissing([7, 5, 4, 3, 2, 1, 0]), ' -> 6');
  console.log(findMissing([0, 7, 1, 5, 2, 4, 3]), ' -> 6');
}
