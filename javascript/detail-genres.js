let q=location.search
let qsto= new URLSearchParams(q);
console.log(qsto)
let id= qsto.get("id");

let type= qsto.get('type');
let movie=`https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
let serie= `https://api.themoviedb.org/3/tv/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
let url_detalle_gen=`https://api.themoviedb.org/3/discover/movie?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${id}`
        fetch(url_detalle_gen)
            .then(function(response){
                return response.json();
             })
             .then(function(data){
                console.log(data)
                let listaGeneros = data.results
                console.log(listaGeneros);
                let imag = document.querySelector('.lista_elementos_genre')
                let titulo=document.querySelector('.titulo_seccion')
                let escritura=''
                
                
                for(let i = 0; i<listaGeneros.length; i++){
                    escritura+=

                    `  <li class="elementos_hijos">
                            <a class="boton_peli" href="./detail-movie.html?id=${listaGeneros[i].id}"><img class="amg" src=https://image.tmdb.org/t/p/w500/${listaGeneros[i].poster_path} alt="Error" /></a>
                            <a class="botones_titulos" href="./detail-movie.html?id=${listaGeneros[i].id}"><p>${listaGeneros[i].title}</p></a>
                            
                        </li>`
                
                     

                     
                
                }
                imag.innerHTML=escritura

                
             })
    

 
    

