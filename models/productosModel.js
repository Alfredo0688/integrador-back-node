const db = require("../data/db");
const { DataTypes } = require("sequelize");

const productosModel = db.define('productos', {
  marca: {
    type: DataTypes.STRING
    
  },
  nombre: {
    type: DataTypes.STRING
    
  },
  id_color: {
    type: DataTypes.INTEGER
    
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
    
  },
  id_categoria: {
    type: DataTypes.INTEGER
    
  }
});

productosModel.sync({ force: false }) // Cambia a true para forzar la sincronización y eliminar datos existentes
  .then(() => {
    console.log('Modelos sincronizados correctamente con la base de datos');
    // Inicia tu servidor Node.js aquí o realiza otras operaciones
  })
  .catch(error => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });
module.exports = productosModel;
