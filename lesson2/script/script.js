// ведіть парні числа від 2 до 20
// 2. Запитуйте у користувача з допомогою prompt число, доки він не введе число більше 100.
alert("123")

// for(let i = 2; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }
// let num = true;

// do {
//     let number = +prompt("введіть число)))", 100);
//     if(number > 100) {
//         num = false;
//     }
// } while(num);

// let i = 1;
// while(i < 100) {
//     let j = i
//     console.log(j);
//     let k = i + j
//     console.log(k);
//     i = j;
// }
let num = 1
function fib(n1, n2) {
    let fibNum = n1 + n2;
    if(fibNum > 100) {
        return fibNum;
    } else {
        console.log(fibNum);
        fib(fibNum, n1);
    }
}
fib(1, 1);
