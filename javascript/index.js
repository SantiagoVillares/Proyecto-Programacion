//formularios
let url=  `https://api.themoviedb.org/3/movie/76341?api_key=2a3601e42fea0b8cec36fb4c1999c023&query=null`
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
                            <img src=${informacion[i].poster_path} alt="Error" />
                            <a href='detalle.html?id=${informacion[i].title}'>${informacion[i].title}</a>
                            <p> Fecha de estreno: ${informacion[i].release_date}</p>
                        </article>`
        }
        container_1.innerHTML=pelicula_1;

    })

    .catch(function(error){
        console.log(error);
    })


