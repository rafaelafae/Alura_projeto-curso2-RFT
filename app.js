/* Criação de variável para editar a interface do html, adicionando informações na tela;
Itém a ser editado na página index.html, Na linha 22 do arquivo HTML, temos <h1></h1>. Geralmente, a tag h1 é usada para dar nome aos títulos da página.
Esta tag vai de h1 até h6, como se fossem níveis, sendo h1 o principal;
Para alterar algum conteúdo do HTML com o JavaScript, utilizamos a palavra reservada chamada document;
E para captar o item que desejamos alterar, utilizamos querySelector, que deve ser escrito dessa forma, com S maiúsculo, por ser um case sensitive;
Para inserir o texto dentro desta tag, utilizamos .innerHTML, que significa "dentro do HTML" /

/* As variáveis abaixo fazem a mesma função, mesmo pegando elementos diferentes para atribuir. Então este código anterior será transformado em função */

/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

//No código HTML, na linha 23, temos um parágrafo, representado pela tag "p";

//<p class="texto__paragrafo"></p> (index.html)
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

/* Sempre que temos padrão de código ou um código muito parecido, onde apenas alguns detalhes são modificados, podemos isolar esse comportamento em uma função.
Transformando a codificação anterior em função, para facilitar e reduzir as linhas do código */

/* Inicio do código - (importante que as variáveis fiquem no inicio do código) */
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

/* Executando a função */
exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', 'Escolha um número entre 1 e 10');

/* Habilitar botão da linha 27: <button onclick="verificarChute()" class="container__botao">Chutar</button>

NOMES DE VARIÁVEIS E FUNÇÕES SÃO IMPORTANTE */
function verificarChute() {
    /*Criando a interação do usuário*/
    let chute = document.querySelector('input').value;
    /* Uso de boolean - verdadeiro ou falso */
    console.log(chute == numeroSecreto);
};

/*Necessário colocar return, para que essa função guarde um número dentro da variável criada no inicio deste código*/
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
};

/* input = entrada do usurário
Verificamos a linha 25 do código HTML, onde escrito input do tipo número de 1 a 10.: 
<input type="number" min="1" max="10" class="container__input">
*/