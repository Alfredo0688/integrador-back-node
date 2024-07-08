const db = require ("../data/db.js");

const {DataTypes} = require("sequelize")

const comentariosModel = db.define("comentarios",{
    id_producto:{type:DataTypes.INTEGER},
    id_usuario:{type:DataTypes.INTEGER},
    comentario:{type:DataTypes.STRING},
    calificacion:{type:DataTypes.STRING},
    fecha:{type:DataTypes.DATE},
})