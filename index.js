import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import { autenticar, registrar } from "./controllers/usuarioController.js";
import { guardar, obtenerComentarios } from "./controllers/comentarioController.js";
const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


// Habilitar CORS
app.use(cors());

// Uso de la función middleware
app.post('/api/login', autenticar);

app.post('/api/register', registrar);
app.post('/api/commit', guardar);
app.get('/api/comentarios',obtenerComentarios);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
