/**
 * Função: Como o proprio nome já diz, encontrar algum elemento em um array.
 * Retorno: O primeiro elemento encontrado.
 * Por exemplo: Buscar o numero 10, dentro de um array.
 */

const numbers = [1, 2, 5, 6, 8, 9, 10, 11, 15, 10, 100]

const newNumbers = numbers.find((number) => number === 10)

console.log(newNumbers)
//Retorno: 10

/**Se eu tentar utilizar o find para encontrar os numeros maior que 10,
 * assim com fiz usando o metodo filter, terei apenas o primeiro valor maior que 10
 */

console.log(numbers.find((number) => number > 10))
//Retorno: 11
