const imaxes = {
    atributos:{
        src:"src",
        name:"name",
    },
    disquette: {
        normal:{
            url:"./imaxesConstantes/diskette.png",
            atributo:"src"
        },
        guardado:{
            url:"./imaxesConstantes/save.png",
            atributo:"src"
        },
        atributo:{
            name:"name",
            valor:"gardar"
        }
    },
    papelera:{
        normal:{
            url:"./imaxesConstantes/papelera.png",
            atributo: "src"
        },
        atributo:{
            name:"data-eliminar",
            valor:"eliminar"
        }
        /*atributo:{
            name:"name",
            valor:"eliminar"
        }*/
    }
}
const iconoDisquete = {
    atributo:{
        name: imaxes.disquette.atributo.name,
        valor:imaxes.disquette.atributo.valor
    },
    src:imaxes.disquette.normal.atributo,
    url:imaxes.disquette.normal.url
}
const iconoDisqueteSave = {
    atributo:{
        name: imaxes.disquette.atributo.name,
        valor:imaxes.disquette.atributo.valor
    },
    src:imaxes.disquette.guardado.atributo,
    url:imaxes.disquette.guardado.url
}
const iconoPapelera = {
    atributo:{
        name:imaxes.papelera.atributo.name,
        valor:imaxes.papelera.atributo.valor
    },
    src:imaxes.papelera.normal.atributo,
    url:imaxes.papelera.normal.url
}
export{
    imaxes,
    iconoDisquete,
    iconoDisqueteSave,
    iconoPapelera
}