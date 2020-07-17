//10.3 4

function randomInteger (min, max) {
    let rand = min + Math.random() * (max +1 - min);
    return Math.floor(rand)
  }
  x = randomInteger(0, 100)
  console.log(x)