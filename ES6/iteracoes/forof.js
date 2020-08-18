const numbers = [10, 11, 12, 13, 14]

for (var number of numbers) {
    console.log(number)
    /**
10
11
12
13
14
*/
}

const peoples = [
    { name: 'Igor', age: 26 },
    { name: 'Iuri', age: 18 },
]

for (var person of peoples) {
    console.log(person)
    //{ name: 'Igor', age: 26 }
    //{ name: 'Iuri', age: 18 }
}

// Porem ao tentar utilizar em um objeto não iteravel
const customer = { name: 'Igor', age: 26 }
for (var c of customer) {
    console.log(c)
    // TypeError: customer is not iterable
}
