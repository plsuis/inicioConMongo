# Observacións iniciais

De primeiras observamos que temos na cabeceira dous arquivos que están a ser importados de :

- Un primeiro a comunicación co servidor dende o cliente: ```"../comunicacion/conServer.js"```
- Neste segundo temos as constantes, que están a ser utilizadas ```"../../datos/constantes.js"```

## Función updateUser

Esta función, utilízase despois de ler os datos do servidor, a través do botón 'Ler usuarios'.

Ten varios factores, entre eles, debemos de fixarnos en :

- Cómo accedemos as imáxenes, unha vez as temos no cliente. ***Debemos referenciar a imáxen*** a cal fai o gardado do nome, unha vez que se clique:
```javascript
let usuarios = document.querySelectorAll("div > img")
```

Ao mesmo tempo debémonos de fixar cómo lle damos un evento a cada usuario, a través da referencia. Para iso podemos facer un bucle, e a través del vamos 'usuario' a 'usuario' agregándolle o evento:

```javascript
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
```



```javascript
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

```
