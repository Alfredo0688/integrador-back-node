const db = require("../data/db")

const {DataTypes} = require("sequelize")

const estadosModel = db.define("estados",{
    estado:{type:DataTypes.STRING}
})

module.exports = estadosModel