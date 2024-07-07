const db = require("../data/db")


const {DataTypes} = require ("sequelize")

const usuarioModel = db.define("usuarios",{
    usuario:{type:DataTypes.STRING},
    contrasenia:{type:DataTypes.STRING},
    
});

module.exports=usuarioModel;

