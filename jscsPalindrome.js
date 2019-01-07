
////////////////////////////
//     PALINDROME
////////////////////////////

// PALINDROME

// Modify the function so that it returns true if string is a palindrome (the string is the same forward and backwards)
// Otherwise, should return false
// The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
// Ignore capitalization


// Hint: look up how to use regex in JS - specifically how to rip away all characters that aren't letters

function palindrome(string) {
//  return string = string.split('').reverse().join('');
  var str = string.toLowerCase().replace(/\s/g, "");
  if(str.length === 0 || str.length === 1){return true;}
  else if(str[0] === str[str.length -1 ]){
    return palindrome(str.slice(1, str.length - 1))
    }
  return false;
}

function palindromeTests() {
  console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna"), ' -> true');
  console.log(palindrome("llama mall"), ' -> true');
  console.log(palindrome("jmoney"), ' -> false');
}

// palindromeTests() // uncomment to check code!


////////////////////////////
//     SORT
////////////////////////////


// implement your own function to sort an array
// What is its time complexity?
// Try implementing merge or quick sort

function sort(array) {

}

function sortTests() {
  console.log(sort([1, 2, 3, 4, 5]), ' -> [1, 2, 3, 4, 5]');
  console.log(sort([10, 4, 7, 6, 1]), ' -> [1, 4, 6, 7, 10]');
  console.log(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');
}

// sortTests() // uncomment to test!

////////////////////////////
//     Shuffle
////////////////////////////

// implement your own function to randomize an array - each element should have an equal chance of landing in any spot
// What is its time complexity?

function shuffle(array) {

}

function shuffleTests() {
  console.log(shuffle([1, 2, 3, 4, 5]), ' -> ?');
  console.log(shuffle([10, 4, 7, 6, 1]), ' -> ?');
  console.log(shuffle([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> ?');
}

// shuffleTests() // Determine a way to test this function!

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
