//https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

function isSantaClausable(obj) {
  let arr = ["sayHoHoHo","distributeGifts","goDownTheChimney"];
 
  return arr.every(function(property){
    return typeof obj[property] == 'function';
  })
}