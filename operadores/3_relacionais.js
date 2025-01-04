/**
 * Os operadores de comparação servem para comparar dois valores, retornando um booleano (true ou false).
 * Os operadores de comparação são: ==, !=, <, >, <=, >=, === e !==.
 */

//== e !=
console.log( 21 == 21 ); // vai imprimir true
console.log( 120 == 100); // vai imprimir false

console.log( 11 != 21 ); // vai imprimir true
console.log( 100 != 100); // vai imprimir false

//Esses operadores conseguem fazer a comparação, mesmo que os valores sejam de tipos diferentes.
console.log(  "20" == 20  ); // true
console.log(  true == 1 ) ; // true

//Operadores de igualdade e desigualdade estrita
//O operador de igualdade estrita (===) assim como o operador de igualdade (==), vai comparar se dois valores são iguais. 
//A diferença entre os dois é que o operador === não faz conversão de tipo, ou seja, ele vai comparar se os dois valores são iguais tanto em valor quanto em tipo.

"21" === 21 // o resultado será false
1 === true // o resultado será false

"21" !== 21 // o resultado será true
1 !== true // o resultado será true

//Operadores de comparação

20 > 10 //true
10 < 5 //false
5 >= 5 //true
6 <= 7 //true
