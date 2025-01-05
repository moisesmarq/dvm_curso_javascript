/**
 * Fazendo o import do plugin "readline-sync" e assim poder receber dados inseridos pelo usuario.
 */
import entradaDados from 'readline-sync';

//Mensagem informativa
console.log("Conversor de Celsius para Kelvin: \n");

//Atribuição da variavel C com a entrada do valor em Celsius digitada pelo usuario.
let C = entradaDados.question("Informe o valor em Celsius: ");

//Atribuicao e criação da variavel "K" com o valor do calculo para converter em Kelvin.
let K = Number(C) + 273.15;

//Apresentação com resultado da conversão.
console.log(C+"ºC equivale a "+K+"K");