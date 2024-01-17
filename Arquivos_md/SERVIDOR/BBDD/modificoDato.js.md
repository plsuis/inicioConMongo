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

Cando temos que traballar cunha base de datos, debemos abrila conexión con ela. Para iso, temos que conectala coa seguinte asignación:

```javascript
await client.connect();
```

Se observades, aparece unha varible `client`, con esta estamos accedemos a clase asociada de mongo. Previamente está a ser creada a través de:

```javascript
const client = new MongoClient(url)
```

## A función creada : deleteUsuario

### O id

Esta función debe levar o `id` do usuario, xa que, vamos a eleminalo. Porqué o `id`?, lembrade que o `id`, sempre será único. 

Nunha base de datos, o ter os datos de nome e apelidos, moitas veces poden coincidir, incluso, téñense dado casos de DNI's iguais. Polo que non é mala práctica deixar que mongo os xenere.

Polo que o `id`, é parámetro fundamental de entrada da función para proceder a eliminalo usuario.

