const comentariosModel = require("../models/comentariosModel.js");

const obtenerComentarios = async (request, response) => {
    try {

        const comentarios = await comentariosModel.findAll();
        response.json("comentarios obtenidos correctamente")

    } catch (error) {
        response.json({ message: error.message });
    }
}

const obtenerComentario = async (request, response) => {
    try {

        const comentario = await comentariosModel.findByPk(request.params.id);
        response.json(comentario)

    } catch (error) {
        response.json({ message: error.message });
    }
}

const crearComentario = async (request, response) => {
    try {

        const comentario = await comentariosModel.create(request.body);
        response.json(comentario)

    } catch (error) {
        response.json({ message: error.message });
    }
}

const editarComentario = async (request, response) => {
    try {

        const comentario = await comentariosModel.update(request.body,{
            where:{id:request.params.id}
        })
        response.json("comentario modificado con éxito")

    } catch (error) {
        response.json({ message: error.message });
    }
}


const eliminarComentario = async (request, response) => {
    try {

        const comentario = await comentariosModel.destroy({
            where:{id:request.params.id}
        })
        response.json("comentario eliminado con éxito")

    } catch (error) {
        response.json({ message: error.message });
    }
}

module.exports = {obtenerComentarios,obtenerComentario,crearComentario,editarComentario,eliminarComentario}