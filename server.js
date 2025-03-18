const express = require("express"); // Importamos Express
const path = require("path"); // Módulo para manejar rutas de archivos

const app = express(); // Creamos la app de Express

app.use(express.static(path.join(__dirname, "dist"))); // Servimos archivos desde 'dist/'
app.use(express.json()); // Middleware para procesar datos JSON en las solicitudes

// **ENDPOINT PRINCIPAL**: Redirigir "/" a "/logueo"
app.get("/", (req, res) => {
    res.redirect("/logueo");
});

// **ENDPOINT PARA LOGUEO**
app.get("/logueo", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/views/logueo.html"));
});
// **ENDPOINT PARA INICIO**
app.get("/inicio", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/views/inicio.html"));
});

// **ENDPOINT PARA settings**
app.get("/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/views/settings.html"));
});


// **ENDPOINT PARA LOGIN (Validación de usuario y contraseña)**
app.post("/login", (req, res) => {
    const { usuario, contraseña } = req.body; // Extraemos los datos enviados desde el frontend

    console.log("📩 Datos recibidos en el servidor:", usuario, contraseña);

    // Definimos las credenciales correctas (esto normalmente vendría de una base de datos)
    const usuarioCorrecto = "admin";
    const contraseñaCorrecta = "1234";

    // Validamos si los datos coinciden con las credenciales correctas
    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        res.json({ success: true }); // Respuesta positiva si el login es correcto
    } else {
        res.json({ success: false }); // Respuesta negativa si las credenciales son incorrectas
    }
});

// **Iniciar el servidor**
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});