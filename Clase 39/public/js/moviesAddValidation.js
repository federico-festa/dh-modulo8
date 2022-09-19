window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    

    const form = document.querySelector('.form');
    const title = document.querySelector('#title');
    const rating = document.querySelector('#rating');
    const awards = document.querySelector('#awards');
    const release = document.querySelector('#release_date');
    const length = document.querySelector('#length');
    const genre = document.querySelector('#genre_id');

    title.focus();

    form.addEventListener('submit', (e) => {
        const errores = [];
        if(title.value == ''){
            errores.push('El titulo esta vacio')
            alert('Por favor, ingrese el titulo')
        }
        if(rating.value == ''){
            errores.push('La calificacion esta vacia')
            alert('Por favor, ingrese la calificacion')
        }
        if(awards.value == ''){
            errores.push('Los premios estan vacios')
            alert('Por favor, ingrese la cantidad de premios')
        }
        if(release.value == ''){
            errores.push('La fecha de estreno esta vacia')
            alert('Por favor, ingrese la fecha de estreno')
        }
        if(length.value == ''){
            errores.push('La duracion esta vacia')
            alert('Por favor, ingrese la duracion')
        }
        if(genre.value == ''){
            errores.push('El genero esta vacio')
            alert('Por favor, seleccione el genero')
        }
        if(errores.length > 0) {
            e.preventDefault();
        }

    });




};