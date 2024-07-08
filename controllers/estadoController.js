const estadosModel = require("../models/estadosModel.js");

const obtenerEstado = async (request, response) => {
    try {

        const estados = await estadosModel.findAll();
        response.json("Estados obtenidos correctamente")

    } catch (error) {
        response.json({ message: error.message });
    }
}

const obtenerEstados = async (request, response) => {
    try {

        const estado = await estadosModel.findByPk(request.params.id);
        response.json(estado)

    } catch (error) {
        response.json({ message: error.message });
    }
}

const crearEstado = async (request, response) => {
    try {

        const estado = await estadosModel.create(request.body);
        response.json(estado)

    } catch (error) {
        response.json({ message: error.message });
    }
}

const editarEstado = async (request, response) => {
    try {

        const estado = await estadosModel.update(request.body,{
            where:{id:request.params.id}
        })
        response.json("Estado modificado con éxito")

    } catch (error) {
        response.json({ message: error.message });
    }
}


const eliminarEstado = async (request, response) => {
    try {

        const estado = await estadosModel.destroy({
            where:{id:request.params.id}
        })
        response.json("Estado eliminado con éxito")

    } catch (error) {
        response.json({ message: error.message });
    }
}






module.exports = {obtenerEstado,obtenerEstados,crearEstado,editarEstado,eliminarEstado}