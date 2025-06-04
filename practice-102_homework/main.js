'use strict';

const student = {
    name: 'Andruxa',
    age: 29,
    isStudent: true,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

console.log(student.name)
student.sayHello('Freedje')

// ==============================

let userCount = 0

const users = [
    {
        name: 'Alex',
        age: '23',
        isAdmin: false
    },
    {
        name: 'John',
        age: '32',
        isAdmin: false
    },
    {
        name: 'Marshal',
        age: '14',
        isAdmin: true
    },
    {
        name: 'Makar',
        age: '58',
        isAdmin: false
    },
    {
        name: 'Dracula',
        age: '482',
        isAdmin: true
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        userCount = userCount + 1
    }
}
console.log(userCount)