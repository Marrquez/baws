var saludador = require('../controllers/miController');
var middlewares = require('../middlewares/middlewares');

module.exports = function(app) {
    app.get('/saludo/:nombreParametro', [middlewares.miCustomMiddleware, saludador.saludo]);
    app.get('/despedida', [middlewares.obtenerAsyncData, saludador.despedida])
};

