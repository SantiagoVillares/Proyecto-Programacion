let storagepelis = localStorage.getItem('favoritos');
console.log(storagepelis)

let elegido = JSON.parse(storagepelis);
console.log(elegido);

let escribir= document.querySelector('.lista_des')


if (elegido == null || elegido.length==0){
    escribir.innerHTML= `<h1> No hay Favoritos</h1>`
} else {
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
        escribir.innerHTML += ` <li class="listaf">
                                     <a  class= "boton_peli" href="./detail-serie.html"> <img class="amg"src= https://image.tmdb.org/t/p/w500/${data.poster_path} alt=""></a>
                                     <a class="botones_titulos"href="./detail-serie.html"><h2> ${data.title}</h2></a>
                                     
                                </li>`
    })
    .catch(function(e){
        console.log(e);
    })

}




let storageshows = localStorage.getItem('favoritoSeries');
console.log(storageshows)

let series = JSON.parse(storageshows);
console.log(series);

let edicion= document.querySelector('.lista_des')


if (series == null || series.length==0){
    edicion.innerHTML= `<h1> No hay Favoritos</h1>`
} else {
    for (let i=0; i<series.length; i++ ){
        muestraFav(elegido[i])
    }
}

function muestraSeries (id){
    let urlser = `https://api.themoviedb.org/3/tv/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
    
    fetch(urlser)
    .then(function(response1){
        return response1.json();
    })
    .then(function(data1){
        console.log(data);
        edicion.innerHTML += ` <li class="listaf">
        <a  class= "boton_peli" href="./detail-serie.html"> <img class="amg"src= https://image.tmdb.org/t/p/w500/${data.poster_path} alt=""></a>
        <a class="botones_titulos"href="./detail-serie.html"><h2> ${data.name}</h2></a>
        
   </li>`
    })
    .catch(function(e){
        console.log(e);
    })

}
