// ####Задача 1
//
// Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
//
// ```js
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number
// ```
function f(a){
  if (typeof a === 'number') {
    return (a*a*a);
  } else {
    return('Error: parameter type is not a Number');
  }
}

var r = f(2); // 8   
console.log(r);
var r = f('Content');
console.log(r);
