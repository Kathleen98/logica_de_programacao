function sortear(){
    // Criando variáveis para puxar os campos onde vamos obter as informações
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    const numerosSorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while(numerosSorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        numerosSorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>
    `
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirNumerosSorteados(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""
}


function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}



function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value= '';
    alterarStatusBotao()
}