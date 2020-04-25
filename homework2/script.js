function firstTask() {
    const currentYear = 2020;
    let age = currentYear - (+prompt('«Привіт якого року ти народився?»', 2001));
    alert(`«Привіт мені - ${age} років!»`);
}

function secondTask() {
    let a = +prompt('Введіть довжину сторони a');
    let b = +prompt('Введіть довжину сторони b');

    alert(`Периметр прямокутника = ${2*(a + b)}`);
}

function thirdTask() {
    let r = +prompt('Введіть радіус кола', 3);
    let area = Math.PI*(r**2);

    alert(`Площа круга = ${area}`);
}

function fourthTask() {
    let time = +prompt('Скільки годин ви ще будете їхати', 3);
    let distance = 50 * time;

    alert(`Ви проїдете ${distance} км`);
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