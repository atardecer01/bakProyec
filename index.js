import express from "express";
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js';
import mongoose from "mongoose";

const app = express();

app.use(express.json());

dotenv.config();

try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const url = `${db.connection.host}:${db.connection.port}`
    console.log(`MongoDB conectado en: ${url}`);

} catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
}

app.use("/api", usuarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
