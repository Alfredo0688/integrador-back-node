const modeloProducto = require("../models/productosModel");

const crearProducto = async (req, res) => {
  try {
    const producto = await modeloProducto.create(req.body);
    res.json(producto);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const obtenerProductos =async(req,res)=>{
  try {
      const productos = await modeloProducto.findAll()
      res.json(productos);
  }
   catch (error) {
      res.json({message:error.message})
  }
}
const obtenerProducto = async (req, res) => {
  try {
    const producto = await modeloProducto.findByPk(req.params.id);
    res.json(producto);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const obtenerProductoPorCategoria = async (req, res) => {
  try {
    const producto = await modeloProducto.findAll({where: {
      id_categoria: req.params.id_categoria,
    }})
    res.json(producto);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const editarProducto = async (req, res) => {
  try {
    await modeloProducto.update(req.body, {
      where: { id: req.params.id },
    });
    res.json("producto ACTUALIZADO correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const borrarProducto = async (req,res) => {
  try {
    await modeloProducto.destroy({
      where: {id:req.params.id },
    });
    res.json("producto borrado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { obtenerProductos, crearProducto,obtenerProducto,editarProducto,borrarProducto,obtenerProductoPorCategoria };
