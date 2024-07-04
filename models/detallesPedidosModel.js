
const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const detallePedidoModel =db.define("detallas_pedidos",{
    id_pedido:{type:DataTypes.INTEGER},
    id_producto :{type:DataTypes.INTEGER},
    cantidad:{type:DataTypes.INTEGER},
    precio_unidad:{type:DataTypes.DECIMAL}

})

module.exports = detallePedidoModel