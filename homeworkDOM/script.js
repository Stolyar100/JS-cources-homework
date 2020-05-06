function firstTask() {
    let CountryList = [
        {
            country: "Україна",
            capital: "Київ",
            count: 40000000,
        },
        {
            country: "Грузія",
            capital: "Тбілісі",
            count: 10000000,
        },
        {
            country: "Великобританія",
            capital: "Лондон",
            count: 100000000,
        },
        {
            country: "США",
            capital: "Вашингтон",
            count: 300000000,
        }
    ];

    let countries = document.getElementById('countries');

    CountryList.forEach(country => {
        let countryLi = document.createElement('li');
        countryLi.innerText = `${country.country}, ${country.capital} - ${country.count / 1000000} млн.`;
        countryLi.classList.add('country');
        if (country.country == 'Україна') {
            countryLi.classList.add('ukraine');
        }
        countries.appendChild(countryLi);
    }); 
}

let modalButtons = document.querySelectorAll('.js-open-modal');
let closeButtons = document.querySelectorAll('.js-modal-close');

modalButtons.forEach( item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        let modalId = this.getAttribute('data-modal'); 
        let modalElem = document.querySelector(`.modal[data-modal="${modalId}"]`);
        
        modalElem.classList.add('active');
    });
});

closeButtons.forEach(item => { 
    item.addEventListener('click', function(e) {
        let parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
    });
});



let colorItems = document.querySelectorAll('.js-select-item');

colorItems.forEach( item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        item.style.backgroundColor = document.getElementById('select-color').value;
    });
});