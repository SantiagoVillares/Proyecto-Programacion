let qs= location.search;
console.log(qs);
let qsto= new URLSearchParams(qs);
let id= qsto.get("id");
let url_posta=`https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
let proveedores=`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=2a3601e42fea0b8cec36fb4c1999c023`


fetch(url_posta)
    .then(function(response){
        return response.json();
    })
    .then(function(detalles){
        console.log(detalles)
        let izq= document.querySelector(".izq");
        let der= document.querySelector(".der");
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
                        <p class="txt">Duracion: ${detalles.runtime}</p>
                        <p class="txt">Generos: <a> Te la debo, por ahora</a></p>
                        <p class="txt">Lenguage: ${detalles.original_language}</p>
                        `
        izq.innerHTML=contenedor_1;
        der.innerHTML=contenedor_2;
    })
fetch(proveedores)
    .then(function(response){
        return response.json();
    })
    .then(function(repro){
        let hub= repro.results
        
        let selector = document.querySelector(".izquierda")
        let st_rep= ""
        for(i=0;i<hub.length;i++){
            
            st_rep+= `<a class="botones_titulos" href=${hub[i].link}><p class="botones_titulos">${repro[i]}</p></a>`
        }
        console.log(st_rep)
        selector.innerHTML=st_rep;
    })
let api_reco= `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`
let bt_reco= document.querySelector(".bt_recomiendo");
let show_reco= document.querySelector(".recomiendo");
//ahora hacemos el evento del boton
bt_reco.addEventListener("click", function(){
    if(show_reco.style.display !="flex"){
        show_reco.style.display= "flex"
        bt_reco.innerText= "Ocultar recomendaciones"
    }
    else {
        show_reco.style.display= "none"
        bt_reco.innerText= "Ver recomendaciones"
    }
})
fetch(api_reco)
    .then(function(response){
        return response.json();
    })
    .then(function(centro){
        console.log(centro)
        let reco= document.querySelector(".lista_elementos_7")
        let resultadoss= centro.results;
        let string="";
        for(let i=0;i<5;i++){
            string += `<li class="elementos_hijos">
                        <a class="boton_peli" href="./detail-movie.html?id=${resultadoss[i].id}"><img class="amg" src="https://image.tmdb.org/t/p/w500/${resultadoss[i].poster_path}" alt="Error" /></a>
                        <a class="botones_titulos" href="./detail-movie.html?id=${resultadoss[i].id}"><p>${resultadoss[i].title}</p></a>
                        </li>`
        }
        reco.innerHTML=string
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

