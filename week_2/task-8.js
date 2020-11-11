//https://leetcode.com/problems/valid-anagram/submissions/

var isAnagram = function(s, t) {
  
  if(s.split('').sort().join('') != t.split('').sort().join('')){
      return false;
  }
  return true;
  
};