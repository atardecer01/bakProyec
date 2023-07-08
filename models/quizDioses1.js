import mongoose from "mongoose";

// Define el esquema de datos
const quizD1Schema = new mongoose.Schema({
  correo:String,
  fecha:String,
  intento: Number,
  opciones: Array,
  score : Number
});

// Crea el modelo utilizando el esquema definido
const quizD1Model = mongoose.model('quizD1', quizD1Schema);

export default quizD1Model;
