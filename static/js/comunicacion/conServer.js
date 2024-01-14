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

export{
    guardarDato
}