const res = fetch('http://swapi.dev/api/people/')
    .then((res) => res.json())
    .then((data) => addPeople(data.results));

console.log(res);

function addPeople(people) {
    let peopleEl = document.getElementById('people');
    people.forEach((person) => peopleEl.append(addPeopleCard(person)));
}

function addPeopleCard(person) {
    let personCard = document.createElement('div');
    personCard.classList.add('people__card');

    for (property in person) {
        personCard.append(addPersonProperty(property, person[property]));
    }

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
