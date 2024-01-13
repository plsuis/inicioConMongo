const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017";
const database = 'proba1'
const client = new MongoClient(url)
const coleccion = "usuarios";

async function leoDatos() {
    try {
      
      await client.connect();
      const db = client.db(database);
      const coll = db.collection(coleccion);
      
      const result = coll.find({})
      
     let usuarios = {};
     let datosUsers = []
      
      //for await...of
      for await(const documento of result){
        usuarios._id = documento._id;
        usuarios.nome = documento.name;
        usuarios.apelido1 = documento.apelido1;
        usuarios.apelido2 = documento.apelido2;
        datosUsers.push(usuarios)
      }
      
      return datosUsers
    } finally {
     
      await client.close();
     
    }
  }

  module.exports = {
    leoDatos
  }