let button = document.querySelector('#button');

buttonEnable = document.querySelector('#button-enable');

button.addEventListener('click', () => {
    button.disabled = true;

    buttonEnable.style.display = 'block';
});

buttonEnable.addEventListener('click', () => {
    button.disabled = false;

    buttonEnable.style.display = 'none';
});


