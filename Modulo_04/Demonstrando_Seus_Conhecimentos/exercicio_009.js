/*
Programe uma função buscarDivisivelPor que recebe dois parâmetros, um array de números e
um número de teste, retornando como resposta o primeiro número do array que seja divisível
pelo número dado e diferente de zero. Caso nenhum número do array passe no teste, retorne
o texto "Nenhum número válido encontrado!".
*/

function buscarDivisivelPor(array, num) {

    for(var i=0; i < array.length; i++) {
        if ( array[i]%num == 0 && array[i] != 0) {
            return array[i]
        }
    }
    return "Nenhum número válido encontrado!"
}