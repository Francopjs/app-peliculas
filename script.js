
/*
let nombre = "Franco";
let edad = 31;
let ciudad = "Mar del Plata";
let hobby = "surf";

console.log("Hola soy "+nombre + " tengo " + edad + " anos" + ", soy de la ciudad de " + ciudad + " y me gusta practicar " + hobby);

let titulo = document.getElementById("saludo");
titulo.textContent = "Hola, soy " + nombre;

let deporte = document.getElementById("pasatiempo");
deporte.textContent = "Me gusta hacer " + hobby; 

let anos = document.getElementById("edad");
anos.textContent = "Tengo " + edad + " anos";

let city = document.getElementById("ciudad");
city.textContent = "Soy oriundo de la ciudad de " + ciudad;

let boton = document.getElementById("miBoton");
boton.addEventListener ("click", function(){
    titulo.textContent = "Me clickearon"});

//{console.log("me clickearon pa")})

let buttomReset = document.getElementById("botonReset");
buttomReset.addEventListener ("click", function(){
    titulo.textContent = "Hola, soy " + nombre;});

let resultadoFinal = document.getElementById("resultado");

function DevolverValor (edad){
    if (edad>=65)
    {
        return "JUBILADO";
    }
    else if (edad>=18){
        return "Mayor";
    }
    else{
        return "Menor";
    }
}


let VerificacionBoton = document.getElementById("botonEdad");
VerificacionBoton.addEventListener ("click", function(){
    let valor = document.getElementById("inputEdad").value
    resultadoFinal.textContent = (DevolverValor(valor));
})
*/
/*
let resultadoFinal = document.getElementById("TextoResultado");

function UnificacionDatos (N,E,C){
    return "Tu nombre es: "+N+" Tu edad es: " +E+ "Tu ciudad es "+C;
}

let ComprobacionBoton = document.getElementById("botonFinal");
ComprobacionBoton.addEventListener("click", function(){
    let Nombre = document.getElementById("inputNombre").value
    let Edad = document.getElementById("inputEdad").value
    let Ciudad = document.getElementById("inputCiudad").value

    resultadoFinal.textContent = UnificacionDatos(Nombre,Edad,Ciudad);
})



let ciudades = ["LosAngeles","Ohio","Washington","Mar del Plata","Pinamar","Las Grutas","VillaGessell"];

ciudades.forEach(function(ciudad){
    let lista = document.getElementById("miLista")
    let item = document.createElement("li")
    item.textContent = ciudad;
    lista.appendChild(item);
})

let ciudadesParaHtml=[];

let BotonCiudad = document.getElementById ("BotonCiudad");
BotonCiudad.addEventListener("click",function(){
    let CiudadIngresada = document.getElementById("inputCiudad").value
    let listaEjercicio = document.getElementById("listaCiudades")
    ciudadesParaHtml.push(CiudadIngresada)
    let City = document.createElement("li")
    City.textContent = CiudadIngresada;
    listaEjercicio.appendChild(City);
    console.log(ciudadesParaHtml);
})



let arregloObjetosFinal = [
    {   titulo: "RapidoyFurioso",
        director: "GeorgeMichael",
        fechaLanzamiento: 1991
    },
    {   titulo: "Armagedon",
        director: "JamesCameron",
        fechaLanzamiento: 1991
    },
    {   
        titulo: "StarWars",
        director: "GeorgeLucas",
        fechaLanzamiento: 1973
    }
]


arregloObjetosFinal.forEach(function(pelicula){
    let lista = document.getElementById("ListaPeliculasEjercicio")
    let item = document.createElement("li")
    item.textContent = `Titulo: ${pelicula.titulo} Director: ${pelicula.director} Fecha: ${pelicula.fechaLanzamiento}`
    lista.appendChild(item);
})
*/




async function traerUsuario(){
        let respuesta = await fetch("https://randomuser.me/api/")
        let datos = await respuesta.json()
        let NombreExterno = document.getElementById("DatoExterno")
        NombreExterno.textContent = (`Nombre: ${datos.results[0].name.first} - Apellido: ${datos.results[0].name.last}`)
    }



