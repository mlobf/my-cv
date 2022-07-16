const nameAge = new Map<string, number>();

nameAge.set('Gon', 14);
nameAge.set('Marcos', 44);
nameAge.set('Mario', 10);
nameAge.set('João', 39);
nameAge.set('Caio', 33);
nameAge.set('Carlos', 64);

//console.log(nameAge);

const myArr = [1, 2, 3, 4, 5, 6];

console.log('oi');

/*
myArr.map((n) => {
  console.log('oi' + n);
});
*/

const x = myArr.filter((n) => n >= 3);

console.log(x);

const myReduce = myArr.reduce((a, c) => a + c);

console.log(myReduce);
