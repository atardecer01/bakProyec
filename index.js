import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import { autenticar, registrar, olvidePassword,nuevoPassword, cambiarDatos} from "./controllers/usuarioController.js";
import { guardar, obtenerComentarios } from "./controllers/comentarioController.js";
import { guardarDatos,obtenerOpcionesPorCorreo } from "./controllers/quiz1D.jController.js";
import  { guardarDatosA ,obtenerOpcionesPorCorreoA} from "./controllers/quizArte1Controller.js";
import  { guardarDatosB ,obtenerOpcionesPorCorreoB} from "./controllers/quizReligion1Controller.js";
import  { guardarDatosC ,obtenerOpcionesPorCorreoC} from "./controllers/quiz1JController.js";
import  { guardarDatosE ,obtenerOpcionesPorCorreoE} from "./controllers/quizLeyenda1Controller.js";
import  { guardarDatosF ,obtenerOpcionesPorCorreoF} from "./controllers/quizLeyenda2Controller.js";
import  { guardarDatosG ,obtenerOpcionesPorCorreoG} from "./controllers/quizGobernanteController.js";
import  { guardarDatosH ,obtenerOpcionesPorCorreoH} from "./controllers/quizTextilController.js";
import { guardarPJ,posgresoJ1} from "./controllers/pogreJ1Controller.js";
import { guardarPR ,posgresoR1} from "./controllers/pogreR1Controller.js";
import  { guardarPA ,posgresoA1} from "./controllers/pogreA1Controller.js";

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


// Habilitar CORS
app.use(cors());


app.post('/api/login', autenticar);
app.post('/api/resetDatos', cambiarDatos);
app.post('/api/register', registrar);
app.post('/api/commit', guardar);
app.get('/api/comentarios',obtenerComentarios);
app.post('/api/resetPasword', olvidePassword);
app.post('/api/newPassword',nuevoPassword);
app.post('/api/quizd',guardarDatos);
app.get('/api/recuperarquizd',obtenerOpcionesPorCorreo);
app.post('/api/quizA',guardarDatosA);
app.get('/api/recuperarquizA',obtenerOpcionesPorCorreoA);
app.post('/api/quizB',guardarDatosB);
app.get('/api/recuperarquizB',obtenerOpcionesPorCorreoB);
app.post('/api/quizC',guardarDatosC);
app.get('/api/recuperarquizC',obtenerOpcionesPorCorreoC);
app.post('/api/quizE',guardarDatosE);
app.get('/api/recuperarquizE',obtenerOpcionesPorCorreoE);
app.post('/api/quizF',guardarDatosF);
app.get('/api/recuperarquizF',obtenerOpcionesPorCorreoF);

app.post('/api/quizG',guardarDatosG);
app.get('/api/recuperarquizG',obtenerOpcionesPorCorreoG);


app.post('/api/quizH',guardarDatosH);
app.get('/api/recuperarquizH',obtenerOpcionesPorCorreoH);

app.post('/api/progresoJeraquia',guardarPJ);
app.get('/api/recuperarprogresoJeraquia',posgresoJ1);


app.post('/api/progresorReligion',guardarPR);
app.get('/api/recuperarprogresoReligion',posgresoR1);

app.post('/api/progresorArte',guardarPA);
app.get('/api/recuperarprogresoArte',posgresoA1);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
