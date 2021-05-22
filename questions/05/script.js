function countVogal(arg) {
    let stringLower = arg.toLowerCase();

    let counter = 0;

    for (let i = 0; i < stringLower.length; i++) {
        let key = stringLower[i];

        if (key == 'a' || key == 'e' || key == 'i' || key == 'o' || key == 'u') {
            counter++;
        }
    }

    console.log(counter)

    document.querySelector('h1').innerHTML = `A palavra que você digitou contém ${counter} vogais`;
}


let button = document.querySelector('#buttonn').addEventListener('click', () => {
    let input = document.querySelector('#vogal').value;

    input.replace(' ', '');

    countVogal(input);
});

