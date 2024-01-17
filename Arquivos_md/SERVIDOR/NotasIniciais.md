# Apreciacións
Despois de facelos exercicios propostos para iniciarnos en mongo, procedemos a realizar un exercicio típicamente chamado: CRUD.

Sobre o cal é de creación, lectura, modificación e borrado de datos sobre unha base de datos.

Neste caso, é sobre a base de datos Mongo

## Arquivos que teñen operacións ca BBDD

Todos os arquivos que teñen operacións sobre a base de datos, van levar inicialmente o seguinte: 

```javascript
const {MongoClient} = require("mongodb")
```
De maneira puntual e neste caso, como en ```modificoDao.js```
```javascript
const {MongoClient, ObjectId} = require("mongodb")
```

> [!NOTE]
> Eu insertei usuarios deixando que ***Mongo*** xeneraxe o id. Polo que a hora de traballar con él, debo utiliar ***ObjectId***.

### A cabeceira

Na cabeceira destas funcións, atoparemos a seguinte estructura:

```javascript
const {MongoClient} = require("mongodb")
const url = process.env.URLMONGO;
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = "usuarios";
```

Utilizamos as variables almacenadas no arquivo `.env`. Neste caso:

- URLMONGO
- BBDD

> Neste arquivo `.env` teremos máis variables


### Funcións asíncronas

Para traballar con mongo, cabe destacar que traballaremos con funcións asíncronas, dado que ese proceso está a acceder o disco duro ou ten un tempo máis lento que o natural do programa.

```async/await```