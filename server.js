const express = require("express"); // Importamos Express
const path = require("path"); // Módulo para manejar rutas de archivos

const app = express(); // Creamos la app de Express

app.use(express.static(path.join(__dirname, "dist"))); // Servimos archivos desde 'dist/'

// **ENDPOINT PRINCIPAL**: Redirigir "/" a "/logueo"
app.get("/", (req, res) => {
    res.redirect("/logueo");
});

// **ENDPOINT PARA LOGUEO**
app.get("/logueo", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/views/logueo.html"));
});

// **Iniciar el servidor**
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
