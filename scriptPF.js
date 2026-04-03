

///ArregloOriginal de Peliculas
let PeliculasIniciales =[
  {
    titulo: "Jurassic Park",
    director: "Steven Spielberg",
    anio: 1993,
    genero: "Ciencia Ficcion"
  },
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    anio: 2010,
    genero: "Ciencia Ficcion"
  },
  {
    titulo: "The Godfather",
    director: "Francis Ford Coppola",
    anio: 1972,
    genero: "Crimen"
  },
  {
    titulo: "Titanic",
    director: "James Cameron",
    anio: 1997,
    genero: "Romance"
  },
  {
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    anio: 2008,
    genero: "Accion"
  }]


///Funcion para mostrar las peliculas  
function MostrarLista(ArregloPelicula){
    ArregloPelicula.forEach(function(pelicula){
        let listaVariable = document.getElementById("ListaPeliculas")
        let itemVariable = document.createElement("li")
        let titulo = document.createElement("strong")
        titulo.textContent = pelicula.titulo

        let detalle = document.createElement("p")
        detalle.textContent = `${pelicula.director} · ${pelicula.anio} · ${pelicula.genero}`

        itemVariable.appendChild(titulo)
        itemVariable.appendChild(detalle)
        listaVariable.appendChild(itemVariable)
    })
}

///Funcion peliculas Original
MostrarLista(PeliculasIniciales)

///Buscador por titulo
let BotonBusqueda = document.getElementById("BotonBuscador")
BotonBusqueda.addEventListener("click",function(){
    let InputIngresado = document.getElementById("inputBuscador").value
    let listaVariable = document.getElementById("ListaPeliculas");
    listaVariable.textContent = " "
    
    let resultadosBusqueda = PeliculasIniciales.filter(function(pelicula){
    return pelicula.titulo.toLowerCase().includes(InputIngresado.toLowerCase())
    })

    if (resultadosBusqueda.length===0)
        {
        let itemVariable = document.createElement("li")
        itemVariable.textContent = "No se encontraron resultados" 
        listaVariable.appendChild(itemVariable)
        }
    else 
    {
        MostrarLista(resultadosBusqueda)
    }
})

///Boton para volver
let BotonRegreso = document.getElementById("BotonVolver")
BotonRegreso.addEventListener("click",function(){ 
    let listaVariable = document.getElementById("ListaPeliculas");
    listaVariable.textContent = " "
    MostrarLista(PeliculasIniciales)
})


///Buscador por genero
let BotonCienciaFiccion = document.getElementById("BotonCienciaFiccion")
BotonCienciaFiccion.addEventListener("click",function(){
    let listaVariable = document.getElementById("ListaPeliculas");
    listaVariable.textContent = " "
    
    let resultadosBusquedaFiccion = PeliculasIniciales.filter(function(pelicula){
    return pelicula.genero === "Ciencia Ficcion"
    })

    MostrarLista(resultadosBusquedaFiccion)
})


///Agregar Pelicula al listado inicial
let BotonCargaDatos = document.getElementById("BotonEnviar")
BotonCargaDatos.addEventListener ("click",function(){
    let tituloNuevo = document.getElementById("inputTitulo").value
    let directorNuevo = document.getElementById("inputDirector").value
    let anioNuevo = document.getElementById("inputAnio").value
    let generoNuevo = document.getElementById("inputGenero").value

    let nuevaPeli = { 
    titulo: tituloNuevo,
    director: directorNuevo,
    anio: anioNuevo,
    genero: generoNuevo
    }

    PeliculasIniciales.push(nuevaPeli)
    let listaVariable = document.getElementById("ListaPeliculas");
    listaVariable.textContent = " "
    MostrarLista(PeliculasIniciales) 
})


