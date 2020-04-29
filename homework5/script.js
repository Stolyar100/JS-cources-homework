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

function fifthTask() {
    let input = prompt('Введіть час у форматі гг:хх:сс');
    let time = input.split(':').map(Number);

    let result = calcSeconds(...time);

    if (isNaN(result)) {
        alert('Ви ввели некоректні дані');
    } else if (result === false) {
        alert('Ви ввели завеликі значення')
    } else {
        alert(`${time[0]}:${time[1]}:${time[2]} - це ${result} секунди`);
    }
}

function calcSeconds(hours, minutes, seconds) {
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        return NaN;
    } else if ((hours > 23) || (minutes > 59) || (seconds > 59)) {
        return false;
    }

    return ((hours * 60 + minutes) * 60 + seconds);
}

function sixthTask() {
    let seconds = +prompt('Введіть кількість секунд', 68400);
    let result = calcTime(seconds);
    if (Number.isNaN(result)) {
        alert('ви ввели некоректні дані');
    } else if (result === false) {
        alert('Більше одного дня');
    } else {
        alert(`Ви ввели ${result[0]}:${result[1]}:${result[2]}`);
    }
}

function calcTime(seconds) {
    if (Number.isNaN(seconds)) {
        return NaN;
    } 
    const dayLimit = (23 * 3600 + 59 * 60 +59);
    if (seconds > dayLimit) {
        return false;
    } else {
        let time = [];

        time[0] = Math.floor(seconds / 3600);
        seconds -= time[0] * 3600;
        time[1] = Math.floor(seconds / 60);
        seconds -= time[1] * 60;
        time[2] = seconds;
        
        return time;
    }
}

