import { ObjectId, Int32, Date } from "mongodb";
import mongoose from "mongoose";

const comentarioSchema = mongoose.Schema({
    comentario: String,
    comentadorID: ObjectId,
    comentadoID: ObjectId,
    fecha: Date,
    hora: Int32
});


const Comentario = mongoose.model("Comentarios", comentarioSchema);
export default Comentario;
