const path = require('path'); // Importamos el módulo 'path' de Node.js para manejar rutas
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development", // Modo desarrollo (puede cambiarse a 'production' para optimización)
    
    entry: "./src/index.ts", // Archivo principal de entrada (TypeScript)
    
    output: {
        filename: "bundle.js", // Archivo de salida con todo el código compilado
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
                { from: "./src/views", to: "views" } // Copia los archivos HTML a 'dist/views/'
            ],
        }),
    ],
};