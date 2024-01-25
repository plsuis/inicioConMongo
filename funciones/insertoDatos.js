const {MongoClient} = require("mongodb")
const url = process.env.URLMONGO;
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = process.env.COLECCION;

async function insertarUsuario(usuario) {
    try {
      
      await client.connect();
      const db = client.db(database);
      const coll = db.collection(coleccion);

      const result = await coll.insertOne(usuario);
      
    } finally {
      await client.close();
     
    }
  }

  module.exports = {
    insertarUsuario
  }