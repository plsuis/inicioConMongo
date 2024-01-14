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
export{
    guardarDato,
    borroDato
}