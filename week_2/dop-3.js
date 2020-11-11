//https://leetcode.com/problems/reverse-linked-list/submissions/

var reverseList = function(head) {
    
  let next, previous = null;
  while(head)
  {
      next = head.next;
      head.next = previous;
      previous = head;
      head = next;
  }
  head = previous;
  return head;
};

