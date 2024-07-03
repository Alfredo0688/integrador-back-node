const db = require("../data/db.js")


const {DataTypes} = require ("sequelize")

const usuarioModel = db.define("usuarios",{
    usuario:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    telefono:{type:DataTypes.NUMBER}
    
});

module.exports=usuarioModel;

