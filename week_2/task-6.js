//https://leetcode.com/problems/linked-list-cycle/submissions/

var hasCycle = function(head) {
  while (head){
      if (head.val === null){
          return true;
      }            
      head.val = null;
      head = head.next;
  }
  return false;
};