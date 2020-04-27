function firstTask() {
    let num = +prompt('ВВедіть число для піднесення в куб', 2);

    if (isNaN(num)) {
        alert('Ви ввели некоректні дані');
    } else {
        alert(`${num}^3 = ${calcPowCube(num)}`);
    }
}

function calcPowCube(num) {
    if (isNaN(num)) {
        return NaN;
    } else {
        return num**3;
    }
    
}

function secondTask() {
    let input = prompt('Введіть три числа числа через пробіл (a b c)');
    let numbers = input.split(' ').map(Number);
    let result = calcPlusDivide(...numbers);

    if (isNaN(result)) {
        alert('Ви ввели некоректні дані');
    } else {
        alert(`(${numbers[0]} + ${numbers[1]}) / ${numbers[2]} = ${result}`);
    }
}

function calcPlusDivide(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return NaN;
    } else {
        return (a + b) / c;
    }
}

function thirdTask() {
    let dayNumber = prompt('Введіть день тижня (від 1 до семи)', 1);
    alert(`Ви ввели: ${getDayOfWeek(dayNumber)}`);
}

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case '1':
            return 'Понеділок';
            break;
        case '2':
            return 'Вівторок';
            break;
        case '3':
            return 'Середа';
            break;
        case '4':
            return 'Четвер';
            break;
        case '5':
            return 'П`ятниця';
            break;
        case '6':
            return 'Субота';
            break;
        case '7':
            return 'Неділя';
            break;
        default:
            return 'Некоректні дані';
            break;
    }
}

function fourthTask() {
    let num = +prompt('Введіть число');
    let numFactorial = calcFactorialLoop(num);
    if (isNaN(numFactorial)) {
        alert('Ви ввели некоректні дані');
    } else {
        alert(`${num}! = ${numFactorial}`);
    }
}

function calcFactorialLoop(num) {
    if (isNaN(num)) {
        return NaN;
    } else if ((num == 0) || (num == 1)) {
        return 1;
    }

    let result = 1;

    for (let i = num; i > 1; i--) {
        result *= i;
    }

    return result;
}

function calcFactorialRecursion(num) {
    if (isNaN(num)) {
        return NaN;
    } else if ((num == 0) || (num == 1)) {
        return 1;
    }
    num *= calcFactorialRecursion(num - 1);
    return num;
}

