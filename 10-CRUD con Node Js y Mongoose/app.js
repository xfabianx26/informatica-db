const mongoose = require('mongoose');



const url = 'mongodb://localhost/mongo1_curso'

mongoose.connect(url)

.then(() => console.log('CONECTADO A MONGO'))
.catch((err) => console.log(err))


/* esquema */
const personaSchema = mongoose.Schema({
    nombre: String,
    edad: Number,
    pais: String
}, {versionKey: false})


const PersonaModel = mongoose.model('personas', personaSchema)



/* Mostar */
const mostar = async() => {
    const personas = await PersonaModel.find() /* utilizamo el modelo y tramemos todo los resultados */
    console.log(personas);
}

/* Crear */
const crear = async()=> {
    const persona = new PersonaModel({ /* utilizamos el modelo se lo asignamos persona */
        nombre: 'Churita',
        edad: 22,
        pais: 'Colombia'
    })
    const resultado = await persona.save() /* guardamos */
}

const actualizar = async(id) => {
    const persona = await PersonaModel.updateOne({_id:id},{

        $set:{
            nombre: 'sulia',
            edad: 22,
            pais: 'españa'
        }

    })
}


const eliminar = async(id) => {
    const persona = await PersonaModel.deleteOne({_id:id})
    console.log(persona);
}

//mostar()
// crear()
// actualizar('6171b9a259e99dde9e33c2bb')
eliminar('6171b9a259e99dde9e33c2bb')
