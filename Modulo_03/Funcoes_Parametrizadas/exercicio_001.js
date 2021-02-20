/*
Escreva uma função chamada menorNumero. Ela deve receber dois números
como parâmetro e retornar o menor entre eles. Caso os números sejam
iguais, basta que se retorne qualquer um deles.

*/

function menorNumero(numeroA, numeroB){
    if (numeroA < numeroB){
        return numeroA
    }
    else {
        return numeroB
    }
}