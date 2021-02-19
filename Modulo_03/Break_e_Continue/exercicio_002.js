/*
Precisamos imprimir somente os números pares de 0 à 20. Mas temos alguns requisitos,
você precisa utilizar, o loop for, o comando continue e o numero deve ser o contador d
o loop! Vamos lá?

*/

for (var i = 0; i<= 20; i++){
    if (i % 2 == 0){
        console.log(i)
        continue
    }
}