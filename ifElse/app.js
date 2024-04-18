let nome = prompt("Escreva o seu nome");
let idade = Number(prompt("Informe sua idade"));

/*Estrutura if else, condicional, se o que estiver dentro da condição for verdadeiro, execute esse código, 
caso contrário, execute esse outro código*/
// if(idade >= 18){
//     alert(`Olá, ${nome}, você tem ${idade} anos, está autorizado`);
// }else{
//     alert(`Olá, ${nome}, você tem ${idade} anos, precisa de um responsável`);
// }

/* Temos como colocar mais de uma condição dentro do if else */
let acompanhado = false;

if(idade >= 18){
    alert(`Olá, ${nome}, você tem ${idade} anos, está autorizado`);
}else if( idade < 18 && acompanhado === true){
    alert(`Olá, ${nome}! Você tem ${idade}, mas está acompanhado! Liberado!`);
}else{
    alert(`Olá, ${nome}! Você é menor de idade, precisa estar acompanhado de um responsável!`);
}

// Operador ternário, uma forma abreviada de escrever o if/else
/* Essa variável pode ser puxada para dentro do bloco if/else apenas para demonstrar a funcionalidade
 dela nesse anotação*/
let verifica = idade >= 18 ? `Liberado` : `Não está liberado`;