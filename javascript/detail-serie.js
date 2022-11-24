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
    let api_reco=` https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`
    let bt_reco= document.querySelector(".bt_recomiendo");
    let show_reco= document.querySelector(".recomiendo");
    //ahora hacemos el evento del boton
    bt_reco.addEventListener("click", function(){
        if(show_reco.style.display !="flex"){
            show_reco.style.display= "flex"
            bt_reco.innerText= "Ocultar recomendaciones"
        }
        else {
            show_reco.style.display= "none"
            bt_reco.innerText= "Ver recomendaciones"
        }
    })
    fetch(api_reco)
    .then(function(response){
        return response.json();
    })
    .then(function(centro){
        console.log(centro)
        let reco= document.querySelector(".lista_elementos_7")
        let resultadoss= centro.results;
        let string="";
        for(let i=0;i<5;i++){
            string += `<li class="elementos_hijos">
                        <a class="boton_peli" href="./detail-serie.html?id=${resultadoss[i].id}"><img class="amg" src="https://image.tmdb.org/t/p/w500/${resultadoss[i].poster_path}" alt="Error" /></a>
                        <a class="botones_titulos" href="./detail-serie.html?id=${resultadoss[i].id}"><p>${resultadoss[i].name}</p></a>
                        </li>`
        }
        reco.innerHTML=string
    })
    .catch(function(error){
        console.log(error)
    })
    let favoritoSeries=[];
    let storageSeries=localStorage.getItem('favoritoSeries');
    if (storageSeries!= null){
        favoritoSeries=JSON.parse(storageSeries);
        
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
            link.innerText="ELIMINAR DE FAVORITOS"
        }
        let seriesfav= JSON.stringify(favoritoSeries);
        localStorage.setItem('favoritoSeries', seriesfav);
        console.log(localStorage)
    })
    
    