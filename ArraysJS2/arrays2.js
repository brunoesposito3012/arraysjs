// let para criar a variavel 'titulo'
let titulo = document.querySelector('h1'); //document.querySelect('h1') para conectar ao elemento h1 do HTML
titulo.innerHTML = 'Hora do Desafio!';

//criar a função verificarClick que está no HTML no onclick
function verificarClick(){
    console.log('O botão foi clicado');
}; // a função criada vai apresentar uma mensagem no console sempre que for clicado

function mensagemAlert(){
    alert('Eu amo JS');
};
function promptCidade(){
    cidade = prompt('Qual o nome dessa cidade?');
    alert(`Estive em ${cidade} e lembrei de você` );
};
function numeroSoma(){
    numero1 = parseInt(prompt('Informe o primeiro número: '));
    numero2 = parseInt(prompt('Informe o segundo número: '));
    soma = (numero1 + numero2);
    alert(`A soma dos números ${numero1} e ${numero2} é: ${soma}`);
};
