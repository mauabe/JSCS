
// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	if(array.length === 1){return callback(array);}
	else return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var counter = 0; 
  for (var k in obj) {
    var innerObj = obj[k];
    if (k === key) {counter += 1;} 
    if (typeof innerObj === 'object') {
        counter += countKeysInObj(innerObj, key);
    } 
  }
	return counter;
}


// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let counter = 0;
  for(let key in obj){
    let innerObj = obj[key];
    if(obj[key] === value){counter += 1;}
    if(typeof innerObj === 'object'){
      counter += countValuesInObj(innerObj, value)
    }
  }
  return counter;
};


// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for(let key in obj){
		//let value = obj[key];
		if(key === oldKey){
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
		}
		if(typeof obj[key] === 'object'){
			obj[key] = replaceKeysInObj(obj[key], oldKey, newKey)
		}
	}
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if (n <= 0) return null;
	//if (n == 0) return [0];
	if (n === 1) return [0, 1];
	var result = fibonacci(n - 1);
  return [...result, result[n-1] + result[n-2]]
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if(n < 0){return null;}
	if (n === 0) {return 0;}
  else if (n === 1) {return 1;}
  else return nthFibo(n - 1) + nthFibo(n - 2);
};


// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	var result = [];
	if(array.length === 0){return result;}
	result.push(array[0].toUpperCase())
	result = result.concat(capitalizeWords(array.slice(1)));
	return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	var result = [];
	if(array.length === 0){return result;}
	result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1))
	result = result.concat(capitalizeFirst(array.slice(1)))
	return result;
};


// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	let sum = 0;
	for(let key in obj){
		if(obj[key] % 2 === 0){
			sum += obj[key];
		}
		if(typeof obj[key] === 'object'){
			sum += nestedEvenSum(obj[key])
		}
	}
	return sum;
};


// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]

var flatten = function(array) {
	// const newArray = [];
	if(array.length === 0){return [];}
	if(Array.isArray(array[0])){
		return flatten(array[0]).concat(flatten(array.slice(1)));;
	}
	return [array[0]].concat(flatten(array.slice(1)));
};