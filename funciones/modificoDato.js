const {MongoClient, ObjectId} = require("mongodb")
const url = process.env.URLMONGO;
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = "usuarios";

async function updateUsuario(id,novoNome) {
    try {
      console.log('Estou en updateUsuario: ',id,novoNome)
      await client.connect();
        const db = client.db(database);
        const coll = db.collection(coleccion);
        const filtro ={
            _id:new ObjectId(id)
        }
        const dato = [{            
            $set: {
                name:novoNome
            }
        }] 
       
        const result = await coll.updateMany(filtro,dato);
      console.log(result)
    } finally {
      await client.close();
     
    }
  }

  module.exports = {
    updateUsuario
  }