const express = require('express');
const pelicula = require('../controller/route_pelicula');

const app = express.Router();

// listar peliculas app
app.get('/listPeliculas', pelicula.listarPeliculas);
// listar peliculas web
app.get('/listarContenido', pelicula.listarContenido);

// agregar pelicula post
app.post('/addPelicula', pelicula.addPelicula);

// editar pelicula
    // get - pedir los datos   id
app.get('/editPelicula/:_id', pelicula.editPelicula),
    // post - guardar datos editados
app.post('/edit_Pelicula/:_id', pelicula.edit_Pelicula),

// eliminar pelicula
app.get('/deletPelicula/:_id', pelicula.deletPelicula);


module.exports = app;