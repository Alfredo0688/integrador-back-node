const { DELETE } = require("sequelize/lib/query-types")
const usuarioModel = require("../models/usuarioModel")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */

const obtenerUsuarios =async(req,res)=>{
    try {
        const usuarios = await usuarioModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json({messeger:error.messeger})
    }

}

const crearUsuario =async(req,res)=>{
    try {
        await usuarioModel.create(req.body);
        res.json("usuario creado correctamente");
    } catch (error) {
        res.json({messege:error.messeger})
    }

}

const editarUsuario =async(req,res)=>{
    try {
        await usuarioModel.update(req.body,{
            where:{id:req.params.id_usuario}
        })
        res.json("usuario actualizado Correctamente")
    } catch (error) {
        res.json({messenge:error.messenge})
    }
}

const borrarUsuario = async(req,res)=>{
try {
    await usuarioModel.destroy({where:{id:req.params.id_usuario}})
    res.json("usuario borrado correctamente")

} catch (error) {
    res.json({messeger:error.messeger})
}
}

module.exports ={obtenerUsuarios,crearUsuario,editarUsuario,borrarUsuario}