/**
 * Função: Podemos utilizar o reduce para somar todos os elementos de um array
 * Retorno: "Concatenação" dos elementos do array.
 * Por exemplo:  A soma de todos os elementos de um array
 */

const numbers = [1, 2, 3, 4, 5, 85]

console.log(numbers.reduce((total, number) => total + number, 3)) //Seu retorno sera : 103
//Note que passei um segundo parametro. O primeiro foi a callback e segundo
//o valor inicial da varivavel total, iniciando em 3.

//A função reduceRight, percorre o array de maneira contraria. Do final para inicio.
console.log(numbers.reduceRight((total, number) => total + number))
