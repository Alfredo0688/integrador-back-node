const { DELETE } = require("sequelize/lib/query-types")
const usuarioModel = require("../models/usuarioModel")
//requerimos el modulo para encriptar la contraseña
const bcryptjs = require("bcryptjs");

//express validator
const { validationResult } = require("express-validator")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json({ messeger: error.messeger })
    }
}

const obtenerUsuario = async (req, res) => {
    try {

        const usuario = await usuarioModel.findByPk(req.params.id);

        //verificamos si coinciden las contraseñas
        if (bcryptjs.compareSync(req.body.contrasenia, usuario.contrasenia)) {

            res.json(usuario);
        } else {
            res.json("La contraseña no coincide")
        }
    } catch (error) {
        res.json({ messeger: error.messeger })
    }
}

const crearUsuario = async (req, res) => {
    try {
        const errores = validationResult(req)// tomamos los errores de validacion
        if (!errores.isEmpty()) {
            console.log('Errores de validación:', errores.array());;// mostramos los errores de validacion
            return res.status(422).json({ errores: errores.array() }) // si hay errores , respondemos el estado 422 y los errores en formaro JSON
        } else {
            //console.log(req.body.contrasenia);
            const claveSinEncriptar = req.body.contrasenia;
            const claveEncriptada = bcryptjs.hashSync(claveSinEncriptar, 8);
            req.body.contrasenia = claveEncriptada;
            //console.log(req.body);
            const nuevoUsuario = await usuarioModel.create(req.body);
            res.json(nuevoUsuario);
        }
    } catch (error) {
        res.json({ messege: error.messeger })
    }

}

const editarUsuario = async (req, res) => {
    try {
        await usuarioModel.update(req.body, {
            where: { id: req.params.id_usuario }
        })
        res.json("usuario actualizado Correctamente")
    } catch (error) {
        res.json({ messenge: error.messenge })
    }
}

const borrarUsuario = async (req, res) => {
    try {
        await usuarioModel.destroy({ where: { id: req.params.id_usuario } })
        res.json("usuario borrado correctamente")

    } catch (error) {
        res.json({ messeger: error.messeger })
    }
}


const logear = async (req, res) => {
    try {
        const { usuario, contrasenia } = req.body;
        console.log(`Usuario ${usuario} Contraseña ${contrasenia}`);
        const user = await usuarioModel.findAll({
            where: {
                usuario: usuario,
            },
        })
        if (user) {
            user.forEach(usuario => {
                if(usuario.usuario == usuario && bcryptjs.compareSync(contrasenia, usuario.contrasenia )){
                    res.json("Logeo exitoso");
                }

            });
        } else {
            res.json("NO HAY USUARIO REGISTRADO CON ESE NOMBRE");
        }


    } catch (error) {
        res.json({ messege: error.messeger })
    }

}

module.exports = { obtenerUsuarios, obtenerUsuario, crearUsuario, editarUsuario, borrarUsuario , logear }