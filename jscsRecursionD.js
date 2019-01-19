// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	let result = obj || {};

	if(str.length === 0){return obj;}
	// for(let char of str){
	// 	if(!obj[char]){obj[char] = 1;}
	// 	else obj[char] += 1;
	// }
	if(!result[str[0]]){result[str[0]] = 1}
	else result[str[0]] += 1;

	return letterTally(str.slice(1), result);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
// let result = [];
var compress = function(list) {
	if(list.length > 1){
		if(list[0] === list[1]){
			return compress(list.slice(1))
		}
		else return [list[0], ...compress(list.slice(1))];
	} else return list;
	
// 	for(let i = 0; i < list.length; i++){
// 		if(list[i] !== list[i - 1]){result.push(list[i]);}
//  }
};


// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	//works without recursion
	//array.forEach(elem => elem.push(aug));
	if(array.length === 0){return []}
	array[0].push(aug);
	augmentElements(array.slice(1), aug);
	return array;
};


// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	if(array.length <= 1){return array;}
	else if(array[0] === 0 && array[1] === 0){
			return minimizeZeroes(array.slice(1));
	} else return [array[0], ...minimizeZeroes(array.slice(1))]
};



// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	let result = [];
	if(array.length === 0){return array}
	result.push(Math.abs(array[0]));
	result.push(-Math.abs(array[1]));
	result.push(...alternateSign(array.slice(2)));

	// for(let i = 0; i < array.length; i++){
	// 	if(i % 2 === 1){result.push(Math.abs(array[i]) * -1)}  //negative
	// 	if(i % 2 === 0){result.push(Math.abs(array[i]))} //positive
	// }
	return result;
};


// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	const hash = {0 : 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}; 
	let newStr = str.charAt(0);
	
	if(str.length === 0){return '';} //base case
	for (let key in hash) { //loop inside hash object, find values and replace it
		if (hash.hasOwnProperty(key)) {
			if(newStr === key){
      	newStr = hash[key];
      }
	  }
	}

return newStr.concat(numToText(str.slice(1)));
}



// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// // https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
	min = 0;
	max =  array.length - 1;
	let middle = Math.floor((min + max)/2);
	
	while (min <= max){
		if (target === array[middle]){return middle;}
		if(target < array[middle]){
			max = middle - 1;
		}
		else {
			min = middle + 1;
		}
		return binarySearch(array, target, min, max);
	}
	if(min > max){return null;}
}



// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {

	// function mergeSort(array) {
	// 	if(array.length <= 1){return array};
	// 	let middle = Math.floor(array.length/2);
		
	// 	let lowArray = array.slice(0, middle);
	// 	let highArray = array.slice(middle);
			
		// return mergerFunc(mergeSort(lowArray), mergeSort(highArray));
	}


// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
	let copy;
	if(input instanceof Object){
		copy = {};
		//copy = input.constructor();
		for(let key in input){
			if(input.hasOwnProperty(key)){
				copy[key] = clone(input[key];)
			}
		}
	}
	if (Array.isArray(input)){
		clone = [];
		for(let i = 0; i < input.length; i++){
			copy[i] = clone(input[i]);
		}
	} 
	return copy;
};
