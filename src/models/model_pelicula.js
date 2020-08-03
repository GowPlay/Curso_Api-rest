const { Schema, model } = require('mongoose');

const Pelicula = Schema({
    titulo:         {type: String, require:[true, "Titulo obligatorio"]},
    imagen:         {type: String, require:[true, "Imagen es requerida" ]},
    categoria:      {type: String, require:[true, "Categoria es obligatoria" ]},
    descripcion:    {type: String, require:[true, "descripcion es requerida" ]},
    url:            {type: String, require:[true, "url es requerida" ]},
})

module.exports = model('peliculas', Pelicula);