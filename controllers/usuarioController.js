import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";

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

const olvidePassword = async (req, res) => {
    const {email} = req.body
    const existeUsuario = await Usuario.findOne({email});
    if (!existeUsuario) {
        const error = new Error('El usuario no existe');
        return res.status(400).json({msg:error.message});
    }

    try {
        existeUsuario.token = generarId();
        await existeUsuario.save();
        res.json({msg: 'Hemos enviado un email con las instrucciones'});
    } catch (error) {
        console.log(error)
    }
};
const comprobarToken = async (req, res) => {
    const {token} = req.params;
    const tokenValido = await Usuario.findOne({token});
    if (tokenValido) {
        //El token es valido el usuario existe
        res.json({msg: 'Token válido y el usuario existe'});
    }
    else {
        const error = new Error('Token no valido');
        return res.status(400).json({msg: error.message});
    }
};
const nuevoPassword = async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;

    const usuario = await Usuario.findOne({token});
    if (!usuario) {
        const error = new Error('Hubo un error');
        return res.status(400).json({msg: error.message});
    }

    try {
        usuario.token = null
        usuario.password = password
        await usuario.save();
        res.json({msg: 'Password modificado correctamente'}),
        console.log(usuario);
    } catch (error) {
        console.log(error);
    }
};

export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
}