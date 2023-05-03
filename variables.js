// String
var bootcamp = "Henry";

console.log(bootcamp)
// Números
var numeroEntero = 17;
var numeroNegativo = -4;
var numeroDecimal = 11.75;

console.log(numeroDecimal,"\n",numeroNegativo,"\n",numeroDecimal)
// Booleanos
var estoyEntendiendo = true;
var estoyAburrido = false;

console.log(estoyAburrido, "\t", estoyEntendiendo);
// Undefined
var cajon1;
console.log(cajon1);

// Null
var sinNada = null;
console.log(sinNada)

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   let symbol = '!'
   return(str + symbol)
}
console.log(
    agregarSimboloExclamacion("hello world")

)