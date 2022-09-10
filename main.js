/**
 * 1.- Importar Express y sus funciones
 * 2.- Hacer instancia de la aplicación
 * 3.- Middlewares
 * 4.- Declarar las rutas
 * 5.- Levantar el servidor
 */

const mascotas = [
  {
    tipo: "Perro",
    edad: 5,
    color: "Blanco",
    peso: "8 kg",
    nombre: "Pedro",
  },
  {
    tipo: "Gato",
    edad: 2,
    color: "negro",
    peso: "3 kg",
    nombre: "Michi",
  },
];

//! 1.- Importar todas nuestras bibliotecas
const express = require("express");

//! 2.- Hacer instancia de la aplicación de express y <>
const app = express();

//! 3.- Middlewares
app.use(express.json());

//! 4.- Declarar las rutas
app.get("/", (req, res) => {
  res.json({ mensaje: "Hola" });
});

// CREATE - POST
app.post("/mascota", (req, res) => {
  const { tipo, edad, color, peso, nombre } = req.body;
  mascotas.push({ tipo, edad, color, peso, nombre });
  res.json({ mensaje: "Mascota registrada", data: mascotas });
});

// READ - GET
app.get("/mascota", (req, res) => {
  console.log("GET:", req.body);
  res.json({ mascotas });
});

//! 5.- Levantar el servidor
app.listen(3001, () => {
  console.log("La aplicación corre en el puerto:" + 3001);
});
