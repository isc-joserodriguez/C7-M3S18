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
  {
    tipo: "Perro",
    edad: 5,
    color: "Negro",
    peso: "8 kg",
    nombre: "Cuco",
  },
  {
    tipo: "Gato",
    edad: 2,
    color: "Marrón",
    peso: "3 kg",
    nombre: "Felix",
  },
];

//! 1.- Importar todas nuestras bibliotecas (express y dotenv)
require("dotenv").config();
const express = require("express");

//! 2.- Hacer instancia de la aplicación de express y <>
const app = express();

//! 3.- Middlewares
app.use(express.json());

//! 4.- Declarar las rutas
app.get("/", (req, res) => {
  res.json({ mensaje: "Hola v1.2" });
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

//UPDATE - PUT
app.put("/mascota/:nombre", (req, res) => {
  /* let indice = -1;
  //Buscar y editar.
  for (let i = 0; i < mascotas.length; i++) {
    if (mascotas[i].nombre === req.params.nombre) {
      indice = i;
    }
  } */

  const indice = mascotas.findIndex(
    (mascota) => mascota.nombre === req.params.nombre
  );

  if (indice === -1) {
    res.json({ error: "No se encontró a la mascota" });
    return;
  }

  const {
    tipo = mascotas[indice].tipo,
    edad = mascotas[indice].edad,
    color = mascotas[indice].color,
    peso = mascotas[indice].peso,
    nombre = mascotas[indice].nombre,
  } = req.body;

  mascotas[indice] = {
    tipo,
    edad,
    color,
    peso,
    nombre,
  };

  res.json({ mascotaEditada: mascotas[indice], todasMascotas: mascotas });

  //mongodb.update({id}, {body})
});

//DELETE
app.delete("/mascota/:indice", function (req, res) {
  const [eliminado] = mascotas.splice(+req.params.indice, 1);
  if (!eliminado) {
    res.json({ error: "No existe este elemento" });
    return;
  }
  res.json({
    eliminado,
    mascotas,
  });
});

//! 5.- Levantar el servidor

console.log();
app.listen(process.env.PORT, () => {
  console.log(`
  Bienvenido ${process.env.NOMBRE}.
  La aplicación corre en el puerto: ${process.env.PORT}
  `);
});
