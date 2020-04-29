function firstTask() {
    let array = [2,-5, 0 -4, 7, 0 , 3, 9, -1, -8, 4];

    let posArray = array.filter(item => item > 0);
    let negArray = array.filter(item => item < 0);

    console.log(posArray);
    console.log(negArray);
}

function secondTask() {
    let array = [4,3,1,8,4,7,4,6,2,5,7,9,5,3,2,7];
    let max = Math.max(...array);
    let min = Math.min(...array);
    let maxPosition = array.indexOf(max);
    let mixPosition = array.indexOf(min);
    let beginIndex, endIndex;
    if (maxPosition > mixPosition) {
        beginIndex = mixPosition + 1;
        endIndex = maxPosition;
    } else {
        beginIndex = maxPosition + 1;
        endIndex = mixPosition;
    }
    let sum = 0;

    for (let i = beginIndex; i < endIndex; i++) {
        sum += array[i];
    }

    console.log(sum);
}

function thirdTask() {
    let car = {
        'color': 'black',
        'number': 'AA0000AA',
        'owner': 'Petro',
        'maxSpeed': 160,
        'tankVolume': 40,
        'sellCar': function(newOwner) { this.owner = newOwner;}
    }

    console.log(car);
    car.sellCar('John');
    console.log(car);
}
