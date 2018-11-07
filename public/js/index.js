var fs = require('fs'); //módulo del core de node para lectura de archivos de texto
var params = process.argv[2]; // cuando quiera leer parámetros desde consola
var myModulo = require('./modulo');

/**
 * Usando mis módulos
 */
myModulo.destacar("Mensaje");
console.log(myModulo.repetir("X", 13));

/**
 * Lectura síncrona de archivos
 */
var resultado = fs.readFileSync("localPlainData.txt");
console.log(resultado.toString());

/**
 * Lectura asíncrona de archivos
 */
fs.readFile("localPlainData.txt", function(err, data){
    if(err) throw err;

    console.log("imprimiendo resultado");
    console.log(data.toString());
});