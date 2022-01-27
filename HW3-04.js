//####Задача 4
//
//Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//
//```javascript
//const arr = [1,2,3];
//some(arr, function(item, i, arr) {});
//```

mySome = function(arr, cb){
  let rezult = false;
  if (Array.isArray(arr) && typeof cb === 'function') {
    for (let i=0; i< arr.length; i++)
      if (arr[i]>item) 
      {
         rezult = true; 
         i = arr.length;
      }
  } else {
    throw new Error ('Error: The type parameter is not correct');
  }
  return rezult;
}
const arr = [1,2,3];
let item = 4;
let rez = mySome(arr, function(item, i, arr){});
console.log(rez); 
 