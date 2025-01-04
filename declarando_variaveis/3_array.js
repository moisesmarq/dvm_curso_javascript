
//Declarando um array
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];

//Acessando um valor do array
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados);// Imprime o array inteiro.
console.log(estados[1]); //Imprime "São Paulo".

//Alterando um valor no array
var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
var linguagem = "C";
linguagens[2] = linguagem; //modifica a linguagem "JAVA" para "C" no array linguagens
console.log(linguagens)

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
linguagens[3] = "C"; //escrevendo com menos código, alterando "C#" para "C".

//Contando a quantidade de elementos
//Função .length
console.log(linguagens.length);