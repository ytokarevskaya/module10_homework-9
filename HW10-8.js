// 10.3 8

let map = new Map();
map.set("1","string");
map.set(2,"number");
map.set(true, "bulevo")
map.set([], "array")
// for (let pair of map) {
//   console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`)
// }
map.forEach(function(value,key) {
            console.log('Ключ - ' + key + ', значение - ' + value)
            })