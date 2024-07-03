const db = require("../data/db")
const {DateTypes}=require("sequelize")
const detalleCategoriaModel =db.define("detalles_pedido",{
    id_producto : {type:DateTypes.INTEGER},
    cantidad:{type:DateTypes.INTEGER},
    precio_unidad:{type:DateTypes.DECIMAL},
    subtotal:{type:DateTypes.DECIMAL}

})

module.exports = detalleCategoriaModel