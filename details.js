const tarjetaDetails = document.getElementById(`tarjeta-details`)

function impTarjetaDetails(array, contenedor) {
    array.forEach((e) => {
      contenedor.innerHTML = `
      <div class="container d-flex justify-content-between gap-5">
    <img class="img-thumbnail img-fluid col-5" src="${e.image}" alt="${e.name}">
    <div class="text-light">
      <p>Name: ${e.name}</p>
      <p>Date: ${e.date}
      <p>Description: ${e.description}</p>
      <p>Category: ${e.category}</p>
      <p>Place: ${e.place}</p>
      <p>Capacity: ${e.capacity}</p>
      <p>Estimate: ${e.estimate}</p>
      <p>Price: $${e.price}</p>
    </div>
  </div>
  `;
    });
  }


function infoEventos() {

let eventos = []

let id = parseInt(location.search.slice(4))

eventos = events.filter(element => element._id === id)

impTarjetaDetails(eventos, tarjetaDetails);
}
infoEventos()