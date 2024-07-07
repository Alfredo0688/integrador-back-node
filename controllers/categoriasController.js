const { DELETE } = require("sequelize/lib/query-types")
const modeloCategoria = require("../models/categoriasModel")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */

const obtenerCategorias =async(req,res)=>{
    try {
        const categorias = await modeloCategoria.findAll()
        res.json(categorias);
    }
     catch (error) {
        res.json({message:error.message})
    }
}

const obtenerCategoria=async(req,res)=>{
    try {
        console.log(req.params.id);
        const categoria = await modeloCategoria.findByPk(req.params.id);
        res.json(categoria)
    } catch (error) {
        //res.json({message:error.message})
    }
}

const crearCategoria = async(req,res)=>{
    try {
        const newCategoria = await modeloCategoria.create(req.body)
        res.json("registro creado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const editarCategoria=async(req,res)=>{
    try {
        await modeloCategoria.update(req.body,
            {where:{id:req.params.id}})
            res.json("categoria editada correcamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const borrarCategoria = async (req,res)=>{
    try {
        await modeloCategoria.destroy( { where:{id:req.params.id}})
        res.json("categoria borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports ={obtenerCategorias,crearCategoria,obtenerCategoria,editarCategoria,borrarCategoria}