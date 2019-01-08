////////////////////////////
//     SORT
////////////////////////////


// implement your own function to sort an array
// What is its time complexity?
// Try implementing merge or quick sort

function qSort(array){
  if(array.length < 2){return array;}
  let pivot = array[0];
  let lower = [];
  let higher = [];

  for(let i = 1; i < array.length; i++){
    if(array[i] < pivot){
      lower.push(array[i]);
    } else {
      higher.push(array[i])
    }
  }
  return qSort(lower).concat(pivot, qSort(higher));
}

// not working on larger numbers //
function qSort2(array, left, right) {
  if(array.length < 2){return array;} 
  // let pivot = 0;
  left = left || 0;
  right = right || array.length - 1;
  
  var pivot = Math.floor((left + right) / 2 );

  while (left <= right){
    while (array[left] < array[pivot]){
      left += 1;
    }
    while(array[pivot] < array[right]){
      right -= 1;
    }
    if (left <= right){
      [array[left], array[right]] = [array[right], array[left]]
      left += 1;
      right -= 1;
    }
  }
    
  if(left < pivot - 1) {
    qSort2(array, left, pivot - 1);
  }
  if(right > pivot) {
    qSort2(array, pivot, right);
  }
  return array;
}




// sortTests() // uncomment to test!
function sortTests() {
  console.log(qSort([1, 2, 3, 4, 5]), ' -> [1, 2, 3, 4, 5]');
  console.log(qSort([10, 4, 7, 6, 1]), ' -> [1, 4, 6, 7, 10]');
  console.log(qSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');
}



////////////////////////////
//     Shuffle
////////////////////////////

// implement your own function to randomize an array - each element should have an equal chance of landing in any spot
// What is its time complexity?

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * 10 * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleTests() {
  console.log(shuffle([1, 2, 3, 4, 5]), ' -> ?');
  console.log(shuffle([10, 4, 7, 6, 1]), ' -> ?');
  console.log(shuffle([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> ?');
}

// shuffleTests() // Determine a way to test this function!
