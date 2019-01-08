//JSCS Day 6  PRIME RANSOM NOTE

////////////////////////////
//     IS PRIME
////////////////////////////

// IS PRIME

// Modify the function so that it returns whether a number is prime

function isPrime(num) {
  // 	let max = Math.min(Math.ceil(num ** 0.5), num-1);
  let max = num - 1;
  if (num === 1){return false;}
  
  for(let i = 2; i <= max; i++){
    if (num % i === 0){return false;}
  }
  return true;
}
  
// Extension: solve this in 0(logn) time

// primeTests() // Uncomment to check code!
function primeTests() {
  console.log(isPrime(1), ' -> false');
  console.log(isPrime(2), ' -> true');
  console.log(isPrime(3), ' -> true');
  console.log(isPrime(17), ' -> true');
}
  
  
////////////////////////////
//     Challenge 4
////////////////////////////
  
// RANSOM NOTE

// Given two strings, write a function that determines if you can build the second string with the characters of the first
// If you have more than one of a certain character in the second string, you must have at least as many of those characters in the first
// Imagine a ransom note (second string) constructed from cut-out letters from a magazine (first string). Except you also need to cut out spaces for some reason.
// Capitalization matters!
  
function ransomNote(magazine, message) {
  const storage = {};
  for(let char of magazine){
    if(!storage[char]){storage[char] = 1;}
    else storage[char]++; 
  }

  for(let letter of message){
    if(!storage.hasOwnProperty(letter) || storage[letter] <= 0){return false;}
    else storage[letter]--;
  }
  return true;
}
  
  
  function ransomTests() {
    console.log(ransomNote('this is a string!!!', 'is this a string!!'), ' -> true');
    console.log(ransomNote('this is a string!!', 'this is a string!!!'), ' -> false');
    console.log(ransomNote('THIS IS A STRING', 'this is a string'), ' -> false');
    console.log(ransomNote('this is a string', ''), ' -> true');
  }
  
  // ransomTests() // Uncomment to check code!
  
  