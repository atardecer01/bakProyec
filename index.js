import express from "express"
import dotenv from 'dotenv';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express(); 

app.use(express.json());

dotenv.config();

import mongoose from "mongoose";


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


const dominiosPermitidos = ['http://localhost:3000'];

const corsOptions = {
    origin: ['https://front-topaz-beta.vercel.app/',dominiosPermitidos],
    methods: ["GET","POST"]
  };

app.use(cors(corsOptions))

app.use("/api", usuarioRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
