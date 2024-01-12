const {insertarUsuario} = require("./funciones/insertoDatos.js")
const path = require("path");
const staticRoute2 = path.join(__dirname, "static\\imags\\");// sistema en windows

//console.log('staticRoute2 ',staticRoute2,__dirname);

const RexistroUser = (req, res) => {
  let sampleFile;
  let uploadPath;
  console.log('req.body: ',req.body)
  const doc = [
    {name: req.body.nome, apelido1: req.body.apelido1, apelido2: req.body.apelido2}
  ];
  console.log('datos de entrada:',doc)
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("O ficheiro non foi actualizado.");
  }
  /* const docs = [
    {name: req.body.nome, apelido1: req.body.apelido1, orbitalPeriod: 75, radius: 3.4175, mass: 2.2e14},
    {name: "Wild2", officialName: "81P/Wild", orbitalPeriod: 6.41, radius: 1.5534, mass: 2.3e13},
    {name: "Comet Hyakutake", officialName: "C/1996 B2", orbitalPeriod: 17000, radius: 0.77671, mass: 8.8e12}
  ]; */
  const docs = {name: req.body.nome, apelido1: req.body.apelido1, apelido2: req.body.apelido2}
  ;
  insertarUsuario(docs)
  sampleFile = req.files.usuario;
  uploadPath = staticRoute2 + sampleFile.name;
  

  /* console.log("O ------ staticRoute2: ",staticRoute2);
  console.log("O path: ",staticRoute2, uploadPath); */
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    let dato = {
      mensaxe: "Usuario rexistrado!"
    }
    res.send(dato);
  });
};

module.exports = {
  RexistroUser,
};
