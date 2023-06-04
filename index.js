import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import { autenticar, registrar } from "./controllers/usuarioController.js";
import { guardar } from "./controllers/comentarioController.js";
const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


// Habilitar CORS
app.use(cors());

// Uso de la función middleware
app.post('/api/login', autenticar, (req, res) => {
    // Se llega a este punto solo si la autenticación fue exitosa
    res.status(200).json('ok');
});
app.post('/api/register', registrar);
app.post('/api/commit', guardar);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
