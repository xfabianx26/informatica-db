/* 
1) cliente realiza un login
2)el cliente es validado en el servidor y se crea un nuevo token con la llave secreta
3) el servidor envia  token al cliente
4)el cliente almacena el el navegador el token para su uso y lo envia en cada peticion para su autorizacion
5)el servidor verifica la firma del token y su caducidad. Comprueba si el usuario tiene permiso  al recurso
6)Los permiso del usuario son correcto
*/
const express = require('express')
const app = express()


const jwt = require('jsonwebtoken')

const keys = require('./setting/keys')

app.set('key', keys.key)
 /* quitar el erro de variable no difinidas */
 app.use(express.urlencoded({extended:false}))  
 app.use(express.json()) 

app.get('/', (req, res) => {
    res.send("hola fabian")
})




app.listen(3000, () => {
    console.log('Servidor esta corriendo en port 3000');
})

/* login */
app.post('/login', (req, res) => {
    
    if(req.body.usuario == 'fabian' && req.body.pass == '123'){
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get('key'), {
            expiresIn: '7d'
        });

        res.json({
            message: '¡Autenticación exitosa!',
            token: token
        })
    }else{
        res.json({
            message: 'Usuario y/o password incorrecto'
        })
    }
})

/* midelware */

const verificacion = express.Router();


verificacion.use((req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
     console.log(token);

     if(!token){
        res.status(401).send({

            error: 'Es necesario el token para iniciar'
        })
        return
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length)
        console.log(token);
    }
     if(token){
        jwt.verify(token, app.get('key'), (error, decoded) => {
            if(error)
            {
                return res.json({
                    message: 'El token no es válido'
                })
            }else{
               req.decoded = decoded
               next()
            }
        })
    }  
})


app.get('/info', verificacion, (req, res) => {
    res.json('Información contable privada')
   
})