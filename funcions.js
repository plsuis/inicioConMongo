const {
  insertarUsuario,
  leoDatos,
  updateUsuario,
  deleteUsuario} = require("./funciones/index.js")
const path = require("path");
const staticRoute2 = path.join(__dirname, "static\\imags\\");// sistema en windows



const RexistroUser = (req, res) => {
  let sampleFile;
  let uploadPath;
 
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
    res.status(200).send(dato);
  });
};

const ModificoDato = async (req,res)=>{
  const {id, novoValor} = req.body;
  
  updateUsuario(id,novoValor)
  let resposta = {
    mensaxe: "chegaron os datos"
  }
  res.status(200).send(resposta)
}

const BorroDato = async (req,res)=>{
  const {id} = req.params;
  console.log('o id é: ',id)
  deleteUsuario(id)
  let resposta = {
    mensaxe: "chegaron os datos"
  }
  res.status(200).send(resposta)
}

const LerUser = async (req,res) => {
  console.log('estou en lerUser')
  let usuarios = await leoDatos();
  let saida = {
    datos:usuarios
  }
  res.send(saida)
}

module.exports = {
  RexistroUser,
  LerUser,
  ModificoDato,
  BorroDato
};
