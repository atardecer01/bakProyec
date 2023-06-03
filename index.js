import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express();

app.use(express.json());

dotenv.config();

//conexion a la base de datos
conectarDB();

// Habilitar CORS
app.use(cors());

app.use("/api", usuarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
