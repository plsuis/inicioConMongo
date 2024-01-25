const {MongoClient, ObjectId} = require("mongodb")
const url = process.env.URLMONGO
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion =process.env.COLECCION;

async function deleteUsuario(id) {
  let conexion;
    try {
      
      conexion = await client.connect();
        const db = client.db(database);
        const coll = db.collection(coleccion);
        const dato ={
            _id:new ObjectId(id)
        }
        
        const result = await coll.deleteOne(dato);
      console.log('Resuldato de borrado de dato',result)
      return result
    } catch(error){
      throw new Error("Error o borralo dato")
    }finally {
      if(conexion) await client.close();
     
    }
  }

  module.exports = {
    deleteUsuario
  }