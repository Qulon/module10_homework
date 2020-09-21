/* Задание 2.

Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
*/

function questTwo(x){
    try{
      if (typeof x === 'number') {
        console.log(`${x} — число`)
      } else if(typeof x === 'string') {
        console.log(`${x} — строка`)
      } else if(typeof x === 'boolean') {
        console.log(`${x} — логический тип`)
      } else {
        console.log(`Тип ${x} не определён`)
      }
    } catch(err) {
      console.log(err)
    }
  }
  
  questTwo(123)
  questTwo(true)
  questTwo('yo')
  questTwo(prompt('Введите X', ''))