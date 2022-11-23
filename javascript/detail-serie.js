let qs= location.search;
let qsto = new URLSearchParams(qs);
let id= qsto.get("id");
let serie= `https://api.themoviedb.org/3/tv/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`

fetch(serie)
    .then(function(response){
        return response.json();
    })
    .then(function(detail){
        console.log(detail)
        let izq= document.querySelector(".izq");
        let der= document.querySelector(".der");
        let contenedor_1=""
        let contenedor_2=""
        contenedor_1+=`<h1 class="titulo">${detail.name}</h1>
                        <img class="foto_detalles" src=https://image.tmdb.org/t/p/w500/${detail.poster_path} alt="Error"/>
                        <h2 class="slogan_txt">${detail.tagline}</h2>`

        contenedor_2+=`<h2 class="subtitulo">Datos Importantes</h2>
                        <h2 class="subtitulo">Resumen</h2>
                        <p class="txt">${detail.overview}</p>
                        <h2 class="subtitulo">Data extra</h2>
                        <p class="txt">Rating: ${detail.vote_average}/10</p>
                        <p class="txt">Estreno: ${detail.first_air_date}</p>
                        <p class="txt">Generos: <a> Te la debo, por ahora</a></p>
                        <p class="txt">Lenguage: ${detail.original_language}</p>
                        <p class="txt">Numero De Episodios: ${detail.number_of_episodes}</p>
                        <p class="txt">Numero De Temporadas: ${detail.number_of_seasons}</p>
                        `
        izq.innerHTML=contenedor_1;
        der.innerHTML=contenedor_2;
    })
    .catch(function(error){
        console.log(error)
    })

    let favoritoSeries=[];
    let storageSeries=localStorage.getItem('favoritoSeries');
    if (storageSeries!= null){
        favoritoSeries=JSON.parse(storageSeries);
        console.log(favoritoSeries)
    }
    let link = document.querySelector(".urls1")
    
    if (favoritoSeries.includes(id)){
        link.innerText= "ELIMINAR DE FAVORITOS"
    };
    link.addEventListener('click', function(e){
        e.preventDefault();
        if (favoritoSeries.includes(id)){
            let indice = favoritoSeries.indexOf(id);
            favoritoSeries.splice(indice, 1);
            link.innerText="AGREGAR A FAVORITOS"
        } else {
            favoritoSeries.push(id);
            console.log(favoritoSeries)
            link.innerText="ELIMINAR DE FAVORITOS"
        }
        let seriesfav= JSON.stringify(favoritoSeries);
        localStorage.setItem('favoritoSeries', seriesfav);
        console.log(localStorage)
    })
    
    