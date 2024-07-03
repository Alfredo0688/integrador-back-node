const db =require("../data/db")
const {DataTypes} = require ("sequelize")

const productosModel = db.define("productos",{
    nombre:{type:DataTypes.STRING},
    marca:{type:DataTypes.STRING},
    modelo:{type:DataTypes.STRING},
    foto:{type:DataTypes.STRING},
    precio:{type:DataTypes.DECIMAL},
    cantidad:{type:DataTypes.INTEGER},
    id_categoria:{type:DataTypes.INTEGER}

})

module.exports = productosModel