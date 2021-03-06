//JSCS  Day 5 Challenges - Recursion

////////////////////////////
//     Challenge 1
////////////////////////////

// Repeater
// Modify the function so that it returns a string containing the input character repeated 5 times
// Use recursion!

function repeater(char, n = 5) {
  if (n === 0) return '';
  return char + repeater(char, n-1);
}

/// TAIL end recursion process
function repeater(char, n = 5, str = '') {
  if (n === 0) return '';
  str += char;
  return char + repeater(char, n-1, str);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));// -> 'ggggg'
console.log(repeater('j'));// -> 'jjjjj'


////////////////////////////
//     Challenge 2
////////////////////////////

// Is Even
// Modify the function so that it returns true if a number is even (and false if it's not)
// assume input will be a positive integer
// Use recursion!

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(n) {
  if (n === 0) return true;
  return !isEven(n-1);
}

function isEven(n) {
  if (n < 0) {
    return isEven(-n);
} else if (n === 1) {
    return false;
} else if  (n === 0) {
    return true;
} else {
    return isEven(n - 2);
}
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(isEven(0)); // -> true
console.log(isEven(5)); // -> false
console.log(isEven(10)); // -> true


////////////////////////////
//     Challenge 3
////////////////////////////

// Factorial
// Modify the function so that it returns the factorial of an input number
// Use recursion!
// The factorial of n is the product of all numbers between 1 and n
// Ex: 5! = 5 * 4 * 3 * 2 * 1;

function factorial(n) {
  if (n === 1) {return 1;}
  return n * factorial(n - 1);
}

function factorial(n, product = 1) {
  if (n === 0 || n === 1) {return product;}
  else  return factorial(n - 1, product * n);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1


////////////////////////////
//     Challenge 4
////////////////////////////

// Get Length
// Modify the function so that it returns the length of an array recursively, without using the array.length property
// Use recursion!
// Hint: when you index outside of an array, it returns undefined

const getLength = function(array, i = 0) {
  if (array[i] === undefined) return i;
  return getLength(array, i + 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5


////////////////////////////
//     Challenge 5
////////////////////////////

// POW
// Modify the function so that it returns base to the power of exponent
// Use recursion!
// Ex: pow(5, 3) = 5 * 5 * 5

function pow(base, exponent) {
  if(exponent === 1){return base;}
  return base * pow (base, exponent - 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243

////////////////////////////
//     Challenge 6
////////////////////////////

// Flow
// Modify the function so that it returns the result of running the input number through each function in funcArray, in order
// Use recursion!
// First do it recursively, if you have time at the end try using a reduce function

//backwards solution
function flow(input, funcArray, i = 0) {
  if (funcArray[i] === undefined) return input;
  return flow(funcArray[i](input), functArray, i + 1);
}

//does not work:
// function flow(input, funcArray, i = 0){
//   if (funcArray[i] === undefined){return input;}
//   else return funcArray[i](flow(input, funcArray,i + 1))
// }


// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7



////////////////////////////
//     Challenge 7
////////////////////////////

// Fibinacci
// Modify the function so that it returns the nth Fibinacci number. Try not to look back at the slides!
// Use recursion!
// Fibinacci a reference: [1, 1, 2, 3, 5, 8, 13, ...]

function fib(n) {
  if (n === 0) {return 1;}
  else if (n === 1) {return 1;}
  else return fib(n - 1) + fib(n - 2);
};

// To check if you've completed the challenge, uncomment this code!
console.log( fib(1) ); // -> 1
console.log( fib(2) ); // -> 1
console.log( fib(7 )); // -> 13

////////////////////////////
//     Challenge 8
////////////////////////////

// Heads or Tails
// Use recursion!
// Modify the function so that it returns all possible outcomes of n games of heads or tails as an array of arrays

function headsOrTails(n, result = [], coin = [['heads'],['tails']]) {
  if(n === 0) { return result;} 
  if(n === 1) {
    result.push([coin[0], coin[1]])
  }
    else {
      result = coin;
      result.forEach(elem => {
      let newArray = result.slice(1);
      let copy = coin.slice();
      copy.push(elem);
      headsOrTails(newArray, coin, result);
    });
  }
  return result;
  }

  for(let i = 0; i < n; i++){
    for(let j = 0; j < Math.pow(2, n); j++){
      result[i][j] =+ (coin[headsOrTail(i)], coin[headsOrTail(j)])
    }
  }

  return result;
 }



function headsOrTails(array, coin = [], result = []){
  if (!array.length) {
      result.push(coin);
  } else {
      array[0].forEach(elem => {
          let newArray = arrays.slice(1);
          let copy = coin.slice();
          copy.push(elem);
          headsOrTails(newArray, coin, result);
      });
  }
  return result;
}






// To check if you've completed the challenge, uncomment this code!
// console.log(function headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(function headsOrTails(3));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

////////////////////////////
//     Challenge 9
////////////////////////////

// Combos of Any length
// Use recursion!
// Modify this function so that it returns all combinations of the elements of arr as an array of arrays

function getAllCombos(arr) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(function getAllCombos(['a', 'b'])); // -> [['ab'], ['a'], ['b'], []]
// console.log(function getAllCombos(['a', 'b', 'c']));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]
