//https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/

var deleteDuplicates = function(head) {
    
  if(head == null || head.next == null) 
      return head;
        
        
    let dublicate = head;
    while(dublicate.next != null) {
        if(dublicate.val == dublicate.next.val) {
            dublicate.next = dublicate.next.next;
        } else {
            dublicate = dublicate.next;
        }
    }

    return head;
};