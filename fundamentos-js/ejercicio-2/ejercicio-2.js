let numeros = [];

for (let i = 0; i < 100; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio);
}

console.log("Array original de 100 números:");
console.table(numeros);

let numerosFiltrados = numeros.filter(function(num) {
    return num >= 20 && num <= 50;
});

console.log("Números filtrados (entre 20 y 50):");
console.table(numerosFiltrados);