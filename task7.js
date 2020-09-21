/* Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. 
*/

const arr = [0,0,0,0,0,0,1,2,3,4,5,5,6,7,'string',8,8,5,3,4,5,76,2,43,63,'string','string','string','string']
function evenAndOdd(arr) {
  try {
    let even = 0
    let odd = 0
    let zero = 0

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        if (arr[i] === 0) {
          zero += 1
        } else if(arr[i] % 2 == 0) {
          even += 1
        } else {
          odd += 1
        }
      }
    }
    console.log(`Четных: ${even} Нечетных: ${odd} Нулей: ${zero}`)
  } catch(err) {
    console.log(err)
  }
}

evenAndOdd(arr)