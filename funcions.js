const {insertarUsuario} = require("./funciones/insertoDatos.js")
const path = require("path");
const staticRoute2 = path.join(__dirname, "static\\imags\\");// sistema en windows



const RexistroUser = (req, res) => {
  let sampleFile;
  let uploadPath;
 
  console.log('datos de entrada:',doc)
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("O ficheiro non foi actualizado.");
  }
  
  const docs = {name: req.body.nome, apelido1: req.body.apelido1, apelido2: req.body.apelido2};
  insertarUsuario(docs)
  sampleFile = req.files.usuario;
  uploadPath = staticRoute2 + sampleFile.name;
  

  
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    let dato = {
      mensaxe: "Usuario rexistrado!"
    }
    res.send(dato);
  });
};

const LerUser = (req, res) => {
  
}

module.exports = {
  RexistroUser,
};
