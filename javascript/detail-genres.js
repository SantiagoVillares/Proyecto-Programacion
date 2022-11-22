let qs= location.search
console.log(qs);
let qsto= new URLSearchParams(qs);
let id= qsto.get("id");
let type= qsto.get('type');
let genre_name= qsto.get('genre_name')
let serie=`https://api.themoviedb.org/3/tv/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
let movies=`https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`   
let imag = document.querySelector('.menu')
let titulo=document.querySelector('.titulo_seccion')
let url_detalle_gen=`https://api.themoviedb.org/3/discover/movie?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${id}`;
        fetch(url)
            .then(function(response){
                return response.json();
             })
             .then(function(data){
                console.log(data)
                let listaGeneros = data.results
                console.log(listaGeneros);
                
                
                for(let i = 0; i<8; i++){
                    imag+=

                    `<article class="cajas">
                             <a href="./detail-movie.html?idPelicula=${listaGeneros[i].id}"><img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${listaGeneros[i].poster_path}" alt=""></a>
                             <p class="titulo">${listaGeneros[i].title}</p>
                             <p class= "resultadoGen" ${listaGeneros[i].poster_path} alt = <a href="./detail-genres.html?id=${listaGeneros[i].id}" class= "detailLink">
                     </article>`
                     

                     
                
                }
                
             })
    

 
    

