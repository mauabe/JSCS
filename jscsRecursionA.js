/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n < 0){return null;}
	if (n === 0){return 1;}
	return n * factorial (n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	// if (array.length === 0) return 0;
	// else return array[0] + sum(array.slice(1));
	// }

// OR TERNARY EXPRESSION:
	return (array.length === 0) ? 0 : (array[0] + sum(array.slice(1)));
}


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	let result = 0;
	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){result += arraySum(array[i])}
		else result += array[i];
	}
	return result;
};

//USING REDUCE to flatten array will not work, because numbers become strings
// let newArray = array.reduce((a, b) => a.concat(b), []);
// return sum(newArray);
// }


// 4. Check if a number is even.
var isEven = function(n) {
	if (n === 0) return true;
	if(n < 0){return !isEven(n+1)}
	return !isEven(n-1);
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if(n === 0 || n === 1){return 0;}
	if(n > 1) return n - 1 + sumBelow(n - 1);
	if(n < 0){return n + 1  + sumBelow(n + 1);}
};


// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	var result = [];
	if(x === y){return result;}
	if(y - x === 1 || x - y === 1){return result;}

	if(x < y) {
		result.push(x + 1);
		return result.concat(range(x + 1, y))
	}
	if(x > y){
		result.push(x - 1);
		return result.concat(range(x - 1, y))
	}
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if(exp === 0) return 1;
	if(exp === 1) return base;
	if(exp < 0) {return (1 / exponent(base, -1 * exp))};
	
	if(base < 0)	return base * exponent(base, exp - 1);
	// if(exp % 2 === 0)	return base * exponent(base, exp - 1);
	return base * exponent(base, exp - 1)
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	let result = n / 2;
	if(result === 2 || result === 1 || n === 1){return true;}
	else if(result > 2){
		return powerOfTwo(result);
	}
	return false;
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string === ""){return "";}
  else
    return reverse(string.substr(1)) + string.charAt(0);
};


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	var str = string.toLowerCase().replace(/\s/g, "");
	if(str.length === 1 || str.length === 0) {return true;}
	else if(str[0] === str[str.length - 1]){
		return palindrome(str.slice(1, str.length - 1))
	}
	return false;
};
