//https://www.codewars.com/kata/555185132c0d4cca3d000197/train/javascript


function spyOn (func) {
  let arrResults = [];
  let arrCalled = [];
  let count = 0;

  function childFun(...args){
      let result = func(...args);
      arrCalled.push(...args);
      arrResults.push(result);
      count++;
      return result;
  }
  childFun.callCount = function () {
    return count;
  };
  childFun.wasCalledWith = function (val) {
    return arrCalled.includes(val);
  };
  childFun.returned = function (val) {
    return arrResults.includes(val);
  };
  return childFun;
}