//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/

var repeatedNTimes = function(A) {
    
  let N = A.length/2;
  let count;
  for(let i=0; i<A.length;i++){
      count = 0;
      
      for(let j=0; j< A.length; j++){
          if(A[i] === A[j]){
              count++;
          }
      }
      if(count === N){
          return A[i];
      }
  }
};