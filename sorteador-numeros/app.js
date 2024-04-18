function sortear(){
    // Criando variáveis para puxar os campos onde vamos obter as informações
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

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
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirNumerosSorteados(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""
}

