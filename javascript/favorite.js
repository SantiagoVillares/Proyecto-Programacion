
let storagepelis = localStorage.getItem('favoritos');


let elegido = JSON.parse(storagepelis);


let escribir= document.querySelector('.lista_pelis')


if (elegido == null || elegido.length==0){
    escribir.innerHTML= `<h1 class="subtitulo"> NO HAY PELICULAS SELECCIONADAS</h1>`
} 
else {
    for (let i=0; i<elegido.length; i++ ){
        muestraFav(elegido[i])
    }
}
function muestraFav (id){
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`

    fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        escribir.innerHTML += ` <li class="elementos_hijos">
                                     <a  class= "boton_peli" href="./detail-movie.html?id=${data.id}"> <img class="amg"src= https://image.tmdb.org/t/p/w500/${data.poster_path} alt=""></a>
                                     <a class="botones_titulos" href="./detail-movie.html?id=${data.id}"> <h2> ${data.title}</h2></a>
                                     
                                </li>`
    })
    .catch(function(e){
        console.log(e);
    })

}

let storageshows = localStorage.getItem('favoritoSeries');
let series = JSON.parse(storageshows);
let edicion= document.querySelector('.lista_series')


if (series == null || series.length==0){
    edicion.innerHTML= `<h1 class="subtitulo"> NO HAY SERIES SELECCIONADAS</h1>`
} 
else {
    for (let i=0; i<series.length; i++ ){
        muestraSeries(series[i])
    }
}


function muestraSeries (id1){
    let urlser = `https://api.themoviedb.org/3/tv/${id1}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
    
  fetch(urlser)
    .then(function(response1){
        return response1.json();
    })
    .then(function(data1){
        
        edicion.innerHTML += `<li class="elementos_hijos">
                                  <a  class= "boton_peli" href="./detail-serie.html?id=${data1.id}"> <img class="amg"src= https://image.tmdb.org/t/p/w500/${data1.poster_path} alt=""></a>
                                  <a class="botones_titulos"href="./detail-serie.html?id=${data1.id}"><h2> ${data1.name}</h2></a> 
                              </li>`
   
    })
    .catch(function(e){
        console.log(e);
    })
}




