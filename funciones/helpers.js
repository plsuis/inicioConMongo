
const usuario = (documento)=> {
    let usuarios = {}
    usuarios._id = documento._id;
    usuarios.nome = documento.name;
    usuarios.apelido1 = documento.apelido1;
    usuarios.apelido2 = documento.apelido2;
    return usuarios
  }

  module.exports = {
    usuario
  }