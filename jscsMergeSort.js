function mergeSort(array) {
	if(array.length <= 1){return array};
	let middle = Math.floor(array.length/2);
	
	let lowArray = array.slice(0, middle);
	let highArray = array.slice(middle);
		
	return mergerFunc(mergeSort(lowArray), mergeSort(highArray));
}
	
const mergerFunc = function(lowArray, highArray){
	const result = new Array(lowArray.length + highArray.length);
	let i = 0;
	let j = 0;
	let k = 0;

	while(i < lowArray.length && j < highArray.length){
		if(lowArray[i] <= highArray[j]){
			result[k] = lowArray[i];
			k++;
			i++;
		} else {
			result[k] = highArray[j];
			k++;
			j++
		}
	}
			
	while(i < lowArray.length){
		result[k] = lowArray[i];
		k++;
		i++;
	};
		
	while(j < highArray.length){
		result[k] = highArray[j];
		k++;
		j++;
	};
		
		return result;
	}
