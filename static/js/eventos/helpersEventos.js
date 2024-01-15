import { iconoDisquete,iconoPapelera } from "../../datos/constantes.js";
import { eventDeleteUser } from "./eventosConServer.js";

const eventUpdateUser = (elemento)=>{ 

    elemento.addEventListener("click",(e)=>{
        e.target.removeAttribute("readonly")
        e.target.focus()
        e.target.nextElementSibling.setAttribute(iconoDisquete.src,iconoDisquete.url)
    })
    
}


const creoImaxen = (icono)=>{
    let imaxen = document.createElement('img');
    imaxen.setAttribute(icono.atributo.name,icono.atributo.valor)
    imaxen.setAttribute(icono.src,icono.url)
    return imaxen
}
const atributosUsuario = (oInputUsuario,usuario)=>{
    oInputUsuario.setAttribute("id",`${usuario._id}`)
    oInputUsuario.setAttribute("title","un usuario")
    oInputUsuario.setAttribute("name","lista")
    oInputUsuario.setAttribute("readonly","true")
    oInputUsuario.setAttribute("value",`${usuario.nome}`)
}
const creoLista = (usuario)=>{
    
    let dentroInput = document.createElement('div');
    let oInputUsuario = document.createElement('input');
    atributosUsuario(oInputUsuario,usuario)
    dentroInput.appendChild(oInputUsuario)
    let imaxenGuardar = creoImaxen(iconoDisquete);
    dentroInput.append(imaxenGuardar)
    let imaxenPapelera = creoImaxen(iconoPapelera);
    dentroInput.append(imaxenPapelera)
    let refDivLista = document.querySelector("section > div")
    refDivLista.appendChild(dentroInput)
    
    return oInputUsuario
}

const usuariosLista = (usuarios) => {
    for(let usuario of usuarios.datos){
        eventUpdateUser(creoLista(usuario))
      }
      eventDeleteUser()
}
export {    
    usuariosLista
}