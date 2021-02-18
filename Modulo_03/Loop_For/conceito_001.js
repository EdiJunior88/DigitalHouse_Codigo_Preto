/*
O for utiliza um contador para definir quantas vezes o código deve ser
repetido. O mais legal é que podemos decidir em qual número o contador deve
iniciar, e também qual o limite em que deve parar.

Em um exemplo prático ficaria assim:
*/

for (var contagem = 1; contagem < 10; contagem++){
    // código que deve se repetir
}

/*
Dessa forma, o contador inicia com valor 1; para cada repetição ele deve
adicionar +1(incremento); e continua repetindo enquanto a condição
(contador < 10) for verdadeira. Ufa, agora podemos melhorar aquele código
de contar de 1 à 10. Vamos ver como fica:
*/

for (var contador = 1; contador < 10; contador++){
    console.log(1)
}

/*
Conforme o exemplo, observamos que o console.log é o comando que se
repete, já que ele está dentro do loop. Entretanto, da maneira que está escrito
ele irá repetir sempre o número 1, certo? Podemos resolver isso pedindo para
que imprima o valor de uma variável no lugar de um valor fixo.

Dessa maneira a variável contador resolve nosso problema, porque ela
vai ser incrementada a cada execução. Assim, o valor muda sempre, contando
de 1 até 10 :)
*/

for (var contadoria = 1; contadoria < 10; contadoria++){
    console.log(contadoria)
}