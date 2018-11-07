var express = require('express');
var port = process.argv[2] || 8000;
var routes = require('./config/routes');
var exphbs  = require('express-handlebars'); //para usar handlebars
var middlewares = require('./middlewares/middlewares');
var bodyParser = require('body-parser'); //para parsear la data de los posts methods

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * [optional]Handlebars to use template engine handlebars
 */
var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        helperList: function(elementos, options){
            if(!elementos){
                return '';
            }

            var ans = "<ul>";

            elementos.forEach(function(elemento){
                ans += "<li>" + options.fn(elemento) + "</li>";
            });

            ans += "</ul>";
            return ans;
        }
    }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// [optional]Handlebars

app.use(middlewares.general);
routes(app);

app.listen(port, function(){  // Indicamos el puerto por el cual escuchar
    console.log("Esperando request en el puerto " + port);
});
