import mongoose from "mongoose";

// Define el esquema de datos
const quizArte1Schema = new mongoose.Schema({
  correo:String,
  fecha:String,
  intento: Number,
  opciones: Array,
  score : Number
});

// Crea el modelo utilizando el esquema definido
const quizA1Model = mongoose.model('quizA1', quizArte1Schema);

export default quizA1Model;
