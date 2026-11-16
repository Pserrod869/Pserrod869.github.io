// Pido los dos números al usuario usando prompt
let entrada1 = prompt("Introduce el primer número:");
let entrada2 = prompt("Introduce el segundo número:");

// Los paso de texto a número para poder sumarlos
let num1 = Number(entrada1);
let num2 = Number(entrada2);

// Calculo la suma
let suma = num1 + num2;

// Muestro el resultado final por la consola
console.log("La suma es: " + suma);