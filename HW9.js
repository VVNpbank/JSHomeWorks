//#### Задача 9
//Отсортировать массив по убыванию.
//```javascript
//var arr = [1,2,3,4,5,6];
//  // [6,5,4,3,2,1]
//```
//**Внимание**!
//- Не разрашается использовать специальные методы массивов.

var arr = [1,2,3,4,5,6];
for (var i=0; i<arr.length-1; i++) {
  for (var j=i; j<arr.length; j++) {
    if (arr[i]<arr[j]) {
      let aTemp = arr[i];
      arr[i]=arr[j];
      arr[j]=aTemp;
    }  
  }
}
for (var i=0; i<arr.length; i++) console.log(arr[i]);
