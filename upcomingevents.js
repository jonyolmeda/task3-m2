//Cree una función del array de eventos.
function dataJs() {
  return datos.events
}

//Cree una función para imprimir las tarjetas en la página Home.
function impresionTarjeta(elemento, datos) {
  let contenedor = document.getElementById(`contenedor`);
  for (let info of datos.events) {
    if (datos.currentDate < info.date) {
      elemento.innerHTML += `
    <div class="card col-3 bg-black">
        <div class="card-body">
            <p class="card-text text-light">${info.name}</p>
        </div>
        <img src="${info.image}" alt="${info.name}">
        <div class="card-body">
            <p class="card-text text-light">${info.description}t.</p>
            <p class="card-text text-light">Price: $${info.price}</p>
        </div>
        <a href="details.html" class="btn btn-danger">Details</a>
    </div>
`;
    }
  }
}
impresionTarjeta(contenedor, datos);

//Asigne una variable a las categorias del array.

let categorias = datos.events.map (categories => categories.category)

//Con la fn .Sort lo acomodé alfabeticamente y con new Set se eliminan los elementos repetidos.

categorias.sort()

categorias = new Set(categorias)

//Recorro el array categorias con la fn .forEach e imprimo los checkbox.

const checkbox = document.getElementById(`checkbox`)
categorias.forEach(e => {
  checkbox.innerHTML +=
  `
    <div class="form-check form-check-inline" id="checkbox">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${e}">
      <label class="form-check-label text-light" for="inlineCheckbox1">${e}</label>
    </div>
  `
});


//