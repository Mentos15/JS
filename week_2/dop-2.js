//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

var flatten = function(head) {  
  if(head == null) return null;
     let current = head;
 
     let curr = current;
 
     while(current != null){
         if(current.child == null) {
             curr = current.next;
             current = current.next;
         }
         else{
             let nextNode = current.next;
             let childNode = current.child;
             
             current.child = null;
             current.next = childNode;
             childNode.prev = current;
             
             while(childNode.next != null){
                 childNode = childNode.next;
             }
             childNode.next = nextNode;
             
             if(nextNode != null){
                 nextNode.prev =  childNode;
             }
         }
     }
     return head;
 }