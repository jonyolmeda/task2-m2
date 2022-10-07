let contenedor = document.getElementById(`contenedor`);

function impresionTarjeta(elemento, datos) {
  for (let info of datos.events) {
    if (datos.currentDate < info.date) {
      elemento.innerHTML += `
    <div class="card col-2 bg-black">
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
