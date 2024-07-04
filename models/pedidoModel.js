const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")
const modelPedido = db.define("pedidos",{
    id_cliente: {type:DataTypes.INTEGER},
    fecha:{type:DataTypes.DATE},
    id_estado: {type:DataTypes.INTEGER},
    direccion_envio: {type:DataTypes.STRING},
    total: {type:DataTypes.DECIMAL},

})

module.exports = modelPedido