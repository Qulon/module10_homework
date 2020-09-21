/* Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

function questThree(arg) {
    try {
      console.log(arg.split("").reverse().join(""))
    } catch(err) {
      console.log(err)
    }
  }
  
  questThree('Hello')
  questThree(prompt('Введите строку', ''))