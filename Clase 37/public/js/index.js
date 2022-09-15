window.onload = () => {

    const main = document.querySelector('main');
    const h2 = document.querySelector('h2');
    const a = document.querySelector('a');
    const p = document.querySelectorAll('p');

    let user = prompt('Ingrese su nombre', 'John Lennon');
    if(user != null) {
        h2.innerHTML += user
    } else {
        h2.innerHTML += 'Invitado'
    };
    h2.style.textTransform = 'uppercase';
    let background = '¿Desea colocar un fondo de pantalla?';
    if(confirm(background)==true) {
        document.querySelector('body').classList.add('fondo');
    };
    a.style.color = '#E51B3E';

    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    };

    main.style.display = 'block';
};

// p[0].classList.add('destacadoImpar');
// p[1].classList.add('destacadoPar');
// p[2].classList.add('destacadoImpar');
// p[3].classList.add('destacadoPar');

