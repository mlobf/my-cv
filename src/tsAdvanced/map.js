"use strict";
exports.__esModule = true;
var nameAge = new Map();
nameAge.set('Gon', 14);
nameAge.set('Marcos', 44);
nameAge.set('Mario', 10);
nameAge.set('João', 39);
nameAge.set('Caio', 33);
nameAge.set('Carlos', 64);
// Methods for set
//console.log(nameAge.entries());
//nameAge.forEach((x) => console.log(nameAge.keys()));
//nameAge.forEach(() => console.log(nameAge.values()));
//console.log(nameAge);
//console.log(nameAge.has('Mario'));
//console.log(nameAge.size);
// Methods arrays
var myArr = [1, 2, 3, 4, 5, 6];
//const myMap = myArr.map((y, x) => x * y);
//console.log(myMap);
// forEach nao retorna nada, void. Ja o map retorna um arr.
//myArr.forEach((x) => console.log(x));
// Retorna um arr
//const x = myArr.filter((n) => n >= 3);
//console.log(x);
// Retorna o resoltado da expressão
var myReduce = myArr.reduce(function (a, c) { return a + c; });
console.log(myReduce);
console.log('oi');
