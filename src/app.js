const express = require('express');
const app = express();
const path = require('path')
const indexRouter = require('./router/indexRouter');
//const detailRouter = require('./router/detailController');

app.get('/', indexRouter);
//app.get('/crear', detailRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Servidor corriendo en el servidor 3000');
    console.log('http://localhost:3000');
})