window.addEventListener("load", function () {
    let peliculasGuardadas = JSON.parse(localStorage.getItem("id"));
    console.log(peliculasGuardadas);
  
    let container = document.querySelector(".listaDes");
    let pelicula = " ";
  
    pelicula.innerHTML += `<li class="listaf">
          <a class= "boton_peli" href="./detail-movie.html"> <img class="amg" src="${peliculasGuardadas[0].imagenUrl}" alt="Que Paso Ayer?"></a>
          <a class="botones_titulos" href="./detail-movie.html"><h2>${peliculasGuardadas[0].titulo}</h2></a>
      </li>`;
  
    container.innerHTML(pelicula);
  });
