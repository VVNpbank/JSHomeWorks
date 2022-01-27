//####Задача 2
//
//Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//
//```javascript
//const arr = [1,2,3];
//filter(arr, function(item, i, arr) {});
//```

myFilter = function(arr, cb){
  let arrMyTemp = [];
  if (Array.isArray(arr) && typeof cb === 'function') {
    for (let i=0; i< arr.length; i++) 
    if (arr[i]>item)
    {
      arrMyTemp.push(arr[i]);
      cb(arrMyTemp[i],i,arr);
    }
  } else {
    throw new Error ('Error: The type parameter is not correct');
  }
  return arrMyTemp;
}
const arr = [1,2,3];
let arr1 = []; 
let item = 1;
arr1 = myFilter(arr, function(item, i, arr){});
console.log(arr1); 
