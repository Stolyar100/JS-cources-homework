function firstTask() {
    let animal = {
        name: 'Cat',
        weight: 5,
        age: 4,
        speed: 5,
        getInfo: function () {
            console.log(this);
        },
        setName: function (newName) {
            this.name = newName;
        },
        calclTimeToThousand: function () {
            let daysAmount = Math.ceil((1000 / this.speed) / 12);
            return daysAmount;
        },
    }
    animal.getInfo();
    animal.setName('Devil');
    console.log(`${animal.name} пройде 1000 км за ${animal.calclTimeToThousand()} днів`);
}

function secondTask() {
    let figure = {
        widthX: 4,
        widthY: 4,
        isSI: false,
        setName: function (newName) {
            this.name = newName;
        },
        getArea: function () {
            let area;
            if (this.widthZ) {
                area = (2 * (this.widthX * this.widthY + this.widthY * this.widthZ + this.widthX * this.widthZ));
            } else {
                area = (this.widthX * this.widthY);
            }
            return area;
        },
        getPerimeter: function () {
            let perimeter;
            if (this.widthZ) {
                perimeter = 4 * this.widthX + 4 * this.widthY + 4 * this.widthZ;
            } else {
                perimeter = 2 * (this.widthX + this.widthY);
            }
            return perimeter;
        },
        setWidthZ: function (width) {
            if (Number.isNaN(width)) {
                return;
            }
            this.widthZ = width;
        },
        setSI: function (useSI) {
            if (this.isSI === useSI) {
                return;
            }
            if (useSI === true) {
                this.widthX /= 100;
                this.widthY /= 100;
                if (this.widthZ) {
                    this.widthZ /= 100;
                }
                this.isSI = true;
            } else if (useSI === false) {
                this.widthX *= 100;
                this.widthY *= 100;
                if (this.widthZ) {
                    this.widthZ *= 100;
                }
                this.isSI = false;
            }
        },
    }

    console.log(figure);
    console.log(`Периметр фігури - ${figure.getPerimeter()}, площа - ${figure.getArea()}`);
    figure.setWidthZ(4);
    console.log(`Периметр фігури - ${figure.getPerimeter()}, площа - ${figure.getArea()}`);
    figure.setName('parallelepiped');
    figure.setSI(true);
    console.log(figure);
}


function thirdTask() {

}

function fourthTask() {

}
