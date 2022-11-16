let query = location.search;
let StO= new URLSearchParams (query);
let Srch= StO.get('querys');
console.log(query)
let url= `https://api.themoviedb.org/3/search/movie?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1&include_adult=false
&query=${Srch}`

console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let informacion= document.querySelector(".resultados")
        let container= document.querySelector('.res_busq');
        if (data.results.length==0){
            informacion.innerHTML+=`La busqueda ${busqueda} no dio ningun resultado`
        })
        else{
            for(let i=0;i<data.results.length;i++){
                let img= `https://image.tmdb.org/t/p/w500${path}`
                let path=data.results[i].poster_path
                let id =data.results[i].id
                console.log(id)
                container.innerHTML+=`article class= "peli_buscada">
                <a href=".detalle.html?id=${id}"><img src="${img}" alt="Foto${data.results[i].original_title}
                <p class="title">${data.results[i].original_title}</p>
                <p> ${data.results[i].release_date}</p>
            </article>`})
    })

    .catch(function(error){
        console.log(error);
        })
