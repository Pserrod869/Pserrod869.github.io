var temporada = 2026;
let producto = "Teclado Mecánico";
const TIENDA = "TechStore";
let categoria = "Periféricos";
let stock = 45;
let precio = 89.99;
let disponible = true;
let descuentoAplicado = null;
let codigoPromocional;
let valoraciones = [5, 4.5, 4, 5];

let fichaProducto = {
  titulo: "Teclado Mecánico",
  unidades: 45,
  enVenta: true
};

function obtenerResumen() {
  return "Artículo: " + producto + " (" + TIENDA + ")";
}

function imprimirDato(dato, nombreVariable) {
  console.log(`${nombreVariable} -> Valor:`, dato, `| Tipo:`, typeof dato);
}

function listarValoraciones() {
  for (let i = 0; i < valoraciones.length; i++) {
    console.log(`valoraciones[${i}] = ${valoraciones[i]} (Tipo: ${typeof valoraciones[i]})`);
  }
}

function ejecutarLog() {
  console.log("--- Inicio de registro con console.log() ---");

  imprimirDato(temporada, "temporada (var)");
  imprimirDato(producto, "producto (let)");
  imprimirDato(TIENDA, "TIENDA (const)");
  imprimirDato(categoria, "categoria");
  imprimirDato(stock, "stock");
  imprimirDato(precio, "precio");
  imprimirDato(disponible, "disponible");
  imprimirDato(descuentoAplicado, "descuentoAplicado");
  imprimirDato(codigoPromocional, "codigoPromocional");
  imprimirDato(valoraciones, "valoraciones");
  imprimirDato(fichaProducto, "fichaProducto");
  imprimirDato(obtenerResumen, "obtenerResumen");

  listarValoraciones();

  if (typeof mostrarResultado === "function") {
    mostrarResultado("Se han listado todas las variables y sus tipos mediante console.log.");
  }
}

function ejecutarInfo() {
  console.info("--- Información del sistema con console.info() ---");
  let textoResumen = obtenerResumen();
  console.info("Resultado de la función:", textoResumen, "| Tipo:", typeof textoResumen);

  if (typeof mostrarResultado === "function") {
    mostrarResultado("console.info ejecutado -> " + textoResumen);
  }
}

function ejecutarError() {
  console.error("--- Simulación de fallo con console.error() ---");
  let cantidadErronea = "veinte";
  let numeroConvertido = Number(cantidadErronea);

  if (isNaN(numeroConvertido)) {
    console.error(`Fallo de conversión: el valor "${cantidadErronea}" genera un NaN.`);
  }

  if (typeof mostrarResultado === "function") {
    mostrarResultado("console.error -> Detectado valor no numérico (NaN) al convertir texto.");
  }
}

function ejecutarDebug() {
  console.debug("--- Trazas internas con console.debug() ---");
  console.debug("Stock inicial:", stock);
  console.debug("Comprobación de null:", typeof descuentoAplicado);
  
  stock -= 1;
  console.debug("Stock actualizado tras venta:", stock);

  if (typeof mostrarResultado === "function") {
    mostrarResultado("console.debug -> Stock actualizado a " + stock + " unidades.");
  }
}

document.getElementById("btn-log").addEventListener("click", ejecutarLog);
document.getElementById("btn-info").addEventListener("click", ejecutarInfo);
document.getElementById("btn-error").addEventListener("click", ejecutarError);
document.getElementById("btn-debug").addEventListener("click", ejecutarDebug);

const botonLimpiar = document.getElementById("btn-limpiar");
if (botonLimpiar && typeof limpiarConsola === "function") {
  botonLimpiar.addEventListener("click", limpiarConsola);
}

ejecutarLog();
ejecutarInfo();
ejecutarError();
ejecutarDebug();