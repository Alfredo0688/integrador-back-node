const modeloDetallePedido = require("../models/detallesPedidosModel")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */

const obtenerDetallePedidos =async(req,res)=>{
    try {
        const DetallePedido = await modeloDetallePedido.findAll()
        res.json(DetallePedido);
    }
     catch (error) {
        res.json({message:error.message})
    }
}

const obtenerDetallePedido=async(res,req)=>{
    try {
        const DetallePedido = await modeloDetallePedido.findByPk(req.params.id);
        res.json(DetallePedido)
    } catch (error) {
        res.json({message:error.message})
    }
}

const crearDetallePedido = async(req,res)=>{
    try {
        const newDetallePedido = await modeloDetallePedido.create(req.body)
        res.json("registro creado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const editarDetallePedido=async(res,req)=>{
    try {
        await modeloDetallePedido.update(req.body,
            {where:{id:req.params.id}})
            res.json(" Detalle Pedido editada correcamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const borrarDetallePedido = async (req,res)=>{
    try {
        await modeloDetallePedido.destroy( { where:{id:req.params.id}})
        res.json(" DetallePedido borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports ={obtenerDetallePedido,crearDetallePedido,obtenerDetallePedidos,editarDetallePedido,borrarDetallePedido}