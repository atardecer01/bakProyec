import Usuario from "../models/Usuario.js";

const registrar = async (req, res) => {
    const {email} = req.body

    //prevenir usuarios duplicados
    const existeUsuario = await Usuario.findOne({email})

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg: error.message});
    }

    try {
        //Guardar un nuevo Usuario
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();

        res.json(usuarioGuardado);
    } catch (error) {
        console.log(error)
    }
};

const perfil = (req, res) => {

    const {usuario} = req;

    res.json({perfil: usuario}); 
}

const confirmar = async (req, res) => {
    const {token} = req.params

    const usuarioConfirmar = await Usuario.findOne({token});

    if (!usuarioConfirmar) {
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message});
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json({msg: 'Usuario Confirmado Correctamente'});
    } catch (error) {
        console.log(error);
    }

};


const autenticar = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Comprobar si el usuario existe
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(401).json('Credenciales inválidas');
        }

        // Revisar Password
        if (usuario.password === password) {
            req.usuario = usuario; // Agregar el objeto de usuario a la solicitud
            next(); // Llamar al siguiente middleware
        } else {
            return res.status(400).json('Contraseña incorrecta');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('Error interno del servidor');
    }
};


export {
    registrar,
    perfil,
    confirmar,
    autenticar
}