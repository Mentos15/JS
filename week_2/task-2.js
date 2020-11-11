//https://leetcode.com/problems/middle-of-the-linked-list/submissions/

var middleNode = function(head) {
  let tmp = head;
  let counter = 0;

  while (tmp) {
      tmp = tmp.next;
      counter++;
  }
  
  let midle = Math.floor(counter/2);
  let result;
  
  while(midle>0){
    result = head.val;
    head = head.next;
    midle--;
  }
  return head;
};

