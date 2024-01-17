const {MongoClient, ObjectId} = require("mongodb")
const url = process.env.URLMONGO
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = "usuarios";

async function deleteUsuario(id) {
    try {
      console.log('Estou en updateUsuario: ',id)
      await client.connect();
        const db = client.db(database);
        const coll = db.collection(coleccion);
        const dato ={
            _id:new ObjectId(id)
        }
        
       
        const result = await coll.deleteOne(dato);
      console.log(result)
    } finally {
      await client.close();
     
    }
  }

  module.exports = {
    deleteUsuario
  }