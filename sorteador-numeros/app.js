function sortear(){
    // Criando variáveis para puxar os campos onde vamos obter as informações
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Variável que vai receber os números sorteados
    let numero;
    // Array para armazenar os números sorteados
    const numerosSorteados = [];

    // Estrutura for "inicializando o indice em 0, enquanto o indice for menor que quantidade, adicione 1"
    // Essa estrutura vai se repetir conforme o número inserido na variável "quantidade"
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        // Estrutura de repetição while, está fazendo uma verificação para saber se no array tem número repetido
        // Caso tenha, ele vai chamar a função para sortear número novamente
        while(numerosSorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        // Caso não tenha, ele vai dar um push no array.
        numerosSorteados.push(numero);
    }

    // variável que está puxando a label para trazer dinamismo no texto após o click no botão para sortear números
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>
    `
    // Função para alterar o status do botão 
    alterarStatusBotao();
}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função que verifica a classe do botão
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


// Função limpa campos
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value= '';
    alterarStatusBotao()
}