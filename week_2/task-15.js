//https://leetcode.com/problems/intersection-of-two-arrays/submissions/

var intersection = function(nums1, nums2) {
  let c = 0;
  let result = [];
  for (let i = 0; i < nums1.length; i++){ 
     let j = 0, k = 0;
     while (nums2[j] !== nums1[ i ] && j < nums2.length)
         j++;
      
     while (result[k] !== nums1[ i ] && k < c) 
         k++;
      
     if (j != nums2.length && k == c){
      result[c] = nums1[ i ];
      c++;
     } 
        
   }
 return result;
};