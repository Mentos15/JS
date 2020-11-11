var detectCycle = function(head) {
  if(!head) return null;
  var obj = {};
  while(head) {
      if (obj[head.val]) {
          for(let i = 0; i < obj[head.val].length; i++) {
              if (head === obj[head.val][i]) {
                  return obj[head.val][i];
              }
          }
          obj[head.val].push(head);
      } else {
          obj[head.val] = [head];
      }
      head = head.next;
  }
  return null;
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

console.log(detectCycle(list))