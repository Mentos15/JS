//https://leetcode.com/problems/single-number/submissions/

var singleNumber = function(nums) {
  
  for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++){
          if(nums[i] === nums[j]){
              nums.splice(j,1);
              nums.splice(i,1);
              i--;
              break;
          }
      }
  }
  return nums;
};
