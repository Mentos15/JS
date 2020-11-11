//https://leetcode.com/problems/merge-two-sorted-lists/submissions/

var mergeTwoLists = function(l1, l2) {
  if(l1==null){
      return l2;
  } 
  if(l2==null){
     return l1; 
  } 
  let p1=l1;
  let p2=l2;
  let head=null;
  let current=null;
  while(p1!=null && p2!=null){
      if(head==null){
          if(p1.val<=p2.val){
              head=current=p1;
              p1=p1.next;
          }else{
              head=current=p2;
              p2=p2.next;
          }
      }else{
          if(p1.val<=p2.val){
              current.next=p1;
              current=p1;
              p1=p1.next;
          }else{
              current.next=p2;
              current=p2;
              p2=p2.next;
          }
      }
  }
  if(p1!=null) {
      current.next=p1;
  }
  if(p2!=null){
      current.next=p2;
  }
  return head;
};


let list = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    }
  };

  let list2 = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null
        }
      }
    }
  };



console.log(mergeTwoLists(list,list2));