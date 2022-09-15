window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'red';
    });

    const title = document.querySelector('#titulo');
    let estadoSecreto = 0;
    title.addEventListener('keyup', function (e) {
        let key = e.key;
        console.log(key);

        switch (key) {
            case 's':
                estadoSecreto = 1;
                break;
            case estadoSecreto == 1 && 'e':
                estadoSecreto = 2;
                break;
            case estadoSecreto === 2 && 'c':
                estadoSecreto = 3;
                break;
            case estadoSecreto === 3 && 'r':
                estadoSecreto = 4;
                break;
            case estadoSecreto === 4 && 'e':
                estadoSecreto = 5;
                break;
            case estadoSecreto === 5 && 't':
                estadoSecreto = 6;
                break;
            case estadoSecreto === 6 && 'o':
                estadoSecreto = 0;
                form.style.visibility = 'hidden';
                article.style.visibility = 'hidden';
                titulo.innerHTML = 'ES MAGICOOOOOOOOOO!!!';
                formulario.style.backgroundImage = 'url(https://lastfm.freetls.fastly.net/i/u/770x0/26fa1d64ec8e4324b0bc8d1d9ace22e7.jpg#26fa1d64ec8e4324b0bc8d1d9ace22e7)';
                alert('SECRETO MAGICO');
                break;
            default:
                estadoSecreto = 7;
                break;

        };
    });
};