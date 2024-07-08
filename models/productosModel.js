const db = require("../data/db");
const { DataTypes } = require("sequelize");
const categorias = require("../models/categoriasModel")
const colores = require("../models/coloresModels")

const productosModel = db.define('productos', {
  marca: {
    type: DataTypes.STRING
    
  },
  nombre: {
    type: DataTypes.STRING
    
  },
  modelo: {
    type: DataTypes.STRING
    
  },
  foto: {
    type: DataTypes.STRING
    
  },
  precio: {
    type: DataTypes.DECIMAL(10,2)
    
  },
  cantidad: {
    type: DataTypes.INTEGER
    
  }
});

//definir la relaciones 1 a 1 con color y categoria
productosModel.belongsTo(colores,{foreignKey:'id_color',allowNull:false})
productosModel.belongsTo(categorias,{foreignKey:'id_categoria',allowNull:false})

db.sync({ force: false }) // Cambia a true para forzar la sincronización y eliminar datos existentes
  .then(() => {
    console.log('Modelos sincronizados correctamente con la base de datos');
    // Inicia tu servidor Node.js aquí o realiza otras operaciones
  })
  .catch(error => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });
module.exports = productosModel;
