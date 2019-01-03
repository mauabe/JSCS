// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// Challenge 1
function addTwo(num) {
 return num + 2;
}
// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
 return word + 's';
}
// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  } 
return output;
}
console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEachFunction(array, callback) {
 let output = [];
 array.forEach(function(element) {
   output.push(callback(element));
  })
  return output;
};

// see for yourself if your forEach works!
console.log(forEach([1,2,3], addTwo));

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const output = [];
  array.forEach(function(element) {
    output.push(callback(element));
  })
return output;
}
console.log(mapWith([1,2,3], addTwo));


//Extension 2
function reduce(array, callback, initialValue) {
  let result = initialValue;
  for (let i = 0; i < array.length; i++){
    result = callback(result, array[i]);
  }
  return result;
}

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0));

  
//Extension 3
// Tricky: Create and array like of arguments; 
// Flatten and place each value in an object storage; 
// Compare the lenght of arguments with number or items in storage: if they match, push into result array
//  NOTE: It assumes values are numbers, so parseInt keys;
//  It also assumes there are not repeat values in each array in arguments; 
//  It also assumes the arrays in arguments are valid.
// BONUS: Used Array.prototype.slice.call(arguments), which is so very cool.


function intersection(arrays) {
  const storage = {};
  const result = [];

  const args = Array.prototype.slice.call(arguments);
  //const merged = [].concat.apply([], args);
  //console.log('this is args:', args);

  let flat = args.reduce((a, b) => a.concat(b), [])
  // console.log('this is flat:', flat)

  flat.forEach(elem => {
    if (!storage[elem]){storage[elem] = 1;}
    else storage[elem] += 1;
  })
  // console.log('this is storage: ', storage)
  // console.log('this is arguments.length:', arguments.length)

  for(let key in storage){
    if(storage[key] === arguments.length){
      result.push(parseInt(key))
    }
  }
  return result;
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


//Extension 4
function union(arrays) {
  let flat = arrays.reduce((a, b) => a.concat(b), []);
  let result = [... new Set(flat)];
  return result;
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


//Extension 5
function objOfMatches(array1, array2, callback) {
  const storage = {};
  //   if(array1.forEach(elem => !array2.includes(elem))){
  //     array3.push(elem);
  //   }
  let newArray = array1.filter(elem => array2.indexOf(elem) === -1);
  newArray.forEach(elem => storage[elem] = elem);
   
  for (let key in storage){
    callback(storage[key]);
  }
  return storage;
}
// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const storage = {};
  for(let i = 0; i <arrVals.length; i++){
    let newArray = [];
    storage[arrVals[i]] = newArray;
    for(let j = 0; j < arrCallbacks.length; j++){
      storage[arrVals[i]].push(arrCallbacks[j](arrVals[i]))
    }
  }
  return storage;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
