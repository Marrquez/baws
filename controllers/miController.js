var saludador = require('../models/modelo1');

function saludo (req, res) {
    var nombre = req.query.nombre; //cuando los parámetros vienen de la forma: .../?nombre=miNombre
    var oP = req.params.nombreParametro;
    console.log(oP);
    res.send("<h1> Hola " + saludador.saludar(oP) + "</h1>");
}

function despedida (req, res) {
    var nombre = req.query.nombre;
    var usuarios = [
        {nombre: 'Cristian', apellido: 'Olaya'},
        {nombre: 'Ana', apellido: 'Duran'},
        {nombre: 'Juan', apellido: 'M'}
    ];
    res.render('despedida', {message: saludador.saludar(nombre), usuarios: usuarios});
}

module.exports = {
    saludo: saludo,
    despedida: despedida
};