//10.3 2

let x = 2

console.log(x)
console.log(typeof(x))

switch (typeof(x)) {
    case "boolean":
        console.log('Это булево значение');
        break;
    case "number":
        console.log('Это число');
        break;
    case "string":
        console.log('Это строка');
        break;
    default:
        console.log('Тип x не определён');
}