/*
Crie um sistema para calcular a comissão dos vendedores de uma loja.
Crie uma função que tenha dois argumentos: preço e porcentagem de
comissão.
*/

var preco = 0
var porcentagem = 0

function comissao(preco, porcentagem){

    var resultado = (preco * porcentagem) / 100
    return resultado
}