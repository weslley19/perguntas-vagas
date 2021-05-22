function drawNumber(x) {
    document.querySelector('.content-main-01-sort-number').innerHTML = '';
    
    let stop = 0;

    let numbers = [];

    while (stop < x) {
        a = 1
        b = 100

        let random = Math.floor(Math.random() * (b - a)) + a;

        alert(
            (random === 33) ?
                `Número ${random}. Existe um ganhador!` :
                `Número ${random}. Não existe um ganhador!`
        );

        numbers.push(random);

        stop++;
    }

    console.log(numbers)

    let title = document.querySelector('.content-main-01-sort-title');
    title.innerHTML = 'Os números sorteados:';

    let showNumbers = document.querySelector('.content-main-01-sort-number');

    numbers.map((item) => {
        let p = document.createElement('p');
        let text = document.createTextNode(item);

        p.appendChild(text);

        showNumbers.appendChild(p);
    });
}

let button = document.querySelector('#button').addEventListener('click', () => {
    let numberSort = document.querySelector('#sort').value;

    drawNumber(numberSort);
});

