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
        return num;
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