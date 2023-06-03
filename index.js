import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';

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

const usuarioSchema = mongoose.Schema({
    nombre: String,
    password: String,
    email: String,
});

const Usuario = mongoose.model("Usuarios", usuarioSchema);

const autenticarMiddleware = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Comprobar si el usuario existe
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(401).json('Credenciales inválidas');
        }

        // Revisar Password
        if (usuario.password === password) {
            req.usuario = usuario; // Agregar el objeto de usuario a la solicitud
            next(); // Llamar al siguiente middleware
        } else {
            return res.status(400).json('Contraseña incorrecta');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('Error interno del servidor');
    }
};

// Habilitar CORS
app.use(cors());

// Uso de la función middleware
app.post('/api/login', autenticarMiddleware, (req, res) => {
    // Se llega a este punto solo si la autenticación fue exitosa
    res.status(200).json('ok');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
