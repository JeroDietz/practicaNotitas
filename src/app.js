const express = require('express');
const app = express();
const path = require('path')
const indexRouter = require('./router/indexRouter');


app.get('/', indexRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Servidor corriendo en el servidor 3000');
    console.log('http://localhost:3000');
})