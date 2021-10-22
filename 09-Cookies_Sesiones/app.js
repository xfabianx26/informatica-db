const express =  require('express')
const session =  require('express-session')
const MySQLStore = require('express-mysql-session')
const app = express()


const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'chorete1993',
    database: 'prueba_session'
}

const sessionStore = new MySQLStore(options);

app.use(session ({
    key: 'cookie_usuario',
    secret: '1234567433',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
    
}))


/* sessiones son del lado del servidor 
    las cookies son del lado del cliente
*/

/* app.use(session({
    secret: '123',
    resave: true,
    saveUninitialized: true
}))
 */

app.get('/', (req, res) => {
    req.session.usuario = 'Fabian andres ortiz';
    req.session.rol = 'Admin';
    req.session.visitas = req.session.visitas ? ++req.session.visitas  : 1;
    console.log(req.session);
    res.send(`El usuario <strong>${req.session.usuario}</strong>
     con rol <strong>${req.session.rol}</strong> ha visatado esta página <strong>${req.session.visitas}</strong> veces`)
})

app.listen(3000, () => {
    console.log('El servido esta corriendo en el puerto 3000');
})