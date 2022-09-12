const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const a = document.querySelector('a');
const p = document.querySelectorAll('p');

window.onload = () => {
    let user = prompt('Ingrese su nombre', 'John Lennon');
    if(user != null) {
        h2.innerHTML += user
    } else {
        h2.innerHTML += 'Invitado'
    };
    let background = '¿Desea colocar un fondo de pantalla?';
    if(confirm(background)==true) {
        document.querySelector('body').classList.add('fondo');
    };
};

h2.style.textTransform = 'uppercase';

a.style.color = '#E51B3E';

p[0].classList.add('destacadoImpar');
p[1].classList.add('destacadoPar');
p[2].classList.add('destacadoImpar');
p[3].classList.add('destacadoPar');

main.style.display = 'block';