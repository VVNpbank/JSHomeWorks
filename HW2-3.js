//####Задача 3
//
//Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
//
//```js
//f(9,3,2); // 3
//f('s',9,3) // Error: all parameters type should be a Number
//```
function f(){
  for (item of arguments)
    if (typeof item !== 'number') {
      return('Error: all parameters type should be a Number');
    }
  return ((arguments[0]-arguments[1])/arguments[2]);
}

var r = f(9,3,2); // 3
console.log(r);
var r = f('s',9,3) // Error: all parameters type should be a Number
console.log(r);
