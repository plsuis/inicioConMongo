import { updateUser } from "./eventosConServer.js";
import { usuariosLista } from "./helpersEventos.js";
function eventosHome(){

 
    lerusuarios.addEventListener("click", async (e)=>{
        e.preventDefault();
        let response = await fetch("/leodatos");
        let usuarios = await response.json();
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
        let response = await fetch("/rexistro", {method: "POST",body: new FormData(formRexistro) });
    
        let result = await response.json();
        console.log("resposta de rexistrarUsuario: ", result);
      });
}

export {
    eventosHome
}

