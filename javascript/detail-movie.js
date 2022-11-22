let qs= location.search;
let qsto= new URLSearchParams(qs);
let id= qsto.get("id");
let url_posta=`https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`

fetch(url_posta)
    .then(function(response){
        return response.json();
    })
    .then(function(detalles){
        console.log(detalles)
        let detodo=detalles;
        //let fondo= `https://image.tmdb.org/t/p/w500/${detodo.backdrop_path}`
        let data= document.querySelector(".contenedor_genera");
        let izq= document.querySelector(".izq");
        let der= document.querySelector(".der");
        //data.style.backgroundImage= url(fondo);
        let contenedor= ""
        let contenedor_1=""
        let contenedor_2=""
        contenedor_1+=`<h1 class="titulo">${detalles.title}</h1>
                        <img class="foto_detalles" src=https://image.tmdb.org/t/p/w500/${detalles.poster_path} alt="Error"/>
                        <h2 class="slogan_txt">${detalles.tagline}</h2>
                       `
                        

        contenedor_2+=`<h2 class="subtitulo">Datos Importantes</h2>
                        <h2 class="subtitulo">Resumen</h2>
                        <p class="txt">${detalles.overview}</p>
                        <h2 class="subtitulo">Data extra</h2>
                        <p class="txt">Rating: ${detalles.vote_average}/10</p>
                        <p class="txt">Estreno: ${detalles.release_date}</p>
                        <p class="txt">Generos: <a> Te la debo, por ahora</a></p>
                        <p class="txt">Lenguage: ${detalles.original_language}</p> `
        izq.innerHTML=contenedor_1;
        der.innerHTML=contenedor_2;
    })


let favoritos=[];
let storage=localStorage.getItem('favoritos');
if (storage!= null){
    favoritos=JSON.parse(storage);
    console.log(favoritos)
}
let link = document.querySelector(".urls1")

if (favoritos.includes(id)){
    link.innerText= "ELIMINAR DE FAVORITOS"
};
link.addEventListener('click', function(e){
    e.preventDefault();
    if (favoritos.includes(id)){
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice, 1);
        link.innerText="AGREGAR A FAVORITOS"
    } else {
        favoritos.push(id);
        console.log(favoritos)
        link.innerText="ELIMINAR DE FAVORITOS"
    }
    let pelisfav= JSON.stringify(favoritos);
    localStorage.setItem('favoritos', pelisfav);
    console.log(localStorage)
})

