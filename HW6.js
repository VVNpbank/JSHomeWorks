//####Задача 6
//Написать код который посчитает сумму всех элементов в масиве.
//```js
//var arr = [1,2,3,4];
//```
//**Внимание**!
//- Не разрашается использовать специальные методы массивов.

var arr = [1,2,3,4];
let sum = 0;
for (var i=0; i<arr.length; i++) sum = sum + arr[i];
console.log(sum);
