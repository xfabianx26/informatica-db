const express = require('express') /* libreria  que nos permite trabajar con un servidor local */

const app = express();

/* req -> es la peticion cliente | res   */
app.get('/', function(req, res) {
  res.send('Hello world')
})

app.get('/contacto', (req, res) => {
   res.send('Sección de contacto')
})


app.listen(3000, () => { 
  console.log("el servidor esta corriendo en el puerto 3000");
})