const {Sequelize} = require ("sequelize");

const db = new Sequelize("node_db","root","",
    {
        host:"localhost",
        dialect:"mysql",
        port:3306
    });

module.exports = db;