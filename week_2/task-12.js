//https://leetcode.com/problems/last-stone-weight/submissions/

var lastStoneWeight = function(stones) {
    
  let firstMax, secondMax, firstIndex, secondIndex;
    
  for(let i=0; i<stones.length; i++){

      if(stones.length === 1 || stones.length === 0){
        return stones;
      }
      firstMax = Math.max.apply(null,stones);
      firstIndex = stones.indexOf(firstMax);
      stones.splice(firstIndex,1);

      secondMax = Math.max.apply(null,stones);
      secondIndex = stones.indexOf(secondMax);
      stones.splice(secondIndex,1);

      if(firstMax === secondMax){
        i = i-2;
      }
      else{
        stones.splice(firstIndex,0, firstMax - secondMax)
        i--;
        
      }
  }
  return stones;
};