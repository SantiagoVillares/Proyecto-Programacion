let query = location.search;
let StO= new URLSearchParams (query);
let Srch= StO.get('querys');
console.log(query)
let url= `https://api.themoviedb.org/3/movie/76341?api_key=2a3601e42fea0b8cec36fb4c1999c023&query=${Srch}`

console.log(url);

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

    .catch(function(error){
        console.log(error);
    })
