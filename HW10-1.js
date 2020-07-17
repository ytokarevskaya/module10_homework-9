// 10.3 1
a = prompt("Введите числовое значение")
console.log(a)

b = +a

if (isNaN(b) == true) {
  console.log("Упс, кажется, вы ошиблись")
}
else if  (b%2 == 0) {
  console.log("Четное число")
}
else {
  console.log("Нечетное число")
}