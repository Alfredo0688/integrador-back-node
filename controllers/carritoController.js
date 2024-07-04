const modeloCarrito = require("../models/carritosModel")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */

const obtenerCarritos =async(req,res)=>{
    try {
        const Carritos = await modeloCarrito.findAll()
        res.json(Carritos);
    }
     catch (error) {
        res.json({message:error.message})
    }
}

const obtenerCarrito=async(res,req)=>{
    try {
        const Carrito = await modeloCarrito.findByPk(req.params.id);
        res.json(Carrito)
    } catch (error) {
        res.json({message:error.message})
    }
}

const crearCarrito = async(req,res)=>{
    try {
        const newCarrito = await modeloCarrito.create(req.body)
        res.json("registro creado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const editarCarrito=async(res,req)=>{
    try {
        await modeloCarrito.update(req.body,
            {where:{id:req.params.id}})
            res.json("Carrito editada correcamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const borrarCarrito = async (req,res)=>{
    try {
        await modeloCarrito.destroy( { where:{id:req.params.id}})
        res.json("Carrito borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports ={obtenerCarritos,crearCarrito,obtenerCarrito,editarCarrito,borrarCarrito}