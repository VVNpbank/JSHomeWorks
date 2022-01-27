//####Задача 6
//
//Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
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
//reduceRight(arr, function(acc, item, i, arr) {}, acc);
//```

myReduceRight = function(arr, cb){
  let rez = acc;
  let item;
  if (Array.isArray(arr) && typeof cb === 'function' || acc === 'number' || acc === 'string') {
    for (let i=arr.length-1; i>=0; i--) {
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
let accMy = myReduceRight(arr, function(acc, item, i, arr) {}, acc);
console.log(accMy); 
 