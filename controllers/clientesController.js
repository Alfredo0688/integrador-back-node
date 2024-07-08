const modeloCliente = require("../models/clientesModel")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */

const obtenerClientes = async (req, res) => {
    try {
        const clientes = await modeloCliente.findAll()
        res.json(clientes);
    }
    catch (error) {
        res.json({ message: error.message })
    }
}

const obtenerCliente = async (req, res) => {
    try {
        const cliente = await modeloCliente.findByPk(req.params.id);
        res.json(cliente)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const crearCliente = async (req, res) => {
    try {
        const newcliente = await modeloCliente.create(req.body)
        res.json("registro creado correctamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}

const editarCliente = async (req, res) => {
    try {
        await modeloCliente.update(req.body,
            { where: { id: req.params.id } })
        res.json("cliente editada correcamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}

const borrarCliente = async (req, res) => {
    try {
        await modeloCliente.destroy({ where: { id: req.params.id } })
        res.json("cliente borrado correctamente")
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { obtenerClientes, obtenerCliente, crearCliente, editarCliente, borrarCliente }