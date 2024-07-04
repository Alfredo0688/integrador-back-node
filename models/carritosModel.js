const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")
const categoriaModels = db.define("carritos",{
    id_usuario :{type:DataTypes.INTEGER}, 
    id_producto :{type:DataTypes.INTEGER}, 
    cantidad:{type:DataTypes.INTEGER}
})

module.exports=categoriaModels