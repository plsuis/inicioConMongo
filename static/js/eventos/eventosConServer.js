import { guardarDato } from "../comunicacion/conServer.js"
const updateUser = ()=>{
    
    let usuarios = document.querySelectorAll("div > img")
    console.log("usuarios : ", usuarios)
    for(let user of usuarios){
        user.addEventListener("click",(e)=>{
            
            let id = e.target.previousElementSibling.id;
            let novoValor = e.target.previousElementSibling.value
            let datos = {
                id,
                novoValor
            }
            e.target.setAttribute("src","./imaxesConstantes/save.png")
            guardarDato(datos)
        })
    }
}

export{
    updateUser
}