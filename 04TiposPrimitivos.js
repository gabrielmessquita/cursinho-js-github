/**
 * PRINCIPAIS TIOS DE DADOS JAVASCRIPT
 * string
 * `olá`, "Olá mundo", 'Hello World'
 * number
 * 3, 2.345, 3e-2
 * boolean
 * true, false
 * undefined
 * tipo de variavel nao inicialiazada
 * null
 * valor nulo: vazio ou descinhecido
 * object
 * conjunto de chave-valor ex: let pessoa = {nome: 'gabriel', idade = '02'}
 * 
 * 
 * obs.: JS é tipado dinamicamente
 * 
 * */

let nome = 'gab';
nome = 02;
console.log(nome);

/**undefined */
let a;
let c = null;
console.log(c);

/** STRING*/
let nome2 = 'Gabri';
let nome3 = "Juliana";
let nome4 = `JulianaMaria`;
const templateString = `meu nome é ${nome2}, nao é ${nome3}`;
console.log(templateString);

/**NUMBER */
const number = 1;
const pi = 3.14;
const exp = 5e6;
console.log(number, pi, exp);

/**BOOLEAN */
    const isJavaScript = true;
    const isJava = false;
    console.log(isJavaScript, isJava);

/**OBJETOS */
let pessoa = {
    nome: 'gabriel',
    sobrenome: 'cavalcante',
    idade: 02,
    isStudent: true,
};
console.log(pessoa);

/**TYPEOF */
typeof number, number;
console.log(typeof number, number); //tipo e valor(number,1)
//if(pessoa === 'object'){// dois(=) compara valor e tres(=) compara valor e tipo}
console.log(typeof 1);
console.log(typeof '1');
console.log(1 ==='1');





