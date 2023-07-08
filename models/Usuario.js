import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    nombre: String,
    password: String,
    email: String,
    token:String,
    foto: String,
});


const Usuario = mongoose.model("Usuarios", usuarioSchema);
export default Usuario;
