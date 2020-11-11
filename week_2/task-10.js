//https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function(s) {
  
  let letter;
  let str = "";
  if(s.length === 1){
      return 0;
  }
  for(let i=0; i<s.length;i++){
    letter = s[i];
    
      str = s.slice(0,i) + s.slice(i+1);
         
      if(str.indexOf(letter,0) === -1){ 
        return i;
      }
    
  }
  return -1;
};