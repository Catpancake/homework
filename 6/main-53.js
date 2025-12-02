// Задание 1.
// Дан массив пользователей:
// const users = [
//     { name: 'Alex', age: 24, isAdmin: false },
//     { name: 'Bob', age: 13, isAdmin: false },
//     { name: 'John', age: 31, isAdmin: true },
//     { name: 'Jane', age: 20, isAdmin: false },
// ];
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

//==================================

const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
];

users.push({ name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true })

console.log(users)

//=================================

function getUserAverageAge(users) {
    const ageSum = users.reduce((sum, user) => sum + user.age, 0)
    const averAge = ageSum / users.length
    return averAge
}

console.log (getUserAverageAge(users))

//=================================

const getAllAdmins = () => users.filter(user => {
    return user.isAdmin
})

console.log(getAllAdmins(users))

//=================================

function first(arr, n) {
    if (!arr || arr.length === 0) return []
    
    if (n === undefined) return [arr[0]]

    if (n === 0) return []

    return arr.slice(0, n)
}

const arr = [1, 2, 3, 4, 5]

console.log(first(arr))
console.log(first(arr, 2))
console.log(first(arr, 0))
console.log(first(arr, 10))
console.log(first([]))
console.log(first())