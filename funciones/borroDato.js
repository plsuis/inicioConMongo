const {MongoClient, ObjectId} = require("mongodb")
const url = process.env.URLMONGO
const database = 'proba1'
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