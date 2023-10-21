/**
 * @var
 * antes ES6 ela era unica
 * tem escopo global ou de funcao/local
 * variaveis podem sder declaradas de novo e atualizadas
 */

let nome = 'Gabriel';
let nome2 = 'Mesquita';
nome = 'Biel';
console.log(nome2, nome);

function newfunction(){
let nome = 'gej';
console.log(nome);
}


newfunction();