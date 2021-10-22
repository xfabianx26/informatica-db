const express = require('express')
const app = express()

const dotenv = require('dotenv')

dotenv.config({path: './.env'})


/* set PORT=7500 variable de entor de window */
const puerto = process.env.PORT || 3000;




app.listen(puerto, () => {
    console.log("Servidor esta corriendo en el puerto "+puerto);
})