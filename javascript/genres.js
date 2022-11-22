let url_pelis=`https://api.themoviedb.org/3/genre/movie/list?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
let url_series= `https://api.themoviedb.org/3/genre/tv/list?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
let genero= document.querySelector(".genres");

fetch(url_series)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let genes= data.genres
        console.log(genes)
        let ar= ""
        let listado= document.querySelector(".listado_series")
        for(let i=0;i<genes.length;i++)
        {ar+=`<li class="elementos_genero"><a class="botones_generos" href="./detail-genres.html?id=${genes[i].id}">${genes[i].name}</a></li>`
        
        }
        listado.innerHTML=ar
        console.log(data);
        console.log(ar);
    })
    .catch(function(error){
        console.log(error);
    })

fetch(url_pelis)
    .then(function(response1){
        return response1.json();
    })
    .then(function(data_1){
        let genesis= data_1.genres
        console.log(genesis)
        let arr= ""
        let listado_1= document.querySelector(".listado_pelis")
        for(let i=0;i<genesis.length;i++)
        {arr+=`<li class="elementos_genero"><a class="botones_generos" href="./detail-genres.html?=${genesis[i].id}">${genesis[i].name}</a></li>`

        }
        listado_1.innerHTML=arr
        console.log(data);
        
    })
    .catch(function(error){
        console.log(error);
    })

