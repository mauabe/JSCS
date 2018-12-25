/*
* Given an array of numbers, determine if the mode and mean of the array are equivalent
*
* Caveats:
*     - Math.floor the mean
*     - If there are multiple modes, use the max of the modes
*
* Return true or false
*
*/


function modemean(array) {

}


// USING FOR LOOP
var array = [1, 2, 3,4];
for (var i = 0, sum = 0; i < array.length; sum += array[i++]) {
  return sum
}
function mean {
  var x = sum / array.length;
  return x
}


//USING REDUCE
var sumAll = array.reduce(add, 0);
function add(a, b) {
    return a + b;
}
console.log(sumAll)