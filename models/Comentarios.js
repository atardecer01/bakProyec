import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const comentarioSchema = mongoose.Schema({
    comentario: String,
    comentadorID: ObjectId,
    comentadoID: ObjectId,
    fecha: Date,
    hora: Number
});


const Comentario = mongoose.model("Comentarios", comentarioSchema);
export default Comentario;
