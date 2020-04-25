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

function convertToMiles(kilometers) {
    return kilometers * 0.62137;
}
function convertToKilometers(miles) {
    return miles / 0.62137;
}

function fifthTask() {
    let isToMile = confirm('Ви переводитt з кілометрів в милі?');
    let value = +prompt('Введіть відстань', 50);
    
    if(isToMile) {
        alert(`Це ${convertToMiles(value)} миль`);
    } else {
        alert(`Це ${convertToKilometers(value)} кілометрів`);
    }
}

function sixthTask() {
    let money = +prompt('Скільки у вас грошей', 1000);
    let price = +prompt('Скільки коштує літр бензину', 30);
    let count = Math.floor(money / price);
    let remainder = money -  count*price;

    alert(`Ви купили ${count} літрів бензину, ваша решта - ${remainder} грн`);
}

function seventhTask() {

}

