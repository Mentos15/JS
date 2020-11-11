//https://leetcode.com/problems/jewels-and-stones/submissions/

var numJewelsInStones = function(J, S) {
    
  let count = 0;
  
  for(let i=0; i<J.length; i++){
      for(let j=0; j<S.length; j++){
          if(J[i] === S[j]){
              count++;
              S =S.slice(0,j)+ S.slice(j+1);
              j--;
          }
      }
  }
  return count;
};