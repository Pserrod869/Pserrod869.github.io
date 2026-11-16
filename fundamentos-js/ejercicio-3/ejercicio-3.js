// Creo el objeto persona con sus datos básicos
const persona = {
    nombre: "Laura", // texto
    edad: 28, // número
    activo: true, // verdadero o falso
    pareja: null, // vacío a propósito
    telefono: undefined, // todavía sin definir
    id: Symbol("id"), // identificador único
    seguidores: 1500000000000n, // número muy grande
    
    // Una lista con las cosas que le gustan
    aficiones: ["Leer", "Correr", "Programar"],
    
    // Otro objeto dentro con su dirección
    direccion: {
        calle: "Calle Mayor",
        numero: 10,
        ciudad: "Madrid"
    }
};

// Muestro el objeto normal y en forma de tabla por consola
console.log(persona);
console.table(persona);