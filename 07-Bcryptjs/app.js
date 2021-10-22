const express = require('express')
const app = express()
const dotevn = require('dotenv')
const bcryptjs = require('bcryptjs')


app.use(express.urlencoded({extended: false})) /* captura los dato usar json */
app.use(express.json())



dotevn.config({path: './config/.env'})


/* ESTO ES DE FORMA ASINCRONA */
app.post('/login', async(req,res) => {
    const user = req.body.user;
    const password = req.body.password

    if(user == 'fabian' && password == '123' ){
       let passwordHash = await bcryptjs.hash(password, 8)
        res.json({
            message: 'Autenticado exitosamente',
            passwordHash: passwordHash
        })
    }else{
        res.json({
            message: 'Ingrese bien las credenciales'
        })
    }
});

/* SÍNCRONA */
/* app.post('/login', (req,res) => {
    const user = req.body.user;
    const password = req.body.password

    if(user == 'fabian' && password == '123' ){
       let passwordHash =  bcryptjs.hashSync(password, 9)
        res.json({
            message: 'Autenticado exitosamente',
            passwordHash: passwordHash
        })
    }else{
        res.json({
            message: 'Ingrese bien las credenciales'
        })
    }
}); */


/* COMPARAMOS LAS PASSWORD */
app.get('/compare', (req, res) => {
    let hashSaved = '$2a$08$84tb6UqmMQqr.bbLvZMebOtIdAch6kp5BJUCQRloeVBrr/uDCaktC';
    let compare =  bcryptjs.compareSync('123',hashSaved)
    if(compare){
        res.json('SON IGUALES')
    }else{
        res.json('NO SON IGUALES')
    }
});

const puerto = process.env.PORT;

app.listen(puerto, function() {
    console.log("El servidor esta corriendo en el puerto: " +puerto);
})





