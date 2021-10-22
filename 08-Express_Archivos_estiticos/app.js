const  express = require('express');
const res = require('express/lib/response');
const app = express()
const router = express.Router()



/* 
mis errores
error view era views
*/

app.set('view engine', 'ejs');

// app.use(express.static('public'));
app.use('/recursos', express.static(__dirname+'/public'))


app.get('/', (req, res) => {
    res.render('index');
})


app.listen(4000, (req, res) => {
console.log('Servidor esta corriendo en el port 4000');
})