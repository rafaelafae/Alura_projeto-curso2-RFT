//Criação de variável para editar a interface do html, adicionando informações na tela;

//Itém a ser editado na página index.html, Na linha 22 do arquivo HTML, temos <h1></h1>. Geralmente, a tag h1 é usada para dar nome aos títulos da página.
//Esta tag vai de h1 até h6, como se fossem níveis, sendo h1 o principal;

//Para alterar algum conteúdo do HTML com o JavaScript, utilizamos a palavra reservada chamada document;

//E para captar o item que desejamos alterar, utilizamos querySelector, que deve ser escrito dessa forma, com S maiúsculo, por ser um case sensitive;

//Para inserir o texto dentro desta tag, utilizamos .innerHTML, que significa "dentro do HTML";

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

//No código HTML, na linha 23, temos um parágrafo, representado pela tag "p";

//<p class="texto__paragrafo"></p> (index.html)
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Habilitar botão da linha 27: <button onclick="verificarChute()" class="container__botao">Chutar</button>

//NOMES DE VARIÁVEIS E FUNÇÕES SÃO IMPORTANTE

function verificarChute() {
    console.log('O botão foi clicado!')
};