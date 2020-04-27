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
        return num*num*num;
    }
    
}