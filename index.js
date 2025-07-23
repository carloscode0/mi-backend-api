const express = require('express');
const app = express();
const port = 3000;

// Ruta GET /saludo
app.get('/saludo', (req, res) => {
  res.json({ mensaje: "Hola desde el backend" });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
