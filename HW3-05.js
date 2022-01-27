//####Задача 5
//
//Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//- Третий параметр обязателен и может принимать только строку или число
//
//```javascript
//const arr = [1,2,3];
//const acc = 0;
//reduce(arr, function(acc, item, i, arr) {}, acc);
//```

myReduce = function(arr, cb){
  let rez = acc;
  let item;
  if (Array.isArray(arr) && typeof cb === 'function' || acc === 'number' || acc === 'string') {
    for (let i=0; i< arr.length; i++) {
      rez = rez + arr[i];
      cb(acc,item,i,arr);
    }
  } else {
    throw new Error ('Error: The type parameter is not correct');
  }
  return rez;
}
const arr = ['1','2','3'];
const acc = '0';
let accMy = myReduce(arr, function(acc, item, i, arr) {}, acc);
console.log(accMy); 
 