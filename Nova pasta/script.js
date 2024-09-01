alert('Bem Vindo');

let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroChave = 7;

console.log('Resultado:', chute == numeroChave);

if (chute == numeroChave) {
    alert('Acertou');
} else {
    console.log('Valor do número:', numeroChave);
    alert('O número secreto era ' + numeroChave);
}