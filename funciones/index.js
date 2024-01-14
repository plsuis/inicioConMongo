const {insertarUsuario} = require("./insertoDatos.js");
const {leoDatos} = require("./leoDatos.js")
const {updateUsuario} = require("./modificoDato.js")
const {deleteUsuario} = require("./borroDato.js")
module.exports = {
    insertarUsuario,
    leoDatos,
    updateUsuario,
    deleteUsuario
}
