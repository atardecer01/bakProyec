import ProgeRe1 from "../models/posgresoReligion.js";
// Endpoint para guardar los datos en MongoDB
const guardarPR = async (req, res) => {
  try {

   const newCommentObject = req.body;

    // Verificar si ya existe un comentario con la misma combinación de correo y página
    const existingComment = await ProgeRe1.findOne({
      correo: newCommentObject.correo,
      pagina: newCommentObject.pagina
    }); 

    if (existingComment) {
      console.log('ok')
      return res.status(400);
    }
  


    const comentario = new ProgeRe1(newCommentObject);
    const comentarioGuardado = await comentario.save();
    res.json(comentarioGuardado);
  } catch (error) {
    if (error.name === 'ValidationError') {
     // return res.status(400).json({ error: error.message });
    } else {
      console.log(error);
     // res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};





const posgresoR1 = async (req, res) => {
  try {
    const { correo } = req.query;
    // Buscar los datos en la base de datos por correo
    const datos = await ProgeRe1.find({ correo });

    
    // Obtener la lista de objetos asociados al correo
    const opciones = datos;
    const longitud = opciones ? opciones.length : 0;
    const longitudTotalEsperada =14;
    let valor = Math.round((100 * longitud) / longitudTotalEsperada);
    
    res.json({ valor: valor });
  } catch (error) {
    console.error('Error al obtener las opciones en MongoDB:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las opciones' });
  }
};

    
    export { guardarPR ,posgresoR1};
    