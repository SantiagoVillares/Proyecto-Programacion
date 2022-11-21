let storagenuevo = localStorage.getItem('favoritos');
console.log(storagenuevo)

let elegido = JSON.parse(storagenuevo);
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