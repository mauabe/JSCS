// Challenge 10
function challenge10() {
  return 5 + '5';
}
// console.log('Challenge 10:', challenge10()); // --> ??


// Challenge 11
function challenge11(x) {
  return 2 * 3 + x;
} 
// console.log('Challenge 11:', challenge11('5')); // --> ??
  
  
// Challenge 12
function challenge12() {
  return true + true;
}
// console.log('Challenge 12:', challenge12()); // --> ??
  

// Challenge 13
function challenge13() {
  return (true && false) + (true || false);
}
// console.log('Challenge 13:', challenge13()); // --> ??
 


// Challenge 14
const redundantArr = [1, 2, 1, 3, 4, 5, 4];
// Using Javascript Set
/*
const newSet = new Set(redundantArr); 
const uniqueArr = Array.from(newSet)
*/

//Using indexOf() callback and filter
const distinct = function(value, index, array){
  return array.indexOf(value) === index;
}
const uniqueArr = redundantArr.filter(distinct)

// Uncomment the line below to test your code
console.log('Challenge 14:', uniqueArr);
// should print 'Challenge 14: [ 1, 2, 3, 4, 5 ]'


// Challenge 15
// Recursive sum
const sumRange = function(n){
  let result = 0;
  if(n = 1){return;}
  result = sumRange(n) + sumRange(n-1);
}


// Uncomment the line below to test your code
console.log('Challenge 15:', sumRange(3));
// should print 'Challenge 15: 6'

// Challenge 16
// Write your code here
// Uncomment the line below to test your code
console.log('Challenge 16:', getLength(['x', 'y', 'z']));
// should print 'Challenge 16: 3'


// Challenge 17
// Write your code here
// Uncomment the line below to test your code
// console.log('Challenge 17:', isEven(5));
// should print 'Challenge 17: false'


// Challenge 18
// Write your code here
// Uncomment the line below to test your code
// console.log('Challenge 18:', multiplier([1, 2, 3], 3));
// should print 'Challenge 18: [ 3, 6, 9 ]'

