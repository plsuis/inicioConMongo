const {MongoClient, ObjectId} = require("mongodb")
const url = process.env.URLMONGO;
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = process.env.COLECCION;

async function updateUsuario(id,novoNome) {
  
  let conexion;
    try {
      
      conexion = await client.connect();
        const db = client.db(database);
        const coll = db.collection(coleccion);
        const filtro ={
            _id: new ObjectId(id)
        }
        const dato = [{            
            $set: {
                name:novoNome
            }
        }] 
       
      //result = await coll.updateOne(filtro,dato);
      const result = await coll.updateMany(filtro,dato);
      //console.log("resul: " + result.modifiedCount,result);
      return result
      
    }catch(error){
      throw new Error("Error o modificalo dato")
    }finally {
      if(conexion) await client.close();
    }
  }

  module.exports = {
    updateUsuario
  }