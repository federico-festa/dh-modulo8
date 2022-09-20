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
    const ulErrores = document.querySelector('ul');
    const errores = [];

    title.focus();

    title.addEventListener('blur', () => {
        if (title.value.trim() == '') {
            errores.push('El titulo esta vacio');
            title.classList.add('is-invalid');
            title.placeholder = 'El titulo esta vacio';
        } else if (title.value.length < 2) {
            errores.push('El título debe tener al menos dos caracteres');
            title.classList.add('is-invalid');
        } else {
            title.classList.remove('is-invalid');
            title.classList.add('is-valid');
        };
    });

    rating.addEventListener('blur', () => {
        if (rating.value == '') {
            errores.push('La calificacion esta vacia');
            rating.classList.add('is-invalid');
            rating.placeholder = 'La calificacion esta vacia';
        } else if (rating.value > 10) {
            errores.unshift('La calificacion no puede ser mayor a 10');
            rating.classList.add('is-invalid');
            ulErrores.classList.add('alert-warning');
            ulErrores.innerHTML += '<li>' + errores[0] + '</li>';
        } else {
            rating.classList.remove('is-invalid');
            rating.classList.add('is-valid');
        };
    });

    awards.addEventListener('blur', () => {
        if (awards.value == '') {
            errores.push('Los premios estan vacios');
            awards.classList.add('is-invalid');
            awards.placeholder = 'Este campo no puede estar vacio';
        } else if (awards.value > 10) {
            errores.unshift('Los premios no pueden ser mayores a 10');
            rating.classList.add('is-invalid');
            ulErrores.classList.add('alert-warning');
            ulErrores.innerHTML += '<li>' + errores[0] + '</li>';
        } else {
            awards.classList.remove('is-invalid');
            awards.classList.add('is-valid');
        };
    });

    release.addEventListener('blur', () => {
        if (release.value == '') {
            errores.push('La fecha de estreno esta vacia');
            release.classList.add('is-invalid');
            release.placeholder = 'Este campo no puede estar vacio';
        } else {
            release.classList.remove('is-invalid');
            release.classList.add('is-valid');
        };

    });

    length.addEventListener('blur', () => {
        if (length.value == '') {
            errores.push('La duracion esta vacia');
            length.classList.add('is-invalid');
            length.placeholder = 'Este campo no puede estar vacio';
        } else if (length.value < 60 || length.value > 360) {
            errores.push('La duracion debe ser entre 60 y 360 minutos');
            length.classList.add('is-invalid');
            ulErrores.classList.add('alert-warning');
            ulErrores.innerHTML += '<li>' + errores[errores.length-1] + '</li>';
        } else {
            length.classList.remove('is-invalid');
            length.classList.add('is-valid');
        };

    });

    genre.addEventListener('blur', () => {
        if (genre.value == '') {
            errores.push('El genero esta vacio');
            genre.classList.add('is-invalid');
            genre.placeholder = 'Este campo no puede estar vacio';
        } else {
            genre.classList.remove('is-invalid');
            genre.classList.add('is-valid');
        };
    });

    form.addEventListener('submit', (e) => {
        if (rating.value == '' && !errores.indexOf('calificacion')) {
            errores.push('La calificacion esta vacia');
            rating.classList.add('is-invalid');
        };

        if (awards.value == '' && !errores.indexOf('premios')) {
            errores.push('Los premios estan vacios');
            awards.classList.add('is-invalid');
        };

        if (release.value == '' && !errores.indexOf('fecha')) {
            errores.push('La fecha de estreno esta vacia');
            release.classList.add('is-invalid');
        };

        if (length.value == '' && !errores.indexOf('duracion')) {
            errores.push('La duracion esta vacia');
            length.classList.add('is-invalid');
        };

        if (genre.value == '' && !errores.indexOf('genero')) {
            errores.push('El genero esta vacio');
            genre.classList.add('is-invalid');
        };

        if (errores.length > 0) {
            e.preventDefault();
            ulErrores.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErrores.classList.add('alert-warning');
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>';
            };
        };

        if (errores.length == 0) {
            // form.submit()
            alert('La pelicula se guardó satisfactoriamente');
        };
    });

};