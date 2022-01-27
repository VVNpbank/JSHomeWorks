//####Задача 9
//
//Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только число, строку, объект, массив
//- Второй параметр обязателен и может принимать только число
//
//```javascript
//arrayFill('x',5); // [x,x,x,x,x]
//```

arrayFill = function(patern, num){
  let arr = new Array(num);
  if (typeof patern === 'number' || typeof patern === 'string' || typeof patern === 'object' ) {
    if (typeof num === 'number') {
      for (let i=0; i<arr.length; i++) 
        arr[i] =patern;
    } else {
      throw new Error ('Error: The parameter num is not number');
    }
  } else {
    throw new Error ('Error: The type parameter is not correct');
  }
  return arr;
}

let accMy = arrayFill('x',5); // [x,x,x,x,x]
console.log(accMy); 
