//10.3 3

inputData = prompt("Введите данные")
splitData = inputData.split("")
reverseData = splitData.reverse()
outputData = reverseData.join("")
finalData = alert(`Инвертированные данные - ${outputData}`)

// Задание выполнено верно, но можно не создавать каждый раз новую переменную, а использовать функции "по цепочке" (пример ниже). Кроме того, нежелательно объявлять переменные без ключевого слова (let, const или var), потому что в таком случае они становятся глобальными и вы можете случайно перезаписать какие-то важные системные значения.

let reverseString = inputData.split("").reverse().join("");