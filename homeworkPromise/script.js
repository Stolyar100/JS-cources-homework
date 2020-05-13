const base = 'https://swapi.dev/api/';
let currentResource = 'films/';

function firstTask() {
    showLoadScreen();
    fetch(base + currentResource)
        .then((res) => res.json())
        .then((data) => addPeople(data.results));
}

function peopleSearch(event) {
    showLoadScreen();
    let request = 'https://swapi.dev/api/people/?search=';
    fetch(`${base}${currentResource}?search=${event.target.value}`)
        .then((res) => res.json())
        .then((data) => addPeople(data.results));
}

function setCurrentResource(event) {
    currentResource =
        event.target.options[event.target.options.selectedIndex].value;
}

function showLoadScreen() {
    clearPeopleList();

    let peopleEl = document.getElementById('people');
    let loadScreen = document.createElement('p');
    loadScreen.innerText = 'Load';
    peopleEl.append(loadScreen);
}

function addPeople(people) {
    clearPeopleList();
    let peopleEl = document.getElementById('people');
    people.forEach((person) => peopleEl.append(addPeopleCard(person)));
}

function addPeopleCard(person) {
    let personCard = document.createElement('div');
    personCard.classList.add('people__card');

    for (property in person) {
        personCard.append(addPersonProperty(property, person[property]));
    }

    // personCard.append(addPersonProperty('name', person['name']));
    // personCard.append(addPersonProperty('birth_year', person['birth_year']));
    // personCard.append(addPersonProperty('height', person['height']));
    // personCard.append(addPersonProperty('eye_color', person['eye_color']));
    // personCard.append(addPersonProperty('mass', person['mass']));
    // personCard.append(addPersonProperty('skin_color', person['skin_color']));

    return personCard;
}

function addPersonProperty(propertyName, propertyValue) {
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

function clearPeopleList() {
    let peopleEl = document.getElementById('people');
    peopleEl.innerText = '';
}
