//https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/

var intersect = function(nums1, nums2) {
    
  let c = 0, result = [];
  let flag = false;
  for (let i = 0; i < nums1.length; i++){ 
     let j = 0, k = 0;
      
     while (nums2[j] !== nums1[ i ] && j < nums2.length)
         j++;
      
     while ((result[k] !== nums1[ i ] || result[k] == nums1[ i ]) && k < c) 
         k++;
     
     if (j != nums2.length && k == c){
         
         result[c] = nums1[ i ];
         c++;
         nums1.splice(i,1);
         i--;
         nums2.splice(j,1);
         j--;
     } 
        
   }
 return result;
};