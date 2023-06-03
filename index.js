import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import Usuario from "./models/Usuario.js";
import { autenticar } from "./controllers/usuarioController.js";
import usuarioRoutes from './routes/usuarioRoutes.js'


const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


// Habilitar CORS
app.use(cors());

// Uso de la función middleware

app.use("/api", usuarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
