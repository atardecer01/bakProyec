import mongoose from "mongoose";

// Define el esquema de datos
const quizleyenda2Schema = new mongoose.Schema({
  correo:String,
  fecha:String,
  intento: Number,
  opciones: Array,
  score : Number
});

// Crea el modelo utilizando el esquema definido
const quizL2Model = mongoose.model('quizL2', quizleyenda2Schema);

export default quizL2Model;
