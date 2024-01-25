require('dotenv').config()
const { 
  RexistroUser,
  LerUser,
  ModificoDato,
  BorroDato} = require("./funcions.js");
const express = require("express");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());
// Accedo o arquivo estático
const carpetaStatic = path.join(__dirname, "static");

app.use(express.static(carpetaStatic));

app.post("/rexistro", RexistroUser);
//app.post("/gardarusuario",ModificoDato)
app.put("/gardarusuario",ModificoDato)
app.get("/leodatos",LerUser)
//app.get("/borrouser/:id",BorroDato)
app.delete("/borrouser/:id",BorroDato)
app.get("/:usuario",(req,res)=>{
  const {usuario} = req.params
  console.log('usuario ',usuario)
  res.sendFile("contacto.html", { root: carpetaStatic });
})

/*
app.get("/contacto", (req, res) => {
  //res.sendFile("./static/contacto.html");// da erro
  //res.sendFile(nomeDaPaxina,{root: <carpetaOndeEsta>})
  res.sendFile("contacto.html", { root: carpetaStatic });
});
app.get("/somos", (req, res) => {
  //res.sendFile("./static/contacto.html");// da erro
  //res.sendFile(nomeDaPaxina,{root: <carpetaOndeEsta>})
  res.sendFile("somos.html", { root: carpetaStatic });
});
app.get("/datos/:id", (req) => {
  console.log(req.params);
});
app.get("/datosquery", (req) => {
  console.log(req.query);
});
app.get("/backEnviaDatos", (req, res) => {
  let datos = {
    dato1: "Jacinto",
    dato2: "Pepe",
  };
  res.status(200).send(datos);
});*/
//START SERVER
app.listen(3000, function () {
  console.log("Server running");
});
