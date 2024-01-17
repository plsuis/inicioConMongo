# Observacións

Este arquivo, contén unha variable do `id` que xenera de maneira automática Mongo: ***ObjectId***

## A súa cabeceira

Neste arquivo temos a seguinte cabeceira:

```javascript
const {MongoClient, ObjectId} = require("mongodb")
const url = process.env.URLMONGO
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = "usuarios";
```

Onde definimos e asignamos á colección sobre a cal vamos actuar.

## Conexión da base de datos

Cando temos que traballar cunha base de datos, debemos abrila conexión con ela. Para iso, temos que ***conectala*** coa seguinte asignación:

```javascript
await client.connect();
```

Se observades, aparece unha varible `client`, con esta estamos accedemos a clase asociada de mongo. Previamente está a ser creada a través de:

```javascript
const client = new MongoClient(url)
```

## A función creada : deleteUsuario

```javascript
async function updateUsuario(id,novoNome){
    /// código ////
}
```

### O id

Esta función debe levar o `id` do usuario, xa que, vamos a eleminalo. Porqué o `id`?, lembrade que o `id`, sempre será único. 

Nunha base de datos, o ter os datos de nome e apelidos, moitas veces poden coincidir, incluso, téñense dado casos de DNI's iguais. Polo que non é mala práctica deixar que mongo os xenere.

Polo que o `id`, é parámetro fundamental de entrada da función para proceder a eliminalo usuario.

### O novoNome

Esta é a variable de entrada co novo nome que vai ser modificado, utilízase na sentencia `updateMany`

## Relacionando a bbdd e a colección

É necesario dicirlle a mongo a base de datos a cal me quero conectar, imaxina que a base de datos tivera moitísimas bases de datos, iso implica que mongo debe saber a que base de datos queres conectarte. Logo, temos que dicirllo, iso fáise do seguinte xeito:

> [!NOTE]
> Previamente debe estar conectada, como comentamos.

1. Logo debemos dicir a base de datos sobre a cal nos conectamos:

```javascript
const db = client.db(database);
```

2. A continuación deberemos dicirlle a colección:

```javascript
const coll = db.collection(coleccion);
```

## A actualización dos datos

Como nota puntual, a función utilizada é `updateMany`, inda que tamén poderíamos utilizar `updateOne`. Pensa que igual que modifica moitos, 1 é tamén algo. A continuación poñemos a cómo relacionamos a acción a realizar:

```javascript
        const result = await coll.updateMany(filtro,dato);
```

Observamos que ten dúas variables, `filtro` e `dato`:

```javascript
        const filtro ={
            _id:new ObjectId(id)
        }
        const dato = [{            
            $set: {
                name:novoNome
            }
        }] 
       
```

Neste caso, creo que se tes feitos os problemas que mandei entenderás que fixen nesta sentencia. O que estou a facer é modificar o nome, que ven da variable de entrada `novoNomo`