import Comentario from "../models/Comentarios.js";



const guardar = async (req, res) => {
  
    try {
        //Guardar un nuevo Usuario
        const comentario = new Comentario(req.body);
        const commitGuardado = await comentario.save();

        res.json(commitGuardado);
    } catch (error) {
        console.log(error)
    }
};


export {
    guardar
}