const path = require('path'); // Importamos el módulo 'path' de Node.js para manejar rutas
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development", // Modo desarrollo (puede cambiarse a 'production' para optimización)
    
    entry: {
        main: "./src/index.ts", // Archivo principal de entrada (TypeScript)
        logueo: "./src/comunicacion/logueo.ts", // Asegura que logueo.ts se compile
        inicio: "./src/comunicacion/inicio.ts", // Asegurar que inicio.ts se compile
        settings: "./src/comunicacion/paxina.settings.ts" // Asegurar que se compile

    },
    
    output: {
        filename: "javascript/[name].js", // [name] crea un archivo con el nombre de cada entry
        path: path.resolve(__dirname, "dist"), // Carpeta donde se guardará el resultado
    },
    
    module: {
        rules: [
            {
                test: /\.ts$/, // Regla para procesar archivos TypeScript (.ts)
                use: "ts-loader", // Usa 'ts-loader' para convertir TypeScript a JavaScript
                exclude: /node_modules/, // Excluye la carpeta 'node_modules' para no procesarla
            },
            {
                test: /\.css$/, // Regla para procesar archivos CSS
                use: ["style-loader", "css-loader"], // 'css-loader' interpreta el CSS, 'style-loader' lo aplica en el HTML
            }
        ],
    },
    
    resolve: {
        extensions: [".ts", ".js"], // Permite importar archivos sin escribir la extensión (ej: import "./archivo" en vez de "./archivo.ts")
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/views", to: "views" }, // Copia los archivos HTML a 'dist/views/'
                { from: "./src/css", to: "css" }, // Copia los archivos CSS a 'dist/css/'
                { from: "./src/imaxenes", to: "imaxenes" } // Copia las imágenes a 'dist/imaxenes/'
            ],
        }),
    ],
};