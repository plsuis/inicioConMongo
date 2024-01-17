# Aclaracións deste arquivo

Este arquivo é creado para que no index.js, da carpeta `js`, so teña unha función de eventos ao cargar.

O nome como indica, é para eventos producidos na páxina de Home (teño que aclarar que é por indicar que é páxina que carga inicialmente)

## Arquivos de cabeceira

Neste arquivo temos 3 arquivos de cabeceira, dado, que temos que utilizar diferentes funcións, entre eles:

- updateUser
- usuariosLista
- comunicandoServer_POST_SERVER

Importámolas:

```javascript
import { updateUser } from "./eventosConServer.js";
import { usuariosLista } from "./helpersEventos.js";
import {comunicandoServer_POST_GET} from "../comunicacion/conServer.js"
```

## Evento: lerusuarios

O propio nome indica que no momento que se produza o envento, `click` neste caso, leerá os datos da base de datos (bbdd):
<div align="center">

![imaxe de gardar](/Arquivos_md/CLIENTE/imaxes/botonLerUsuarios.png)
</div>

A función debe ser asíncrona, dado que leva unha función que leva consigo un `fetch`, polo que debemos colocar `async`

> [!NOTE]
> Podemos separar estas funcións que están dentro dos eventos. 
> De tal xeito, que sólo habería o ```lerusuarios.addEventListener("click",<nome función>)```

Dentro deste evento deberemos observar:

- A `petición de datos ao server`, ca función `comunicandoServer_POST_GET`:

```javascript
let usuarios = await comunicandoServer_POST_GET(datos)
```
- O filtro para que pinte no html cando chegan datos, a través do if:

```javascript
 if(usuarios !== undefined){          
    usuariosLista(usuarios)
    updateUser()
 }
```

Dentro deste if, observamos a función que vai pintar no HTML `usuariosLista`, o listado de usuarios. Como se observa, a ``variable usuarios`` é a que entra. 

Na seguinte línea, colocamos a función `updateUser`, é colocada aquí por temas do burbujeo de eventos. Esta función, como o seu nome indica, vai ser a que modifique os usuarios cando cliquemos o botón de gardar:

<div align="center">

![imaxe de gardar](/Arquivos_md/CLIENTE/imaxes/imaxeGardar.png)

</div>

## Evento: rexistrarUsuario

Este evento corresponde ao formulario do ```index.html```.

Utilizamos o obxeto `FormData`, ao mesmo tempo creamos os datos que van ir o fetch utilizado na función `comunicandoServer_POST_GET`. 

Se cadra, un dos detalles máis importantes, é cómo creamos a variable `datos`
formando, o endpoint e obxeto que leva o método e o body.

```javascript
let datos = {
          endpoint: "/rexistro",
          tipoComunicacion: {method: "POST",body: new FormData(formRexistro) }
        }

```