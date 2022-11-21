let urlgen=`https://api.themoviedb.org/3/genre/movie/list?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
let genero= document.querySelector(".genres");

fetch(urlgen)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for(let i=0;i<data.genres.lenght;i++)
        {
            let info=data.genres[i].name
            listagen.innerHTML += `<article class="gen_lista">
            <a class="getnum" href="./detail-genres.html?id=${data.genres[i].id}">${genero}</a>
            </article>`
        }
        console.log(data);
        return data
    })
    .catch(function(error){
        return error
    })

