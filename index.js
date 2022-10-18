const tarjetas = document.getElementById("contenedor");
const input = document.getElementById("input-texto");
const checkbox = document.getElementById(`checkbox`);

//Cree una función para imprimir las tarjetas en la página Home.
function imprimir(array, contenedor) {
  array.forEach((e) => {
    contenedor.innerHTML += `
  <div class="card col-3 bg-black">
      <div class="card-body">
          <p class="card-text text-light">${e.name}</p>
      </div>
      <img src="${e.image}" alt="${e.name}">
      <div class="card-body">
          <p class="card-text text-light">${e.description}t.</p>
          <p class="card-text text-light">Price: $${e.price}</p>
      </div>
      <a href="details.html" class="btn btn-danger">Details</a>
  </div>
`;
  });
}
imprimir(events, tarjetas);
//Función creada para arrojar un mensaje cuando no existe coincidencia.

function notCoincidence(array, contenedor) {
  if (array <= 0) {
    contenedor.innerHTML = `
    <h2>Sin coincidencias</h2>
    `;
  }
}
//      INPUT
//Por medio del .filter filtro los nombres de los eventos; le doy un espacio vacío y aplico la función para que no haya coincidencia para después imprimirlas

input.addEventListener(`keyup`, (e) => {
  elementosFiltrados = events.filter((nombres) =>
    nombres.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  tarjetas.innerHTML = "";
  notCoincidence(elementosFiltrados, tarjetas);
  imprimir(elementosFiltrados, tarjetas);
});

//      CHECKBOX

let categorias = Array.from(new Set(events.map((objeto) => objeto.category)));

categorias.forEach((e) => {
  checkbox.innerHTML += `
    <div class="form-check form-check-inline" id="checkbox">
      <input class="form-check-input" type="checkbox" id="${e}" value="${e}">
      <label class="form-check-label text-light" for="inlineCheckbox1">${e}</label>
    </div>
  `;
});

let listaChequeada = [];

checkbox.addEventListener(`change`, (e) => {
  if (e.target.checked) {
    listaChequeada = listaChequeada.concat(
      events.filter((evento) =>
        evento.category.toLowerCase().includes(e.target.id.toLowerCase())
      )
    );
    console.log(listaChequeada);
    tarjetas.innerHTML = "";
    imprimir(listaChequeada, tarjetas);
  } else if (!e.target.checked) {
    listaChequeada = listaChequeada.filter(
      (evento) =>
        !evento.category.toLowerCase().includes(e.target.id.toLowerCase())
    );
    tarjetas.innerHTML = "";
    imprimir(listaChequeada, tarjetas);
  }

  if (listaChequeada.length === 0) {
    imprimir(events, tarjetas);
  }
});
