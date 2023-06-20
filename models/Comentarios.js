import mongoose from "mongoose";

const comentarioSchema = mongoose.Schema({
    coment: String,
    correo: String,
    responde: String,
    gusta: Intl,
});


const Comentario = mongoose.model("Comentarios", comentarioSchema);
export default Comentario;
