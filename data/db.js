const {Sequelize} = require ("sequelize")
/*  nombre de la base de datos -  user - contraseña - {donde esta alojada?,lenguaje, puerto} */

const db = new Sequelize("electronsa","root","",{
    host:"localhost",
    dialect : "mysql",
    dialectModule: require('mysql2'),
    port:3306

})

module.exports=db