window.addEventListener("load", function () {
    let peliculasGuardadas = JSON.parse(localStorage.getItem("id"));
    console.log(peliculasGuardadas);
  
    let container = document.querySelector(".lista_Des");
   
    for(let i=0; i<peliculasGuardadas.length; i++){
        favoritosmuestra(peliculasGuardadas[i])
    }
    function favoritosmuestra(id){
        let url= `https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
        fetch (url)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
                container.innerHTML += ` <li class="listaf">
                                <a  class= "boton_peli" href="./detail-serie.html"> <img class="amg"src=" https://image.tmdb.org/t/p/w500${peliculasGuardadas[0].imagenUrl}" alt=""></a>
                                <a class="botones_titulos"href="./detail-serie.html"><h2> ${peliculasGuardadas[0].titulo}</h2></a>
                            </li> `
            })
            .catch(function(e){
                console.log(e)
            })
        }
    })


             
