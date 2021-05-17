const express = require('express')
const app = express();
//modulo path es para conciliar la \ de win con la / de unix
const path = require('path');
const ejs = require('ejs')


//.....settings.....
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//.....middlewares..... concepto de express de procesar solicitudes antes de ...

//.....routes.....
app.use(require('./routes'));
//app.get('/', (req, res) => {
    //res.render('index', {title: 'nodeFirst2'})
    //res.sendFile(path.join(__dirname,'/views/index.html'));
    //console.log(path.join(__dirname + '/views/index.html')); NOS DICE LA RUTA COMPLETA DEL ARCHIVO
//});

//.....static files imagenes etc.....

app.use (express.static(path.join(__dirname, '/public')));

//.....listening the server.....
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

console.log('Server works and listening 3000 SEGUIMOS CON EJS 07:29!');
//console.log(__dirname + '/views/index.ejs'); //NOS DICE LA RUTA COMPLETA DEL ARCHIVO
