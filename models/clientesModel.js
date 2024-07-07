const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const clientesModel = db.define("clientes",{
    nombre : {type:DataTypes.STRING},
    apellido : {type:DataTypes.STRING},
    email : {type:DataTypes.STRING},
    telefono : {type:DataTypes.INTEGER},
    direccion : {type:DataTypes.STRING},
<<<<<<< HEAD
    codigo_postal : {type:DataTypes.STRING},
    id_usuario : {type:DataTypes.INTEGER}
=======
    codigo_postal : {type:DataTypes.INTEGER},
    id_usuario : {type:DataTypes.INTEGER},
>>>>>>> 26d52dbed8d21cbbab35c3b413cb83cf2bd8554a
    })

    module.exports = clientesModel;