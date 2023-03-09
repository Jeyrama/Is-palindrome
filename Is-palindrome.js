/*
Write a function that checks if a 
given string (case insensitive) 
is a palindrome.
*/


// Solution

const Palindrome = x => x.toLowerCase().split('').reverse().join('') == x. toLowerCase();

// or

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true: false
}