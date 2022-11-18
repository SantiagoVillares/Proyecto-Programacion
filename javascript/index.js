//formularios
let agre_elementos_peli= `https://api.themoviedb.org/3/movie/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`
let agre_elementos_tv= `https://api.themoviedb.org/3/tv/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`


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
                            <a class="boton_peli" href="./detail-movie.html?id=${informacion[i].id}"><img class="amg" src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="Error" /></a>
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
                        <a class="boton_peli" href="./detail-serie.html?id=${informacion1[i].id}"><img class="amg" src="https://image.tmdb.org/t/p/w500/${informacion1[i].poster_path}" alt="Error" /></a>
                        <a class="botones_titulos" href="./detail-serie.html?id=${informacion1[i].id}"><p>${informacion1[i].name}</p></a>
                        
                    </li>`
        }
        console.log(show)
        container1.innerHTML=show
    })
    
