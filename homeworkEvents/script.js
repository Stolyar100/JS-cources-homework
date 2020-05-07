document.addEventListener("DOMContentLoaded", () => {
    firstTask();
    secondTask();
    thirdTask();
    fourthTask();
});

function firstTask() {
    let input = document.getElementById('first__input');
    let span = document.getElementById('first__span');

    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyA' && (event.altKey)) {
            span.classList.add('js-edit');
            input.classList.add('js-edit');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyS' && (event.shiftKey)) {
            span.innerText = input.value;

            span.classList.remove('js-edit');
            input.classList.remove('js-edit');
        }
    });
}

function secondTask() {
    window.addEventListener('resize', function (event) {
        if (event.target.innerWidth < 600) {
            console.log(`Довжина вікна ${event.target.innerWidth}, ми використовуємо мобільну версію)`);
        } else {
            console.log(`Довжина вікна ${event.target.innerWidth}, ми використовуємо десктоп версію)`);
        }
    });
}

function thirdTask() {
    let input = document.getElementById('second__input');
    let span = document.getElementById('second__span');

    input.addEventListener('input', event => {
        span.innerText = event.target.value;
    });
}

function fourthTask() {
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

    let sayHiModal = document.getElementById('sayHi');

    document.addEventListener('keydown', event => {
        if (event.code =='KeyO' && event.altKey) {
            sayHiModal.classList.add('active');
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code =='KeyC' && event.altKey) {
            sayHiModal.classList.remove('active');
        }
    });
}

