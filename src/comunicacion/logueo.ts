document.addEventListener("DOMContentLoaded", () => {
    // Capturamos el formulario de login
    const formularioLogin = document.getElementById("formulario-login") as HTMLFormElement | null;

    if (!formularioLogin) {
        console.error("❌ No se encontró el formulario. Verifica el ID en logueo.html.");
        return;
    }

    console.log("✅ El formulario se ha encontrado correctamente", formularioLogin);

    formularioLogin.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario

        // Capturamos los valores ingresados por el usuario en los inputs
        const usuario = (document.getElementById("username") as HTMLInputElement).value;
        const contraseña = (document.getElementById("password") as HTMLInputElement).value;

        console.log("📩 Datos capturados:");
        console.log("Usuario:", usuario);
        console.log("Contraseña:", contraseña);

        // Enviamos los datos al backend usando fetch()
        const respuesta = await fetch("/login", {
            method: "POST", // Método HTTP para enviar los datos
            headers: {
                "Content-Type": "application/json" // Indicamos que enviamos datos en formato JSON
            },
            body: JSON.stringify({ usuario, contraseña }) // Convertimos los datos a formato JSON antes de enviarlos
        });

        // Convertimos la respuesta del servidor en un objeto JavaScript
        const datos = await respuesta.json();
        console.log("📨 Respuesta del servidor:", datos);

        // Si el servidor responde con { success: true }, redirigimos a la página principal
        if (datos.success) {
            window.location.href = "/inicio"; // Redirige si el login es exitoso
        } else {
            alert("❌ Usuario o contraseña incorrectos."); // Muestra un mensaje de error si las credenciales no son válidas
        }
    });
});