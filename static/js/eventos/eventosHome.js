import { updateUser, comunicandoServer } from "./eventosConServer.js";
import { usuariosLista } from "./helpersEventos.js";
function eventosHome(){

 
    lerusuarios.addEventListener("click", async (e)=>{
        e.preventDefault();
        let datos = {
          endpoint: '/leodatos'
        }
        let usuarios = await comunicandoServer(datos)
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
        let result = await comunicandoServer(datos)
        
        console.log("resposta de rexistrarUsuario: ", result);
      });
}

export {
    eventosHome
}

