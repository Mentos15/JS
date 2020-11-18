//https://www.codewars.com/kata/array-helpers


Array.prototype.square=function(){
  return this.map(num=>num*num)
}
Array.prototype.cube=function(){
  return this.map(num=>num*num*num)
}
Array.prototype.sum=function(){
  return this.reduce((a,b)=>a+b,0)
}
Array.prototype.average=function(){
  return this.reduce((a,b)=>a+b,0)/this.length
}
Array.prototype.even=function(){
  return this.filter(num=>num%2==0)
}
Array.prototype.odd=function(){
  return this.filter(num=>num%2!==0)
}