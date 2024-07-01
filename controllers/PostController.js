const posteosModel = require ("../models/posteosModel.js")

const traeUnPostpoosd = ()=>{
    console.log("Trayendo un posteo")
}

const traePosteosddsds = ()=>{
    console.log("Trayendo todos los posteos")
}

const traePosteos = async (request, response)=>{
    try {
        const posteos = await posteosModel.findAll();
        response.json(posteos);
    } catch (error) {
        
    }
}

const traeUnPost = async (request,response)=>{
    try {
        
    } catch (error) {
        response.json({message:error.message});
    }
}


module.exports = {traeUnPost,traePosteos}