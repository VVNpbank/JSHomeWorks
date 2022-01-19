//###Задача 2
//
//Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
//
//```js
//f(1,2,3); // 6
//f(1,1,1,1,1,1,1,1); // 8
//f(1,2,'s',4); // Error: all parameters type should be a Number
//```
function f(){
  var sum=0;
  for (item of arguments) {
    if (typeof item === 'number') {
      sum=sum+item;
    } else {
      return('Error: all parameters type should be a Number');
    }
  } 
  return (sum)
}

var r = f(1,2,3); // 6
console.log(r);
var r = f(1,1,1,1,1,1,1,1); // 8
console.log(r);
var r = f(1,2,'s',4); // Error: all parameters type should be a Numberf('Content');
console.log(r);
