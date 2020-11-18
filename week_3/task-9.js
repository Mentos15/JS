//https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript


function nouveau (Constructor,...args) {
  const obj = Object.create(Constructor.prototype)
  const obj2 = Constructor.apply(obj, args)
  
  if(obj2 && (typeof obj2 === 'object' || typeof obj2 === 'function')){
    return obj2;
  }
  else{
    return obj;
  }
  
}