
////////////////////////////
//     PALINDROME
////////////////////////////

// PALINDROME

// Modify the function so that it returns true if string is a palindrome (the string is the same forward and backwards)
// Otherwise, should return false
// The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
// Ignore capitalization

// Hint: look up how to use regex in JS - specifically how to rip away all characters that aren't letters

function palindrome(string) {
//  return string = string.split('').reverse().join('');
  var str = string.toLowerCase().replace(/[\s,.-]/g, "");
  if(str.length === 0 || str.length === 1){return true;}
  else if(str[0] === str[str.length - 1]){
    return palindrome(str.slice(1, str.length - 1))
    }
  return false;
}

// palindromeTests() // uncomment to check code!

function palindromeTests() {
  console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna"), ' -> true');
  console.log(palindrome("llama mall"), ' -> true');
  console.log(palindrome("jmoney"), ' -> false');
}