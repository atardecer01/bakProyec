import mongoose from "mongoose";

// Define el esquema de datos
const quizTextilSchema = new mongoose.Schema({
  correo:String,
  fecha:String,
  intento: Number,
  opciones: Array,
  score : Number
});

// Crea el modelo utilizando el esquema definido
const quizT1Model = mongoose.model('quizT1', quizTextilSchema);

export default quizT1Model;
