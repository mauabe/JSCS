// DAY 6 Challenge

// Challenge 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// const arr10 = [0,1,2,3,4,5,6,7,8,9,10];

// write a function that will find the sum of all the multiples of 3 or 5
// below some input n and return that sum.

function sumMultiples3Or5(n) {
  const array = [];
  for(let i = 1; i < n; i++){
    array.push(i);
  }
  const arr3 = array.filter(elem => elem % 3 === 0);
  console.log(arr3);

  const arr5 = array.filter(elem => elem % 5 === 0);
  console.log(arr5);

  return arr3.reduce((a,b) => a + b) + arr5.reduce((a,b) => a + b);

}
console.log(sumMultiples3Or5(10)) //23;
console.log(sumMultiples3Or5(11)) //33;


// Challenge 2

// given 2 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in both arrays
// duplicates are only counted once;
// for example == given the following input
  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];

// your output would be [ 12, 'ferret', 'dog']

// if there are no common numbers or strings return []"

function commonElements(array1, array2){
  const result = [];
  const hash = {};

  // create hash object storage:
  for(let elem of array1){
    if(!hash[elem]){
      hash[elem] = 1;
    } else hash[elem] += 1;
  }

  //compare with array2:
  for(let item of array2){
    if(hash[item]){
      result.push(item);
    }
  }
  return [...new Set(result)];
}

//TESTING:
var arr1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var arr2  = [15,9,9,'ferret',9,26,12,12,'dog'];
console.log(commonElements(arr1, arr2))


// challenge: modify commonElements to take in 3 arrays and return only elements that all 3 have

function commonElements3(array1, array2, array3){
  // const result = [];
  let newArray =  array1.filter(elem => array2.includes(elem));
  return [...new Set(newArray.filter(el => array3.includes(el)))];
}

//TESTING:
const arr1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
const arr2  = [15,9,9,'ferret',9,26,12,12,'dog'];
const arr3 =  [12,'ferret','dog'];
console.log(commonElements3(arr1, arr2, arr3));
