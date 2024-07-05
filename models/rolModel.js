const db =require("../data/db")

const {DataTypes}=require("sequelize")

const rolModel=db.define("roles",{
    rol:{type:DataTypes.STRING}
})

module.exports=rolModel