import quizL1Model from "../models/quizLenyendaA1.js";

const guardarDatosE = async (req, res) => {
    try {
      const { correo } = req.body;
      console.log('hola')
  
      // Buscar el último intento del usuario por correo y ordenarlo en orden descendente
      const ultimoIntento = await quizL1Model.findOne({ correo })
        .sort({ intento: -1 })
        .exec();
  
      if (ultimoIntento) {
        // Incrementar el valor de intento en 1
        const nuevoIntento = ultimoIntento.intento + 1;
        ultimoIntento.intento = nuevoIntento;
        const datosGuardados = await ultimoIntento.save();
        res.json(datosGuardados);
        console.log('Datos actualizados en MongoDB:', datosGuardados);
        return datosGuardados;
      }
  
      // Guardar nuevos datos
      const newData = new quizL1Model(req.body);
      const datosGuardados = await newData.save();
      res.json(datosGuardados);
      console.log('Datos guardados en MongoDB:', datosGuardados);
      return datosGuardados;
    } catch (error) {
      console.error('Error al guardar los datos en MongoDB:', error);
      throw error;
    }
  };
  
    const obtenerOpcionesPorCorreoE = async (req, res) => {
      try {
        const { correo } = req.query;
       
        // Buscar los datos en la base de datos por correo
        const datos = await quizL1Model.findOne({ correo });
     console.log(datos)
        if (!datos) {
          //throw new Error('No se encontraron datos para el correo especificado');
          return res.json([]);
  
        }
    
        // Devolver el array de opciones
        const opciones = datos.opciones;
    
        res.json(opciones);
        console.log('Opciones encontradas en MongoDB:', opciones);
        return opciones;
      } catch (error) {
        console.error('Error al obtener las opciones en MongoDB:', error);
        res.status(500).json({ error: 'Ocurrió un error al obtener las opciones' });
      }
    };
    
    
    
    export { guardarDatosE ,obtenerOpcionesPorCorreoE};