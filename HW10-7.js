//10.3 7

arr = [2,2,2,1,1,0,0,0,0,0,"sweh"];
let odd = 0;
let even = 0;
let zero = 0;
let other = 0;
for (let i=0; i<arr.length; i++) {
  if (arr[i] === 0) {
    zero = zero + 1;
  }
  else if (isNaN(arr[i]%2) == true) {
    other = other + 1;
  }
  else if (arr[i] % 2 === 0) { 
    even = even + 1;
  }
  else {odd = odd + 1;
       }
}
console.log(odd, even, zero, other)