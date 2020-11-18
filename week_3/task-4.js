//https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript


var Cat = (function() {
  const catsList = [];

  function childFun(name, weight) {
    if (!name || !weight)
      throw new Error('Invalid parametr');

    Object.defineProperty(this, 'weight', {
      get() {
        return this.newWeight;
      },
      set(value) {
        this.newWeight = value;
      }
    });

    this.name = name;
    this.weight = weight;
    catsList.push(this);
  }

  childFun.averageWeight = function() {
    return catsList.reduce( (sum, curentValue) => sum += curentValue.weight, 0) / catsList.length;
  };

  return childFun;
}());
