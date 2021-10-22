const express = require('express')
const Sequelize = require('sequelize')

const app = express()

/* Definimos los parámetros de conexión */
const sequelize = new  Sequelize('postres_db','root', 'chorete1993',{

    host: 'localhost',
    dialect: 'mysql'

})

/* Definimos el modelo */
const postresModel = sequelize.define('postres', {
    "id": {type:Sequelize.INTEGER, primaryKey:true},
    "nombre": Sequelize.STRING,
    "calorias": Sequelize.STRING
})
/* conectar */
sequelize.authenticate()
    .then(()=> {
        console.log('Conexion a la base de datos ');
    })
    .catch( err => console.log('Error conexión bd',err))



postresModel.findAll({attributes:['nombre','calorias']})
.then(postres => {
    const resultados = JSON.stringify(postres)
    console.log(resultados);
})
.catch(err => {
    console.log(err);
})


app.listen(3000, () => {
    console.log(`Esta ok!!`);
})