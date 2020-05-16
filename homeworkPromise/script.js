const base = 'https://swapi.dev/api/';
let currentResource = 'films/';

function firstTask() {
    showLoadScreen();
    doFetchGet(base + currentResource).then((data) => {
        if (data !== null) {
            addResource(data.results);
        } else {
            showErrorScreen();
        }
    });
}

function resourceSearch(event) {
    showLoadScreen();
    doFetchGet(`${base}${currentResource}?search=${event.target.value}`).then(
        (data) => {
            if (data !== null) {
                addResource(data.results);
            } else {
                showErrorScreen();
            }
        }
    );
}

function setCurrentResource(event) {
    currentResource =
        event.target.options[event.target.options.selectedIndex].value;
}

function showLoadScreen() {
    clearResourceList();

    let peopleEl = document.getElementById('resource');
    let loadScreen = document.createElement('p');
    loadScreen.innerText = 'Load';
    peopleEl.append(loadScreen);
}

function showErrorScreen() {
    clearResourceList();

    let peopleEl = document.getElementById('resource');
    let loadScreen = document.createElement('p');
    loadScreen.classList.add('error');
    loadScreen.innerText = 'Error';
    peopleEl.append(loadScreen);
}

function checkIsURL(string) {
    let URL = /http/g;
    return URL.test(string);
}

function checkIsURLFilm(URL) {
    let URLFilm = /films/g;
    return URLFilm.test(URL);
}

async function doFetchGet(URL) {
    const response = await fetch(URL)
        .then((response) => (response.ok ? response.json() : null))
        .catch((response) => console.log(response));

    return response;
}

async function getValueList(values) {
    let valueList = [];
    await values.forEach((item) => {
        if (checkIsURL(item)) {
            doFetchGet(item).then((data) => {
                if (data === null) {
                    valueList.push(null);
                } else {
                    if (checkIsURLFilm(item)) {
                        valueList.push(data.title);
                    } else {
                        valueList.push(data.name);
                    }
                }
            });
        } else {
            return item;
        }
    });
    valueList.join(', ');

    return valueList;
}

function addResource(people) {
    clearResourceList();
    let peopleEl = document.getElementById('resource');
    people.forEach((person) => peopleEl.append(addResourceCard(person)));
}

function addResourceCard(person) {
    let personCard = document.createElement('div');
    personCard.classList.add('resource__card');

    for (property in person) {
        if (Array.isArray(person[property])) {
            getValueList(person[property]).then((valueList) =>
                personCard.append(addResourceListProperty(property, valueList))
            );
        } else {
            if (!checkIsURL(person[property])) {
                personCard.append(
                    addResourceProperty(property, person[property])
                );
            } else {
                doFetchGet(person[property]).then((data) => {
                    if (checkIsURLFilm(person[property])) {
                        personCard.append(
                            addResourceProperty(property, data.title)
                        );
                    } else {
                        personCard.append(
                            addResourceProperty(property, data.name)
                        );
                    }
                });
            }
        }
    }

    return personCard;
}

function addResourceProperty(propertyName, propertyValue) {
    let propertyBlock = document.createElement('div');
    propertyBlock.classList.add('resource__property');
    let propertyNameBlock = document.createElement('h3');
    propertyNameBlock.classList.add('resource__property-name');
    let propertyValueBlock = document.createElement('p');
    propertyNameBlock.classList.add('resource__property-value');

    propertyNameBlock.innerText = propertyName;
    propertyValueBlock.innerText = propertyValue;

    propertyBlock.append(propertyNameBlock);
    propertyBlock.append(propertyValueBlock);

    return propertyBlock;
}

function addResourceListProperty(propertyName, propertyValueList) {
    let propertyBlock = document.createElement('div');
    propertyBlock.classList.add('resource__property');
    let propertyNameBlock = document.createElement('h3');
    propertyNameBlock.classList.add('resource__property-name');
    let propertyValueBlock = document.createElement('p');
    propertyNameBlock.classList.add('resource__property-value');

    propertyNameBlock.innerText = propertyName;
    propertyValueBlock.innerText = propertyValueList.join(', ');

    propertyBlock.append(propertyNameBlock);
    propertyBlock.append(propertyValueBlock);

    return propertyBlock;
}

function clearResourceList() {
    let peopleEl = document.getElementById('resource');
    peopleEl.innerText = '';
}
