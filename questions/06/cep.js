function clearInputs() {
    document.querySelectorAll('#logradouro, #bairro, #uf, #cidade').forEach((item) => {
        item.value = '';
    });
}

function callContent(content) {
    if (content) {
        document.querySelector('#logradouro').value = content.logradouro;
        document.querySelector('#bairro').value = content.bairro;
        document.querySelector('#uf').value = content.uf;
        document.querySelector('#cidade').value = content.localidade;
    } else {
        clearInputs();
        alert('CEP não encontrado!');
    }
}

function searchCep(cep) {
    let validateCep = cep.replace('-', '');

    console.log(validateCep);
    if (validateCep != '') {
        document.querySelector('#logradouro').value = 'Carregando...';
        document.querySelector('#bairro').value = 'Carregando...';
        document.querySelector('#uf').value = 'Carregando...';
        document.querySelector('#cidade').value = 'Carregando...';

        let script = document.createElement('script');

        script.src = `https://viacep.com.br/ws/${cep}/json/?callback=callContent`;

        document.body.appendChild(script);
    } else {
        clearInputs();
    }

    let kkk = document.querySelector('#logradouro').value;
    if (typeof kkk == 'undefined') {
        alert('sds');
    }
}

