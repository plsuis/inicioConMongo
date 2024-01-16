# Observacións iniciais

De primeiras observamos que temos na cabeceira dous arquivos que están a ser importados de :

- Un primeiro a comunicación co servidor dende o cliente: ```"../comunicacion/conServer.js"```
- Neste segundo temos as constantes, que están a ser utilizadas ```"../../datos/constantes.js"```

## Función updateUser

Esta función, utilízase despois de ler os datos do servidor, a través do botón 'Ler usuarios', sendo éste o que provoca o evento.

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

Tamén neste evento, cambiamos a imaxen do icono, sendo esto, a través do código seguinte:
```javascript
e.target.setAttribute(iconoDisqueteSave.src,iconoDisqueteSave.url)
```
Posteriormente, utilizamos un temporizador, o cal fai, que cambie o icono anterior despois de dous segundos (2"):

```javascript
setTimeout(()=>{
                e.target.setAttribute(iconoDisquete.src,iconoDisquete.url)
            },2000)
```
Tamén deberemos ter en conta a ````función de gardado de datos````, que é a que está enviando o servidor para que este se garden:

```javascript
guardarDato(datos)
```

Sendo esta a función descrita:

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

## Función eventDeleteUser

Esta función como indica o nome, actívase a través dun evento, e ***elimina o usuario da bbdd***. 

A imaxen asociada coa ```papelera``` indica que clicando sobre ela vai eliminar un usuario. Temos que referenciala,neste caso, incorpórase o atributo ```data-eliminar``` utilizamos o seguinte código:

```javascript
let imaxenBasura = document.querySelectorAll("[data-eliminar]")
```

Ao mesmo tempo observar qué saída ten por consola, no bucle ```for``` os elementos a través do obxeto ```event```, abreviado (e).


Unha vez que eliminamos o usuario, deberemos tamén eliminar o pintado:

```javascript
 e.target.previousElementSibling.previousElementSibling.remove()
            e.target.previousElementSibling.remove();
            e.target.remove()
```

Este código anterior, fai que se elimine o pintado coas referencias indicadas.

A función que envía a orden de borrado do usuario ao back é a seguinte:

```javascript
borroDato(id)
```
### Evento stopImmediatePropagation

O estar dentro dun div diferentes eventos, como temos falado e visto, (recomendo que miredes o vídeo da clase), as veces propáganse eventos. 

E neste caso, así sucede, polo que é necesario paralo a través da función:

```javascript
e.stopImmediatePropagation()
```