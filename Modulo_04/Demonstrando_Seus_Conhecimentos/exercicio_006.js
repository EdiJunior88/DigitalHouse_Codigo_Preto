/*
Programar uma função filme que recebe três arrays com os nomes de personagens,
filmes e ano de estréia no cinema.

A função deve receber também um valor de id escolhido pelo usuário com intervalo
de 1 até o tamanho de um dos arrays fornecidos e retornar uma frase com o
seguinte modelo:

"personagem é um personagem do filme filme que estreou no cinema em lançamento."

Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção
válida."

Exemplo:

var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

filme(personagens, filmes, lancamentos, id)
// retorna a string "Leia é um personagem do filme Star wars que estreou no cinema em 1977."
*/

var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

function filme(personagens, filmes, lancamentos, id)
{
    if ((id > filmes.length + 1) || (id < 1)){
        var msg = ("Essa não é uma opção válida.")
        return msg
    }
    else{
        var msg = (personagens[id-1] + " é um personagem do filme " + filmes[id-1] + " que estreou no cinema em " + lancamentos[id-1] + ".")
        return msg
    }
}
