import mongoose from "mongoose";

// Define el esquema de datos
const quizGobernanteSchema = new mongoose.Schema({
  correo:String,
  fecha:String,
  intento: Number,
  opciones: Array,
  score : Number
});

// Crea el modelo utilizando el esquema definido
const quizG1Model = mongoose.model('quizG1', quizGobernanteSchema);

export default quizG1Model;
