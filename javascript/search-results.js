let query = location.search; //Obtengo la QS
let stringToObject = new URLSearchParams(query); //La trasnformo en OL

let aBuscar = stringToObject.get('querys'); //Obtengo los datos de una propiedad con get()

let url2=`https://api.themoviedb.org/3/search/tv?query=${aBuscar}&api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1&include_adult=false`


let url = `https://api.themoviedb.org/3/search/movie?query=${aBuscar}&api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1&include_adult=false`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('.lista_elementos_3');
        let characters = '';
        let titulo= document.querySelector('.titulos_seccion_busqueda');
        let factos= 'Se busco: ';
        let final= factos + `${aBuscar}`
        titulo.innerHTML = final
        
        if(final===''){
            alert('no hay resultado para su búsqueda') 
        }
        

        else{

        for(let i=0; i<info.length; i++){
            characters += `<li class="elementos_hijos">
                                <a class="boton_peli" href="./detail-movie.html?id=${info[i].id}"><img class="amg"src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="${info[i].title}"></a>
                                <a class="botones_titulos" href="./detail-movie.html?id=${info[i].id}"><p class="botones_titulos">${info[i].title}</p></a>
                            </li>`
        } }
        container.innerHTML = characters;

        
    })
        
    .catch(function(error){
        console.log(error);
    })

    fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('.lista_elementos_4');
        let characters = '';

        if(data.results.length==0){
            container.innerHTML `no hay resultado para su búsqueda`
        }
        else{

            for(let i=0; i<info.length; i++){
                characters += `<li class="elementos_hijos">
                                    <a class="boton_peli" href="./detail-serie.html?id=${info[i].id}"><img class="amg"src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="poster path movie"></a>
                                    <a class="botones_titulos" href="./detail-serie.html?id=${info[i].id}"><p class="botones_titulos">${info[i].name}</p></a>
                                </li>`
            }
        container.innerHTML = characters;
    }
        
    })
        
    .catch(function(error){
        console.log(error);
    })