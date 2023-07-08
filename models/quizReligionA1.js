import mongoose from "mongoose";

// Define el esquema de datos
const quizReligionSchema = new mongoose.Schema({
  correo:String,
  fecha:String,
  intento: Number,
  opciones: Array,
  score : Number
});

// Crea el modelo utilizando el esquema definido
const quizR1Model = mongoose.model('quizR1', quizReligionSchema);

export default quizR1Model;
