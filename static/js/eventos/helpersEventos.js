const eventUpdateUser = (elemento)=>{ 
    elemento.addEventListener("click",(e)=>{
      console.log('clicó sobre o elemento: ',e.target)
        e.target.removeAttribute("readonly")
        e.target.focus()
        e.target.nextElementSibling.setAttribute("src","./imaxesConstantes/diskette.png")
    })
    
}

const creoImaxen = ()=>{
    let imaxen = document.createElement('img');
    imaxen.setAttribute("name","guardar")
    imaxen.setAttribute("src","./imaxesConstantes/diskette.png");
    return imaxen
}
const creoLista = (usuario)=>{
    let dentroInput = document.createElement('div');
    let oInputUsuario = document.createElement('input');
    oInputUsuario.setAttribute("id",`${usuario._id}`)
    oInputUsuario.setAttribute("name","lista")
    oInputUsuario.setAttribute("readonly","true")
    oInputUsuario.setAttribute("value",`${usuario.nome}`)
    dentroInput.appendChild(oInputUsuario)
    let imaxen = creoImaxen();
    dentroInput.append(imaxen)
    let refDivLista = document.querySelector("section > div")
    refDivLista.appendChild(dentroInput)
    
    return oInputUsuario
}

const usuariosLista = (usuarios) => {
    for(let usuario of usuarios.datos){
        eventUpdateUser(creoLista(usuario))
      }
}
export {    
    usuariosLista
}