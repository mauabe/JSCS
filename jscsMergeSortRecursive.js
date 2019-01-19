const mergeSort = function(array) {
  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle); //first half of array
  let right = array.slice(middle); // second hald of array
  //var result = []; //new Array(left.length + right.length); //sorted array

  if(array.length <= 1){return array}; //array with single item or empty

  function mergeHelper(left, right){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
      if(left[i] < right[j]){
        result.push(left[i]);
        i++;
      }
      else{
        result.push(right[j]);
        j++;
      }
    }  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  return mergeHelper(mergeSort(left), mergeSort(right));
};
