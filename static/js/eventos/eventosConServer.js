import { 
    guardarDato,
    borroDato
     } from "../comunicacion/conServer.js";
import { iconoDisqueteSave,iconoDisquete } from "../../datos/constantes.js";
const updateUser = ()=>{
    
    let usuarios = document.querySelectorAll("div > img")
    
    for(let user of usuarios){
        user.addEventListener("click",(e)=>{
            
            let id = e.target.previousElementSibling.id;
            let novoValor = e.target.previousElementSibling.value
            let datos = {
                id,
                novoValor
            }
            e.target.setAttribute(iconoDisqueteSave.src,iconoDisqueteSave.url)
            guardarDato(datos)
            setTimeout(()=>{
                e.target.setAttribute(iconoDisquete.src,iconoDisquete.url)
            },2000)
        })
    }
}


const eventDeleteUser = ()=>{
    let imaxenBasura = document.querySelectorAll("[data-eliminar]")
    for(let etiqueta of imaxenBasura){
        etiqueta.addEventListener("click",(e)=>{
            console.log('eventDeleteUser e.target',e.target.previousElementSibling.previousElementSibling.id)
            console.log('eventDeleteUser e.target',e.target)
            let id = e.target.previousElementSibling.previousElementSibling.id;
            e.target.previousElementSibling.previousElementSibling.remove()
            e.target.previousElementSibling.remove();
            e.target.remove()
            e.stopImmediatePropagation()
            borroDato(id)
        })
    }
}

const comunicandoServer = async (datos)=>{
    let response;
    if(datos.tipoComunicacion !== undefined){
        response = await fetch(datos.endpoint,datos.tipoComunicacion);//'POST'
    }else{
        response = await fetch(`${datos.endpoint}`);// 'GET'
    }
    let resposta = await response.json();
    return resposta
}
export{
    updateUser,
    eventDeleteUser,
    comunicandoServer
}