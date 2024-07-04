const { request } = require("express");
const posteosModel = require ("../models/posteosModel.js")

//GET - READ
const traePosteos = async (request, response)=>{
    try {
        const posteos = await posteosModel.findAll();
        response.json(posteos);
    } catch (error) {
        
    }
}

//GET - READ
const traeUnPosteo = async (request,response)=>{
    try {
        const post = await posteosModel.findByPk(request.params.id);
        response.json(post)
    } catch (error) {
        response.json({message:error.message});
    }
}

//POST - CREATE
const crearPosteo = async (request, response) =>{
    try {
        await posteosModel.create(request.body)
        response.json("Registro creado correctamente")
        response.send
    } catch (error) {
        response.json({message:error.message});
    }
}

//PUT - UPDATE 
const actualizarPosteo = async (request, response) => {
    try {                       //la información que viaja
        await posteosModel.update(request.body,{
            where:{id:request.params.id}//hace el match entre la columna id con el id que viaja como parametro
        })
        response.json("Registro actualizado correctamente")
    } catch (error) {
        response.json({message:error.message});
    }
}

//REMOVE - DELETE
const eliminarPosteo = async (request,response)=>{
    try {
        await posteosModel.destroy({where:{id:request.params.id}})
        response.json("Registro eliminado correctamente")
    } catch (error) {
        response.json({message:error.message});
    }
}

module.exports = {traeUnPosteo,traePosteos, crearPosteo, actualizarPosteo, eliminarPosteo}