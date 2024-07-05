const pedidoModel = require("../models/pedidoModel")

const obtenerPedidos = async(req,res)=>{
    try {
        const pedidos=await pedidoModel.findAll();
        res.json(pedidos);
    } catch (error) {
        res.json({messenger:error.messenger})
    }
}

const obtenerPedido=async(res,req)=>{
    try {
        const Pedido = await pedidoModel.findByPk(req.params.id);
        res.json(Pedido)
    } catch (error) {
        res.json({message:error.message})
    }
}

const crearPedido = async(req,res)=>{
    try {
        const newPedido = await pedidoModel.create(req.body)
        res.json("registro creado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const editarPedido=async(res,req)=>{
    try {
        await pedidoModel.update(req.body,
            {where:{id:req.params.id}})
            res.json("Pedido editada correcamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

const borrarPedido = async (req,res)=>{
    try {
        await pedidoModel.destroy( { where:{id:req.params.id}})
        res.json("Pedido borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports ={crearPedido,obtenerPedido,obtenerPedidos,editarPedido,borrarPedido}