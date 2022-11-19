window.addEventListener("load", function () {
    let peliculasGuardadas = JSON.parse(localStorage.getItem("id"));
    console.log(peliculasGuardadas);
  
    let container = document.querySelector(".lista_Des");
    let pelicula = " ";
  
    pelicula.innerHTML += ` <li class="listaf">
    <a  class= "boton_peli" href="./detail-serie.html"> <img class="amg"src="${peliculasGuardadas[0].imagenUrl}" alt=""></a>
    <a class="botones_titulos"href="./detail-serie.html"><h2> ${peliculasGuardadas[0].titulo}</h2></a>
</li> `;
  
    container.innerHTML(pelicula);
  });
