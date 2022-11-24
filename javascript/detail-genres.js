let q=location.search//Obtengo la QS
let qsto= new URLSearchParams(q)
let id=qsto.get('id')
let type= qsto.get('type');
let name1 =qsto.get('name')

let url_detalle_gen=`https://api.themoviedb.org/3/discover/movie?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

let url_detalle_series= `https://api.themoviedb.org/3/discover/tv?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

if (type=='pelicula'){
    fetch(url_detalle_gen)
    .then(function(response){
        return response.json();
     })
     .then(function(data){
        let listaGeneros = data.results
        

        let imag = document.querySelector('.lista_elementos_genre')
        let titulo=document.querySelector('.titulo_seccion1')
        let escritura=''
        let titulo1 = ''
        
        titulo1+= `Peliculas de: ${name1}`
        for(let i = 0; i<listaGeneros.length; i++){
            escritura+=

            `  <li class="elementos_hijos">
                    <a class="boton_peli" href="./detail-movie.html?id=${listaGeneros[i].id}"><img class="amg" src=https://image.tmdb.org/t/p/w500/${listaGeneros[i].poster_path} alt="Error" /></a>
                    <a class="botones_titulos" href="./detail-movie.html?id=${listaGeneros[i].id}"><p>${listaGeneros[i].title}</p></a>
                    
                </li>`

        }
        imag.innerHTML=escritura
        titulo.innerHTML=titulo1
        

        
     })



} else {
    
        fetch(url_detalle_series)
        .then(function(response){
            return response.json();
         })
         .then(function(datas){
            console.log(datas)
            
            let listaGenSer = datas.results
            let imag = document.querySelector('.lista_elementos_genre')
            let titulo=document.querySelector('.titulo_seccion1')
            let escritura=''
            let titulo1 = ''
            
            titulo1+= `Peliculas de: ${listaGenSer.genre}`
            for(let i = 0; i<listaGenSer.length; i++){
               
                escritura+=
    
                `  <li class="elementos_hijos">
                        <a class="boton_peli" href="./detail-movie.html?id=${listaGenSer[i].id}"><img class="amg" src=https://image.tmdb.org/t/p/w500/${listaGenSer[i].poster_path} alt="Error" /></a>
                        <a class="botones_titulos" href="./detail-movie.html?id=${listaGenSer[i].id}"><p>${listaGenSer[i].name}</p></a>
                        
                    </li>`
    
            }
            imag.innerHTML=escritura
            titulo.innerHTML=titulo1
            
    
            
         })
    
    
    
    
}
       
    

 
    

