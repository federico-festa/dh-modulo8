window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  fetch('http://localhost:3031/api/movies')
  .then((res) => {
    return res.json();
  })
  .then((movies) => {
    let data = movies.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      const acciones = document.createElement('p');
      const linkEdit = document.createElement('a');
      linkEdit.setAttribute('class', 'botonModificar');
      linkEdit.setAttribute('href', 'formulario.html')
      linkEdit.textContent = 'Editar';
      acciones.appendChild(linkEdit);

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(acciones);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);

      
    });

  })
  .catch((error) => {
    console.log(error);
  });

  

};
