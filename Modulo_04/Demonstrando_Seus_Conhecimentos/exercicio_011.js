/*
Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série
e um array com a lista de todos os episódios da série. A função deve retornar um novo
array com a lista de episódios iniciando com o nome da série.

Exemplo: Dadas as variáveis abaixo:

harryPotterPrefixo = "Harry Potter";
harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];

A função deve retornar como resultado o seguinte array:

resultado = [
  "Harry Potter e a Pedra Filosofal",
  "Harry Potter e a Câmara Secreta",
  "Harry Potter e o Prisioneiro de Azkaban",
  "Harry Potter e o Cálice de Fogo",
  "Harry Potter e a Ordem da Fênix",
  "Harry Potter e o Enigma do Príncipe",
  "Harry Potter e as Relíquias da Morte"
];
*/

var harryPotterPrefixo = "Harry Potter";
var harryPotterSeries = [
    "e a Pedra Filosofal",
    "e a Câmara Secreta",
    "e o Prisioneiro de Azkaban",
    "e o Cálice de Fogo",
    "e a Ordem da Fênix",
    "e o Enigma do Príncipe",
    "e as Relíquias da Morte"
];

function series(prefixo, array)
{
    var resultado = []
    for(var i = 0; i < array.length; i++){
        resultado[i] = prefixo+" "+array[i]
    }
    return resultado
}

console.log(series(harryPotterPrefixo,harryPotterSeries))