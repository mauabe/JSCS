
// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	var str = string.toLowerCase().replace(/\s/g, "");
	if(str.length === 1 || str.length === 0) {return true;}
	else if(str[0] === str[str.length - 1]){
		return palindrome(str.slice(1, str.length - 1))
	}
	return false;
};


// 11. Write a function that returns the remainder of x divided by y without using the modulo (%) operator.

// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if(y === 0){return NaN;}
	if(x === 0 || x === y){return 0;}
	if(x < 0){return -modulo(-x, y);}
	if(y < 0){return modulo(x, -y);}
	if(x < y) {return x;}
	else return modulo(x - y, y)
};

// 12. Write a function that multiplies two numbers without using the * operator or Math methods.
var multiply = function(x, y) {
	if(x === 0 || y === 0){return 0;}
	else if(y < 0){return -multiply(x, -y);}
	else if(x < 0){return x + multiply(x, y - 1);}
	else {return x + multiply(x, y - 1);}
};

// 13. Write a function that divides two numbers without using the / operator or Math methods.
var divide = function(x, y) {
	if(y === 0){return NaN;}
	else if(x === 0){return 0;}
	else if(x < 0 && y > 0 && -x < y || x < -y){return 0;}
  else if(x < y){return 0;}
	else if(x > 0 && y > 0){return 1 + divide(x - y, y);}
	else {return - 1 + divide(x + y, y);}
};


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if(x < 0 || y < 0){return null;}
	if( y === 0){return x;}
	return gcd(y, x % y);
};


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if(str1.length === 0 && str2.length === 0){return true;}
	else if(str1.charAt(0) === str2.charAt(0)){
		return compareStr(str1.slice(1), str2.slice(1));
	}
	return false;
};


// 16. Write a function that accepts a string and creates an array where each letter occupies an index of the array.
var createArray = function(str) {
	let array = [];
	if(str.length === 0){return array;}
	array.push(str[0]);
	array = array.concat(createArray(str.slice(1)));
	return array;
};


// 17. Reverse the order of an array
var reverseArr = function(array) {
	if(array.length === 0){return array;}
	else return reverseArr(array.slice(1)).concat(array[0]);
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	let array = [];
	if(length === 0){return array;}
	array.push(value);
	return array.concat(buildList(value, length -1));
};



// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	var results = [];
  var val = n;
  if(n === 0){ return results; }

  if (n % 3 === 0 && n % 5 !== 0) { val = 'Fizz'; } 
  if (n % 3 !== 0 && n % 5 === 0) { val = 'Buzz'; }
  if (n % 3 === 0 && n % 5 === 0) { val = 'FizzBuzz'; }
  results.push(val.toString());
  return fizzBuzz(n - 1).concat(results);
};


// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	var counter = 0;
	if(array.length === 0){return counter;}
	if(array[0] === value){counter = 1;}
	return counter + countOccurrence(array.slice(1), value);
};
