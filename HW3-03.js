//####Задача 3
//
//Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//
//```javascript
//const arr = [1,2,3];
//every(arr, function(item, i, arr) {});
//```

myEvery = function(arr, cb){
  let rezult = true;
  if (Array.isArray(arr) && typeof cb === 'function') {
    for (let i=0; i< arr.length; i++)
      if (arr[i]<item) 
      {
         rezult = false; 
         i = arr.length;
      }
  } else {
    throw new Error ('Error: The type parameter is not correct');
  }
  return rezult;
}
const arr = [1,2,3];
let item = 2;
let rez = myEvery(arr, function(item, i, arr){});
console.log(rez); 
 