//formularios
let url=  `https://api.themoviedb.org/3/movie/76341?api_key=2a3601e42fea0b8cec36fb4c1999c023&query=null`
let agre_elementos_peli= `https://api.themoviedb.org/3/movie/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`
let agre_elementos_tv= `https://api.themoviedb.org/3/tv/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let informacion= data.results;
        let container= document.querySelector('.res_busq');
        let pelicula= '';

        for(let i=0;i<informacion.length;i++){
            pelicula += `<article>
                            <img src=${informacion[i].poster_path} alt="Error" />
                            <a href='detalle.html?id=${informacion[i].title}'>${informacion[i].title}</a>
                        </article>`
        }
        container.innerHTML= pelicula;
    
    })
    .then(function(data){
        let informacion= data.results;
        let container_1= document.querySelector('.section_js');
        let pelicula_1= '';
        for(let i=0;i<informacion.length;i++){
            pelicula_1 += `<article>
                            <img src=https://image.tmdb.org/t/p/w500/${informacion[i].poster_path} alt="Error" />
                            <a href='detalle.html?id=${informacion[i].title}'>${informacion[i].title}</a>
                            <p> Fecha de estreno: ${informacion[i].release_date}</p>
                        </article>`
        }
        container_1.innerHTML=pelicula_1;

    })

    .catch(function(error){
        console.log(error);
    })

//armando el home
fetch(agre_elementos_peli)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let informacion=data.results;
        let container= document.querySelector('.lista_elementos_1');
        let pelicula= '';
        for(let i=0;i<informacion.length;i++){
            pelicula += `<li class="elementos_hijos">
                            <a class="boton_peli" href="./detail-movie.html"><img class="amg" src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="Error" /></a>
                            <a class="botones_titulos" href="./detail-movie.html"><p>${informacion[i].title}</p></a>
                        </li>`
        }
        container.innerHTML= pelicula
    })
    .catch(function(error){
        console.log(error)
    })

fetch(agre_elementos_tv)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let informacion1 =data.results;
        let container1= document.querySelector('.lista_elementos_2');
        let show= " ";
        for (let i=0; i<informacion1.length;i++){
            show+= `<li class="elementos_hijos">
                        <a class="boton_peli" href="./detail-movie.html"><img class="amg" src="https://image.tmdb.org/t/p/w500/${informacion1[i].poster_path}" alt="Error" /></a>
                        <a class="botones_titulos" href="./detail-movie.html"><p>${informacion1[i].name}</p></a>
                        
                    </li>`
        }
        console.log(show)
        container1.innerHTML=show
    })
