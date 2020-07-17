//10.3 6

arr = [2,3,2,3,2];
let x = 0;
for (let i=1; i<arr.length; i++) {
  if (arr[i] != arr[i-1]) {
    x = x + 1;}
}
if (x>0) {
  console.log("В массиве есть различные элементы")
}
else console.log("В массиве все элементы одинаковые")
