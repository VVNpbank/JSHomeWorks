//####Задача 10
//
//Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только массив
//- Генерировать ошибку если был передан пустой массив
//
//```javascript
//const arr = [3,2,1];
//reverse(arr); // [1,2,3]
//```

myReverse = function(arr){
  let arrMyTemp = [];
  if (Array.isArray(arr)) {
    if (arr.length>0) {
      for (let i=arr.length-1; i>=0; i--) 
        arrMyTemp.push(arr[i]);
    } else {
      throw new Error ('Error: Current array is empty');
    }
  } else {
    throw new Error ('Error: The type parameter is not correct');
  }
  return arrMyTemp;
}
const arr = ['1','2','3'];
let accMy = myReverse(arr);
console.log(accMy); 
