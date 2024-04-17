alert("Boas-vindas");

// variáveis
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

// Operador ternário se "condição" é maior que "comparativo" faça isso, se não faça aquilo
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);


