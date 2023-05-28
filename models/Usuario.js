import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import generarId from '../helpers/generarId.js'

const usuarioSchema = mongoose.Schema({
    nombre:  String,
       
    password: String,
        
    email:  String,
        
});


const Usuario = mongoose.model("Usuarios", usuarioSchema);
export default Usuario;