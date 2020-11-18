
//https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

// я знаю, что eval функция не безопасная, но я не смог придумать другого решения для того чтобы из строки
//получить значение свойства

Object.prototype.hash = function(string) {
  try {
     return eval(`this.${string}`);
   } catch (err) {
     return undefined;
 }
}