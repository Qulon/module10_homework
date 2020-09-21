/* Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/
const testArrOne = [1,2,3,6,3,2]
const testArrTwo = [1,1,1,1,1,1,1,1]
let switcher
function sameElementsInArray(arr) {
  try {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[0]) {
        switcher = true
      } else {
        switcher = false
        break
      }
    }
    console.log(switcher)
  } catch(err) {
    console.log(err)
  }
}

sameElementsInArray(testArrOne)
sameElementsInArray(testArrTwo)