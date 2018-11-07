module.exports = {
    general: function miGeneralMiddleware(req, res, next){
        console.log("Middleware general");
        next();
    },
    miCustomMiddleware: function miCustomMiddleware(req, res, next){
        console.log("Middleware dentro de una ruta");
        next();
    },
    obtenerAsyncData: function obtenerAsyncData(req, res, next){
        res.locals.otroParametro = "Este es un parametro desde un middleware"; //esta es otra forma de pasar parametros al template, con esto no se requeriría la segunda parte del res.render.
        next();
    }
};