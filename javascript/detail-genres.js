window.addEventListener('load', function(){
    let qs = location.search;
    let qs1 = new URLSearchParams(qs);
    console.log(Qs)
    let id = qs1.get("id");
    let name = qs1.get("name");
    let type = qs1.get("type")
    let imag = document.querySelector('.lista_elemento_5')
    let titulo=document.querySelector('.titulo_seccion')
    let url=`https://api.themoviedb.org/3/discover/movie?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
    if (type == 'movie'){
        fetch(url)
            .then(function(response){
                return response.json();
             })
             .then(function(data){
                console.log(data)
                titulo.innerHTML+= `Peliculas del genero: ${name}`
                for(let i = 0; i<8; i++){
                    
                    let img = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`
                    let id = data.results[i].id
                    imag.innerHTML+=`<li class="elementos_hijos">
                    <a class="boton_peli" href="./detail-movie.html?id=${id}"><img class="amg" src=${img} alt=${data.results[i].original_title}/></a>
                    <a class="botones_titulos" href="./detail-movie.html?id=${id}"><p>${data.results[i].original_title}</p></a></li> `
                }
             })
    }
    
        
    
})
