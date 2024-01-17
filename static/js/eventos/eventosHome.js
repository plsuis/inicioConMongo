import { updateUser } from "./eventosConServer.js";
import { usuariosLista } from "./helpersEventos.js";
import {comunicandoServer_POST_GET} from "../comunicacion/conServer.js"
function eventosHome(){

 
    lerusuarios.addEventListener("click", async (e)=>{
        e.preventDefault();
        let datos = {
          endpoint: '/leodatos'
        }
        let usuarios = await comunicandoServer_POST_GET(datos)
        console.log("usuarios: ",usuarios)
        if(usuarios !== undefined){          
          usuariosLista(usuarios)
          updateUser()
        }else{
          console.log("algo pasou")
        }
      })
    
    
    rexistrarUsuario.addEventListener("click", async (e) => {
        e.preventDefault();

        let datos = {
          endpoint: "/rexistro",
          tipoComunicacion: {method: "POST",body: new FormData(formRexistro) }
        }
        let result = await comunicandoServer_POST_GET(datos)
        
        console.log("resposta de rexistrarUsuario: ", result);
      });
}

export {
    eventosHome
}

