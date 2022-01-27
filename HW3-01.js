//####Задача 1
//
//Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//
//```javascript
//const arr = [1,2,3];
//forEach(arr, function(item, i, arr) {});
//```

myForEach = function(arr, cb){
  let arrMyTemp = [];
  if (Array.isArray(arr) && typeof cb === 'function') {
    for (let i=0; i< arr.length; i++) {
      arrMyTemp.push(arr[i]);
      cb(arrMyTemp[i],i,arr)
    }
  } else {
    throw new Error ('Error: The type parameter is not correct');
  }
  return arrMyTemp;
}
const arr = [1,2,3];
myForEach(arr, function(item, i, arr) {
  console.log(i+': '+ item + ' of ' + arr); 
  });

