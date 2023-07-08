import mongoose from "mongoose";

// Define el esquema de datos
const quizJeraquiaSchema = new mongoose.Schema({
  correo:String,
  fecha:String,
  intento: Number,
  opciones: Array,
  score : Number
});

// Crea el modelo utilizando el esquema definido
const quizJ1Model = mongoose.model('quizJ1', quizJeraquiaSchema);

export default quizJ1Model;
