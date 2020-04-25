function firstTask() {
    const sumAmount = 100;
    let sum = 0;
    sum = calcSum(sumAmount);
    alert(`Сума цифр від 1 до ${sumAmount} = ${sum}`);
}

function calcSum(sumAmount) {
    if (!isNaN(sumAmount)) {
        let sum = 0;
        for (let i = 0; i < sumAmount + 1; i++) {
            sum += i;
        }
    return sum;
    }
}

function secondTask() {
    const testArray = [1, 2, 3, 4, 5];

    alert(`Всі елементи масива [${showArray(testArray)}]`);
}

function showArray(array) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += `${array[i]}, `;
    }

    return result;
}

function thirdTask() {
    const testArray = [-1, 22, 3, 44, 5];

    alert(`максимальне значення масива - ${Math.max(...testArray)}`);
    alert(`максимальне значення масива - ${calcMax(testArray)}`);
}

function calcMax(array) {
    let maxValue = array[0];

    for (let i = 0; i < array.length; i++) {
        if (maxValue < array[i]) {
            maxValue = array[i];
        }
    }

    return maxValue;
}

function fourthTask() {
    let input = prompt('Введіть 8 чисел( скільки завгодно) через пробіл');
    let inputArray = input.split(' ').map(Number);

    let ZeroAmount = calcZeroAmount(inputArray);
    let PositiveNumAmount = calcPositiveNumAmount(inputArray);
    let NegativeNumAmount = calcNegativeNumAmount(inputArray);

    alert(`Ви ввели ${inputArray.length} чисел, з них:
    - ${PositiveNumAmount} додатніх, - ${NegativeNumAmount} від'ємних та - ${ZeroAmount} нулів`);
}

function calcZeroAmount(array) {
    let ZeroAmount = 0;

    for (let i = 0; i < array.length; i++) {
        if ((array[i] === 0) && (!isNaN(array[i]))) {
            ZeroAmount += 1;
        }
    }

    return ZeroAmount;
}

function calcPositiveNumAmount(array) {
    let PositiveNumAmount = 0;

    for (let i = 0; i < array.length; i++) {
        if ((array[i] > 0) && (!isNaN(array[i]))) {
            PositiveNumAmount += 1;
        }
    }

    return PositiveNumAmount;
}

function calcNegativeNumAmount(array) {
    let NegativeNumAmount = 0;

    for (let i = 0; i < array.length; i++) {
        if ((array[i] < 0) && (!isNaN(array[i]))) {
            NegativeNumAmount += 1;
        }
    }

    return NegativeNumAmount;
}

function fifthTask() {
    for (let i = 0; i < 10; i++) {
        alert(`8 * ${i} = ${8 * i}`);
    }
}

function sixthTask() {
    let testArray = [2, 5, 9, 15, 0, 4];
    let min = 3;
    let max = 10;
    let filteredArray = getInRange(testArray, min, max);

    alert(`Початковий масив - [${showArray(testArray)}]
    фільтрований в межах(${min}-${max}) - [${showArray(filteredArray)}]`);
}

function getInRange(array, min, max) {
    return array.filter(num => ((!isNaN(num)) && ((num > min) && (num < max))));
}

function seventhTask() {
    let condition;

    do {
        let input = prompt('Введіть три часла через пробіл (a ? b), де a - перше число, b - друге, ? - дія між ними(доступно +, -, *, /, ^)');
        let expression = input.split(' ');

        alert(`результат виконання ${expression[0]} ${expression[1]} ${expression[2]} = ${calculator(expression)}`);

        condition = confirm('Порахуємо ще?))');
    } while (condition);
}

function calculator(expression) {
    let a, b;

    a = parseInt(expression[0], 10);
    b = parseInt(expression[2], 10);

    if (isNaN(a) || isNaN(b)) {
        return 'некорекоректні дані';
    }
    switch (expression[1]) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        case '^':
            return a ** b;
            break;        
        default:
            return 'некорекоректний символ';
            break;
    }
}


