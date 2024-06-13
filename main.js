const form = document.getElementById('form-addContato');
const nome = [];
const numero = [];

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if(nome.includes(nomeContato.value)){
        alert(`o contato de ${nomeContato.value} já foi inserido`)
    }

    else {
        nome.push(nomeContato.value);
        numero.push(parseFloat(numeroContato.value));

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '<tr/>';

        linhas += linha;
    }

    

    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
