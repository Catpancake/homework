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

// =============================== 2_hmw


const numbers = [2, 4, 5, 6, 8, 12, 10, 16, 34]

const checkNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            console.log(`это тебе: ${array[i]}`)
        }
    }
}

checkNumbers(numbers)

// =============================== 3_hmw

const symbol = ['plus','minus','multiply','divide']

const simpleCalc = (fstNumber, scdNumber, symbol) => {
    if (symbol === 'plus') {
        return fstNumber + scdNumber
    } else if (symbol === 'minus') {
        return fstNumber - scdNumber
    } else if (symbol === 'multiply') {
        return fstNumber * scdNumber
    } else if (symbol === 'divide') {
        if (scdNumber !== 0) {
            return fstNumber / scdNumber
        } else {
            return `Ай как хорошо!`
        }

    }

}

const fstNumber = 2;
const scdNumber = 3;

for (let i = 0; i < symbol.length; i++) {
    console.log(simpleCalc(fstNumber, scdNumber, symbol[i]))
}
