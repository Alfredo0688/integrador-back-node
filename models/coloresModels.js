const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")
const coloresModels = db.define("colores",{
    nombre:{type:DataTypes.STRING}
})


module.exports=coloresModels