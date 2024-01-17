# Observacións iniciais

Neste index.html podemos observar diferentes elementos, entre eles:

- O arquivo `js`, lembrar que está da seguinte maneira:
```html
<script async type="module" src="./js/index.js"></script>
```
- A navegación, a través de: 
    - A etiqueta ```nav```
- O formulario: 
    - O formulario está para insertar usuarios.
        - Insertando diferentes datos como :
            - Foto
            - Nome e apelidos
        - Temos que observar tamén que temos o atributo 'enctype',onde o seu valor é: ```multipart/form-data```, xa que estamos enviando un ficheiro:

```javascript
<form id="formRexistro" name="rexistro" enctype="multipart/form-data">

            <input name="nome" type="text" placeholder="Introduce nome" />
            <input name="apelido1" type="text" placeholder="Introduce apelido1" />
            <input name="apelido2" type="text" placeholder="Introduce apelido2" />
            <input name="usuario" type="file" placeholder="introduce o ficheiro" />
      
            <button id="rexistrarUsuario">enviar</button>
      
          </form>

```
