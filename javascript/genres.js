let urlgen=`https://api.themoviedb.org/3/genre/movie/list?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
let genero= document.querySelector(".cont");

fetch(urlgen)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for()

    })
