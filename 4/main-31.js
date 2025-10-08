// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

//============================================

function calculateFinalPrice(price, discount, taxRate) {
    const discountSum = (discount / 100) * price;
    const priceAfterDiscount = price - discountSum;
    const finalPrice = priceAfterDiscount * (1 + taxRate);
    return finalPrice;
}

console.log(calculateFinalPrice(1234, 10, 0.2));
console.log(calculateFinalPrice(5788, 10, 0));

//============================================



function checkAccess(userName, password) {
    if (userName === "admin" && password === "123456") {
        return "Приветствую admin!";
    } else {
        return("Неверный логин или пароль");
    }
}

const result = checkAccess("admin", "12345");
console.log(result);
//============================================

function getTimeOfDay(hour) {
    if (typeof hour !== "number") {
        return "НеВремя"
    }

    if (hour >= 0   && hour   <= 5) return "ночь";
    if (hour >= 6   && hour   <= 11) return "утро";
    if (hour >= 12  && hour   <= 17) return "день";
    if (hour >= 18  && hour   <= 23) return "вечер";

    return " ВРемя"
}

console.log(getTimeOfDay(11))

//============================================

function findFirstEven (start, end) {
    start   = Math.ceil(start);
    end     = Math.floor(end);

    if (start   >   end) return "Чётных чисел нет"
    if (start   %   2   !== 0) start++
    return  start   <=  end ?   start:  "Чётных чисел нет"
}

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
console.log(findFirstEven(7, 15));
