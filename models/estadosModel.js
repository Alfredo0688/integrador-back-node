const db = require("../data/db")

const {DataTypes} = require("sequelize")

const estadoModel = db.define("estados",{
    estado:{type:DataTypes.STRING}
})

module.exports = estadoModel