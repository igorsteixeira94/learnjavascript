const numbers = [10, 11, 12, 13, 14]

for (var number in numbers) {
    console.log(number)
    /**0,1,2,3,4*/

    console.log(numbers[number])
    //10, 11, 12, 13, 14
}

const people = [
    { name: 'Igor', age: 26 },
    { name: 'Iuri', age: 18 },
]

for (var person in people) {
    console.log(person)
    //0,1
    console.log(people[person])
    //{ name: 'Igor', age: 26 },{ name: 'Iuri', age: 18 }
}

// Porem ao tentar utilizar em um objeto não iteravel
const customer = { name: 'Igor', age: 26 }
for (var c in customer) {
    console.log(c)
    //name, age

    console.log(customer[c])
    //Igor, 26
}
