const mysql = require('mysql')


const conexion = mysql.createConnection({
    host:'localhost',
    database: 'practica-mysql',
    user: 'root',
    password: 'chorete1993'
})

conexion.connect((error) =>{
    if(error){
        throw error
    }else{
        console.log('Conexion exitosa');
    }
})

/* Mostar */
conexion.query('SELECT * FROM persona', function(error, resultados){

    if(error){
        throw error
    }else{
        resultados.forEach(resultado => {
            console.log(resultado);
        });
    }
}) 
/* Insertar */
/* conexion.query('INSERT INTO persona (nombre,telefono) VALUES ("maria","434343344")', function(error, resultados){

        if(error) throw error;
        console.log('Registro agregados', resultados);
}) */
/* Actualizar */
/* conexion.query("UPDATE persona SET nombre='culito', telefono='323323' WHERE id= 2", function(error, results) {
    if(error) throw error;

    console.log('Registro actualizado', results);
}) */
conexion.query("DELETE FROM persona WHERE id= 1", function(error, resultados) {
        if(error) throw error;
        console.log("Registro eliminado", resultados);
})

conexion.end();