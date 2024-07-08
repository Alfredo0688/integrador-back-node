const { DELETE } = require("sequelize/lib/query-types")
const modeloColores = require("../models/coloresModels")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */

const obtenerColores =async(req,res)=>{
    try {
        const Coloress = await modeloColores.findAll()
        res.json(Coloress);
    }
     catch (error) {
        res.json({message:error.message})
    }
}

const obtenerColor=async(req,res)=>{
    try {
 
        const Colores = await modeloColores.findByPk(req.params.id);
        res.json(Colores)
    } catch (error) {
        //res.json({message:error.message})
    }
}

const crearColores = async(req,res)=>{
    try {
        const newColores = await modeloColores.create(req.body)
        res.json("registro creado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const editarColores=async(req,res)=>{
    try {
        await modeloColores.update(req.body,
            {where:{id:req.params.id}})
            res.json("Colores editada correcamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const borrarColores = async (req,res)=>{
    try {
        await modeloColores.destroy( { where:{id:req.params.id}})
        res.json("Colores borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports ={obtenerColor,crearColores,obtenerColores,editarColores,borrarColores}