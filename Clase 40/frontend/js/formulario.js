window.onload = () => {
    let title = document.querySelector('#title');
    let rating = document.querySelector('#rating');
    let awards = document.querySelector('#awards');
    let release_date = document.querySelector('#release_date');
    let length = document.querySelector('#length');
    let create = document.querySelector('.botonAgregar');
    let edit = document.querySelector('.botonModificar');

    create.addEventListener('click', (e) => {
        const data = {
            title: title.value,
            rating: rating.value,
            awards: awards.value,
            release_date: release_date.value,
            length: length.value
        };

        const settings = {
            'method': 'post',
            'body': JSON.stringify(data),
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        fetch('http://localhost:3031/api/movies/create', settings)
        .then((res) => {
            res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
        e.preventDefault();
        console.log(data);
    })
};