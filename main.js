/**
 * 1.- Importar Express y sus funciones
 * 2.- Hacer instancia de la aplicación
 * 3.- Middlewares
 * 4.- Declarar las rutas
 * 5.- Levantar el servidor
 */

//! 1.- Importar todas nuestras bibliotecas
const express = require('express');

//! 2.- Hacer instancia de la aplicación de express y <>
const app = express();

//! 3.- Middlewares
app.use(express.json());

//! 4.- Declarar las rutas
app.get("/", (req, res)=>{
    res.json({mensaje: 'Hola'})
});

//! 5.- Levantar el servidor
app.listen(3001, ()=>{
    console.log('La aplicación corre en el puerto:'+ 3001)
});
