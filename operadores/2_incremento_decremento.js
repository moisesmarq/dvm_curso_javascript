/**
 * Os operadores de incremento ++ e decremento --, são usados para adicionar ou subtrair o valor 1 de uma variável.
 */

var contador = 5;
contador++;
console.log(contador);// contador agora vale 6

contador--;
console.log(contador);// contador agora vale 5

//Quando colocados o operador antes do nome, o valor muda imediatamente
var numero = 9;
console.log(++numero); //Exibe valor 10

//Quando o operador é colocado após o nome, o valor muda após a operação atual ser executada.
var numero = 9;
console.log(numero++); //Exibe valor 9, e depois modifica.