const base = 'https://swapi.dev/api/';
let currentResource = 'films/';

function firstTask() {
    showLoadScreen();
    fetch(base + currentResource)
        .then((res) => res.json())
        .then((data) => addResource(data.results));
}

function resourceSearch(event) {
    showLoadScreen();
    let request = 'https://swapi.dev/api/people/?search=';
    fetch(`${base}${currentResource}?search=${event.target.value}`)
        .then((res) => res.json())
        .then((data) => addResource(data.results));
}

function setCurrentResource(event) {
    currentResource =
        event.target.options[event.target.options.selectedIndex].value;
}

function showLoadScreen() {
    clearResourceList();

    let peopleEl = document.getElementById('people');
    let loadScreen = document.createElement('p');
    loadScreen.innerText = 'Load';
    peopleEl.append(loadScreen);
}

function addResource(people) {
    clearResourceList();
    let peopleEl = document.getElementById('people');
    people.forEach((person) => peopleEl.append(addResourceCard(person)));
}

function addResourceCard(person) {
    let personCard = document.createElement('div');
    personCard.classList.add('people__card');

    for (property in person) {
        personCard.append(addResourceProperty(property, person[property]));
    }

    return personCard;
}

function addResourceProperty(propertyName, propertyValue) {
    let propertyBlock = document.createElement('div');
    propertyBlock.classList.add('people__property');
    let propertyNameBlock = document.createElement('h3');
    propertyNameBlock.classList.add('people__property-name');
    let propertyValueBlock = document.createElement('p');
    propertyNameBlock.classList.add('people__property-value');

    propertyNameBlock.innerText = propertyName;
    propertyValueBlock.innerText = propertyValue;

    propertyBlock.append(propertyNameBlock);
    propertyBlock.append(propertyValueBlock);

    return propertyBlock;
}

function clearResourceList() {
    let peopleEl = document.getElementById('people');
    peopleEl.innerText = '';
}
