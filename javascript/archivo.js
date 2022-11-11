let url=()

fetch(`https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=<<2a3601e42fea0b8cec36fb4c1999c023>>&language=en-US&page=1&include_adult=false`)
	    .then(function(response){
	        return response.json();
            })
        .then(function(data){
                console.log(data);
            })
        .catch(function(error){
                console.log('El error es: ' + error);
            
        })
