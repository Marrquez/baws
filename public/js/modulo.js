function destacar(mensaje){
    console.log(mensaje);
    console.log(repetir('-', mensaje.length));
};

function repetir(caracter, num){
    return new Array(num + 1).join(caracter);
};

exports.destacar = destacar; // Módulo en forma de propiedad
exports.repetir = repetir; // Módulo en forma de propiedad

/*module.exports = {
    destacar: destacar,
    repetir: repetir
};*/ // Módulo en forma de objeto

//module.exports = destacar; // Módulo en forma de función

//module.exports = "Hola mundo desde el módulo"; // Módulo en forma de string