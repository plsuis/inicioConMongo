const {usuario} = require("./helpers.js")
const {MongoClient} = require("mongodb")
const url = process.env.URLMONGO
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = "usuarios";



async function leoDatos() {
    try {
      
      await client.connect();
      const db = client.db(database);
      const coll = db.collection(coleccion);
      
      const result = coll.find({})
      
     
     let datosUsers = []
      
      //for await...of
      for await(const documento of result){
 
        datosUsers.push(usuario(documento))        
      }
     
      return datosUsers
    } finally {
     
      await client.close();
     
    }
  }

  module.exports = {
    leoDatos
  }