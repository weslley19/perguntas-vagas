let employees = [
    { nome: "Matheus", cargo: "Secretario", salario: 1500 },
    { nome: "Aline", cargo: "Diretora", salario: 1800 },
    { nome: "José", cargo: "Assistente", salario: 1200 },
    { nome: "Abílio", cargo: "Telefonista", salario: 1280 },
    { nome: "José", cargo: "Segurança", salario: 1600 }
];

let button = document.querySelector('#button').addEventListener('click', () => {
    let ul = document.querySelector('.content-main-01-data-menu-list');
    ul.innerHTML = '';


    let selectIndex = document.querySelector('#select-index').value;
    console.log(selectIndex);

    if (selectIndex == 1) {
        employees.sort(function (a, b) {
            return (a.nome < b.nome) ? -1 : (a.nome > b.nome) ? 1 : 0;
        });
    } else if (selectIndex == 2) {
        employees.sort(function (a, b) {
            return (a.cargo < b.cargo) ? -1 : (a.cargo > b.cargo) ? 1 : 0;
        });
    } else {
        employees.sort(function (a, b) {
            return (a.salario < b.salario) ? -1 : (a.salario > b.salario) ? 1 : 0;
        });
    }

    
    employees.forEach((item) => {
        let li = document.createElement('li');
        li.classList.add('content-main-01-data-menu-list-item');
        let text = document.createTextNode(item.nome + ' | ' + item.cargo + ' | ' + item.salario);

        li.appendChild(text);

        ul.appendChild(li);
    });
});

