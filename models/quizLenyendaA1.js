import mongoose from "mongoose";

// Define el esquema de datos
const quizleyenda1Schema = new mongoose.Schema({
  correo:String,
  fecha:String,
  intento: Number,
  opciones: Array,
  score : Number
});

// Crea el modelo utilizando el esquema definido
const quizL1Model = mongoose.model('quizL1', quizleyenda1Schema);

export default quizL1Model;
