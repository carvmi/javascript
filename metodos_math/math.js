// Método cos()
var angulo = 45; // Ângulo em graus
var radianos = (angulo * Math.PI) / 180; // Conversão para radianos
var coseno = Math.cos(radianos);
console.log(`O cosseno de ${angulo} graus é: ${coseno}`);


// Método max() e min()
var numeros = [3, 7, 2, 9, 5];
var maximo = Math.max(...numeros);
var minimo = Math.min(...numeros);
console.log(`O valor máximo é: ${maximo}`);
console.log(`O valor mínimo é: ${minimo}`);


// Método random()
var numeroAleatorio = Math.random();
console.log(`Número aleatório entre 0 e 1: ${numeroAleatorio}`);


// Método pow()
var base = 2;
var expoente = 3;
var resultadoPotencia = Math.pow(base, expoente);
console.log(`${base} elevado a ${expoente} é: ${resultadoPotencia}`);
