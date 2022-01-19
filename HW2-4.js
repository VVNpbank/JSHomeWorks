//####Задача 4
//
//Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.
//
//```js
//f(1); // Воскресенье
//f(2); // Понедельник
//f(8); // Error: parameter should be in the range of 1 to 7
//f('1'); // Error: parameter type is not a Number
//```
function f(a){
  var weekDay = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
  if (typeof a !== 'number') 
    return('Error: parameter type is not a Number');
  else
    if (a<1 || a>7) 
      return('Error: parameter should be in the range of 1 to 7');
    else
      return (weekDay[a]);
}

var r = f(1); // Воскресенье
console.log(r);
var r = f(2); // Понедельник
console.log(r);
var r = f(8); // Error: parameter should be in the range of 1 to 7
console.log(r);
var r = f('1'); // Error: parameter type is not a Number
console.log(r);

