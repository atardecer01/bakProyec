import Comentario from "../models/Comentarios.js";

const guardar = async (req, res) => {
 
  try {
    const comentario = new Comentario(req.body); // Crea una instancia de Comentario con el campo "coment" asignado

    const comentarioGuardado = await comentario.save(); // Guarda el comentario en la base de datos

    res.json(comentarioGuardado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerComentarios = async (req, res) => {
    try {
      const comentarios = await Comentario.find(); // Obtener todos los documentos de la colección Comentario
        console.log(comentarios)
      res.json(comentarios);
    } catch (error) {
      console.log(error);
    }
  };

export { guardar, obtenerComentarios };
