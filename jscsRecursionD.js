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
};