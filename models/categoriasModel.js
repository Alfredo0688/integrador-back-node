
const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")
const categoriaModels = db.define("categorias",{
    nombre:{type:DataTypes.STRING}
})

module.exports=categoriaModels