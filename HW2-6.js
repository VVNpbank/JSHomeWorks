//####Задача 6
//
//Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет. Если чётное — функция возвращает `true`, если нечётное — `false`. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
//
//*Чётные числа могут делится на 2 без остатка.*
//
//```js
//isEven(3); // false
//isEven(4); // true
//isEven('Content'); // Error: parameter type is not a Number
//```
function isEven(a){
  var b = false;
  if (typeof a === 'number') {
    if (a % 2)
      b=false;
    else 
      b=true ;
    return (b);
  }
  else 
    return('Error: parameter type is not a Number');
}

console.log('isEven(3) = '+isEven(3)); // false
console.log('isEven(4) = '+isEven(4)); // true
console.log('isEven("Content")= '+isEven('Content')); // Error: parameter type is not a Number
