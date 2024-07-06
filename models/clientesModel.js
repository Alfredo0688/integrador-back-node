const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const clientesModel = db.define("electronsa",{
    nombre : {type:DataTypes.STRING},
    apellido : {type:DataTypes.STRING},
    email : {type:DataTypes.STRING},
    telefono : {type:DataTypes.STRING},
    direccion : {type:DataTypes.STRING},
    codigo_postal : {type:DataTypes.STRING},
    id_usuario : {type:DataTypes.STRING},
    })

    module.exports = clientesModel;