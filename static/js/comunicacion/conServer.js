const guardarDato = async (datos)=>{
    const datosServer = await fetch(`/gardarusuario`,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(datos)
    })
    const resposta = await datosServer.json()
    console.log('resposta: ',resposta)
}
const borroDato = async (id)=>{
    const respostaServer = await fetch(`/borrouser/${id}`);
    const respostaJson = await respostaServer.json();
    console.log("resposta : ",respostaJson)
}
const comunicandoServer_POST_GET = async (datos)=>{
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
    guardarDato,
    borroDato,
    comunicandoServer_POST_GET
}