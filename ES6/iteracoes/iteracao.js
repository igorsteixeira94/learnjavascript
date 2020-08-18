/**
 * Desejo realizar a iteração do array [10,11,12,13,14]
 */

const numbers = [10, 11, 12, 13, 14]

const numbersIterador = numbers[Symbol.iterator]() //Extraindo o iterador do iteravel kk

console.log(numbersIterador.next()) //{value:10,done:false})
console.log(numbersIterador.next()) //{value:11,done:false})
console.log(numbersIterador.next()) //{value:12,done:false})
console.log(numbersIterador.next()) //{value:13,done:false})
console.log(numbersIterador.next()) //{value:14,done:false})
console.log(numbersIterador.next()) //{value:undefined,done:true})

const pessoas = [
    { name: 'Igor', age: 26 },
    { name: 'Iuri', age: 18 },
]

const pessoasIterator = pessoas[Symbol.iterator]()

console.log(pessoasIterator.next()) //{ value: { name: 'Igor', age: 26 }, done: false }
console.log(pessoasIterator.next()) //{ value: { name: 'Iuri', age: 18 }, done: false }
console.log(pessoasIterator.next()) //{ value: undefined, done: true }
