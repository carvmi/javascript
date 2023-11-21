// Função para obter os primeiros n múltiplos de um número
function getMultiples(number, n) {
    const multiples = [];
    for (let i = 1; i <= n; i++) {
        multiples.push(number * i);
    }
    return multiples;
}


// Função para preencher a matriz
function fillMatrix(rows, columns) {
    const matrix = [];
    for (let i = 2; i <= 5; i++) {
        matrix.push(getMultiples(i, columns));
    }
    return matrix;
}


// Função para exibir a matriz formatada
function printMatrix(matrix) {
    matrix.forEach(row => {
        console.log(row.join('\t'));
    });
}


// Criar e preencher a matriz
const matriz = fillMatrix(4, 5);


// Imprimir a matriz
printMatrix(matriz);
