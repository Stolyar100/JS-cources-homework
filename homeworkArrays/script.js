function firstTask() {
    let animal = {
        name: 'Cat',
        weight: 5,
        age: 4,
        speed: 5,
        getInfo: function() {
            console.log(this);
        },
        setName: function(newName) {
            this.name = newName;
        },
        calclTimeToThousand: function() {
            let daysAmount = Math.ceil((1000 / this.speed) / 12);
            console.log(`${this.name} пройде 1000 км за ${daysAmount} днів`);
        },
    }
    animal.getInfo();
    animal.setName('Devil');
    animal.calclTimeToThousand();
}

function secondTask() {

}


function thirdTask() {
    
}

function fourthTask() {
    
}
