JSCS Unit3


// Parameters vs. Arguments

// a and b are parameters
function addNums(a, b) {
  return a + b;
}

// 1 and 2 are arguments
const c = addNums(1, 2);
console.log(c);
const d = addNums(1, 2, 3); // That's too many!
console.log(d);
console.log(c === d)


// The arguments keyword 

function noArgs() {
  console.log(arguments);

  // Can access data like an array
  console.log(arguments[0]);

  // Array methods
  console.log('Array', Object.getOwnPropertyNames([].__proto__));

  // arguments methods
  console.log('arguments',Object.getOwnPropertyNames(arguments.__proto__));
}

const noArgsArrow = () => {
  console.log(arguments);
}

// noArgs();
noArgs(1);
noArgs(1, 2);
noArgsArrow();

// Rewrite addNums to take an unknown number of arguments

function addNums() {
//   // Why can't I use reduce?
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addNums(1, 2, 3)); 
console.log(addNums(1, 2, 3, 4, 5)); 


// Function Methods

// Properties of a function object 
function fun() {
};

const fun2 = () => {
}
console.log(Object.getOwnPropertyNames(fun.__proto__));
console.log(Object.getOwnPropertyNames(().__proto__))

call()

// Remember constructors?
function Product(name, price) {
  this.name = name;
  this.price = price;
  console.log(this);
}

const produce = new Product('staples', 14);
const produce2 = Object.create(Product)
console.log(produce2);
console.log(produce);
function Product(name, price) {
  return {
    name: name,
    price: price
  }
}

function Food(name, price) {
  // What is this?
  console.log(this);
  Product.call(this, name, price);
  // this.name = name;
  // this.price = price;
  this.category = 'food';
}

const cheese = new Food('cheese', 5);
console.log(cheese.name);

// apply() 

// Return a function that console.logs a callback function with an
// unknown number of arguments

function funFactory(callback) {
  return function() {
    // 'this' does not matter
    console.log(callback.apply(null, arguments));
    // Use the ... spread operator
    console.log(callback(...arguments));
  }
}

function fun1(a, b) {
  return a + b;
}

function fun2(a, b, c, d) {
  return a * b * c * d;
}

function fun3() {
  return 'Coding is fun!';
}

const fun1Apply = funFactory(fun1);
fun1Apply(2, 3);

const fun2Apply = funFactory(fun2);
fun2Apply(1, 2, 3, 4);

const fun3Apply = funFactory(fun3);
fun3Apply();
funFactory(fun1)(1, 2);
funFactory(fun2)(1, 2, 3, 4);
funFactory(fun3)();

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};

console.log(obj3);


function getMax() {
  return Math.max.apply(null, arguments);  
}

function getMax() {
  return Math.max(...arguments);
}
console.log(getMax(1, 5, 7)); 


// Arrow Functions

function sum(a, b) {
  return a + b;
}

const sumArrow = (a, b) => a + b;

console.log(sum(1, 2));
console.log(sumArrow(1, 2));


// Rest operator

function sum(...nums) {
  console.log(nums);
  // nums is an array!
  return nums.reduce((sum, num) => {
    console.log('sum', sum);
    return sum + num;
  });
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));

// 6 digit split: returns sum of all the digits of a 6 digit number

function addDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = (num - num % 10) / 10;
  }
  return sum;
}

function sixDigitSum(num) {
  let sum = 0;
  const numStr = num.toString();
  console.log(numStr);
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
};

console.log(sixDigitSum(123456));

function intersection(arrays) {
  console.log(arrays);
  return arrays.reduce(function (acc, curr) {
    return acc.filter(function (el) {
      return curr.indexOf(el) > -1
    })
  })
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20, 5]]));
output = [5, 15]

// Live Coding and Q & A

function reverseString(str) {
}

//Uncomment the line below and click "run" to test your code
// console.log('Challenge 1:', reverseString("codesmith prep") === "perp htimsedoc" ? "Correct!" : "Try again!");
// console.log(reverseString('reverse me!'));

// Wait I thought a string was a primitive?
// console.log(Object.getOwnPropertyNames('hi'.__proto__));




// Draw a stair case (right to left) of n height
function drawStairs(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
  }
}

// drawStairs(5) 
// '  *'
// ' **'
// '***'



// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(arrVals, arrCallbacks) {
  const mapObj = {};

  arrVals.forEach(val => {
    mapObj[val] = [];
    arrCallbacks.forEach(cb => {
      mapObj[val].push(cb(val));
    })
  });

  // for(let i = 0; i < arrVals.length; i++){
  //   mapObj[arrVals[i]] = []; 
  //   for(let j = 0; j < arrCallbacks.length; j++){
  //     const result = arrCallbacks[j](arrVals[i]); 
  //     mapObj[arrVals[i]].push(result);
  //   }
  // }
  return mapObj;
}

const double = a => 2 * a;
const half = a => a / 2;
const plusTen = a => a + 10;

const values = [1, 2, 3];
const callbacks = [double, half, plusTen];

const output = multiMap(values, callbacks);
console.log(output);
output = {
 1: [2, 0.5, 11],
 2: [4, 1, 12],
 3: [6, 1.5, 13]
}

