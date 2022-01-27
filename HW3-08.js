//####Задача 8
//
//Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.
//
//Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только массив
//- Генерировать ошибку если на каком то уровне было найдено не число и не массив
//
//```javascript
//const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
//f(arr); // 12
//const arr2 = [[[[[1,2]]]]];
//f(arr2); // 3
//const arr3 = [[[[[1,2]]],2],1];
//f(arr3); // 6
//const arr4 = [[[[[]]]]];
//f(arr4); // 0
//const arr5 = [[[[[],3]]]];
//f(arr5); // 3
//```

/*var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var arr = arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr4); 
console.log(arr); 
*/

function f(arr){
  let sum = 0;
  if (Array.isArray(arr)) {
    var arrTemp = arr.flat(Infinity);
//        console.log(arrTemp);
    for (let i=0; i< arrTemp.length; i++) {
      if (typeof arrTemp[i] === 'number') {
        sum += arrTemp[i];
      } else {
        throw new Error ('Error: The type parameter is not correct');
      }
    }
  } else {
    throw new Error ('Error: The type parameter is not correct');
  }
  return sum
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
var s = f(arr); // 12
console.log(s);
const arr2 = [[[[[1,2]]]]];
s=f(arr2); // 3
console.log(s);
const arr3 = [[[[[1,2]]],2],1];
s=f(arr3); // 6
console.log(s);
const arr4 = [[[[[]]]]];
s=f(arr4); // 0
console.log(s);
const arr5 = [[[[[],3]]]];
s=f(arr5); // 3
console.log(s);
