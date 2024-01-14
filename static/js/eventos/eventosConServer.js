import { 
    guardarDato,
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





export{
    updateUser
}