console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/


//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA
//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
//
// const globalScope = {
//     sum: 'function'
// }

// function sum (n: number) {
//     let sumFunctionScope = {
//         outerScope: globalScope,
//         n: 3
//     }
//     return function (n2: number) {
//         let anonimFunctionScope = {
//             outerScope: sumFunctionScope,
//             n2: 6
//         }
//         return n + n2;
//     }
// }
//
// console.log(sum(3)(6));


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
//
//
// function makeCounter() {
//     let sumFunctionScope = {
//         outerScope: globalScope,
//         count: 0 // 1, 2, 1, 3
//     }
//     let count = 0;
//     return function () {
//         let anonimFunctionScope = {
//             outerScope: sumFunctionScope,
//         }
//         return ++count
//     }
// }
//
// let counter = makeCounter()
// console.log(counter())
// console.log(counter())
// let counter2 = makeCounter()
// counter2()
// counter()


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter(num: number) {
//     let count = num
//     return {
//         increase: () => ++count,
//         decrease: () => --count,
//         reset: () => {
//             count = 0;
//             return count
//         },
//         set: () => {
//             count = num;
//             return count
//         }
//     }
// }
//
// console.log(makeCounter(1));

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
//
// function superSum(num: number) {
//     if (num <= 0) return num
//     if (num <= 1) return (n: number) => n
//
//     let _arguments: number[] = [];
//
//     function helper(...args: number[]) {
//         _arguments = [..._arguments, ...args]
//         if (_arguments.length > num) {
//             _arguments.length = num
//             return _arguments.reduce((acc, item) => acc + item)
//         } else {
//             return helper
//         }
//     }
//
//     return helper
// }

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};


// let globalScope = {
//     makeCounter: 'function',
//
// }
//
//
// function makeCounter() {
//     let count = 0;
//
//     return function () {
//         return count++;
//     };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();


//
// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter()); // 2
// alert(counter2()) // 0
// alert(counter()) // 3

// let phrase = "hello"
// if (true) {
//     let user = "John"
//
//     alert(phrase + " " + user)
// }
//
// alert(user);

// let phrase = "Hello";
//
// if (true) {
//     let user = "John";
//
//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
// }
//
// sayHi();
//
// sum(1)(2) = 3
// sum(5)(-1) = 4
//
// function sum (a: number) {
//     return function (b: number) {
//         return a + b
//     }
// }
//
// sum(1)(2)

// function urlGenerator(domain: string) {
//     return function(url: string) {
//         return `https://${domain}.${url}`;
//     }
// }
//
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
//
//
// console.log(comUrl('google')) // https://google.com
// console.log(comUrl('netflix')) // https://netflix.com
// console.log(ruUrl('yandex')) // https://yandex.ru
// console.log(ruUrl('vk')) // https://vk.ru


// function curry (func: any) {
//     return function curried(...args: any) {
//         if (args.length >= func.length) {
//             func.apply(null, args)
//         } else {
//             return function(...args2: any) {
//                 // @ts-ignore
//                 return curried.apply(this, args.concat(args2))
//             }
//         }
//     }
// }
//
// function sum(a: number, b: number, c: number) {
//     return a + b + c;
// }
//
// let curriedSum = curry(sum);
//
// alert( curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
// // @ts-ignore
// alert( curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
// // @ts-ignore
// alert( curriedSum(1)(2)(3) ); // 6, каррирование всех аргументов

/*
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
* */
//
// function sumTo(n: number): number {
//     if (n <= 1) return n
//     else {
//         return n + sumTo(n - 1)
//     }
// }

// //
// function SumTo(n: number): number {
//     let sum = 0;
//     for (let i = 0; i <= n; i ++) {
//         sum = sum * i;
//     }
//     return sum
// }
/*
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
factorial(5) ); // 120
*/
// function factorial(n: number): number  {
//     if (n <= 1) {
//         return n
//     } else {
//         return n * factorial(n  - 1);
//     }
// // }


// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// Fn = Fn-1 + Fn-2
// function fibonacci (n: number): number {
//     if (n === 1 ) {
//         return n
//     } else {
//         return fibonacci(n - 1) + fibonacci(n -2 );
//     }
// }

//
// let arr = ["Есть", "жизнь", "на", "Марсе"];
//
// let arrLength = [];
// for (let i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }
//
// alert( arrLength ); // 4,5,2,5
//
// let arr2 = [1+2, 3+4, 2+2,1+1];
//
// function getSums(arr: any)  {
//     let result = []
//     if (!arr.length) return arr
//     arr.reduce((sum: any, item: any) => {
//         result.push(sum)
//         return sum + item
//     })
//     return
// }
