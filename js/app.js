class Producto {
  constructor(id, nombre, descripcion, precio, foto) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.foto = foto;
  }
}

const contenedor_productos = document.getElementById("contenedor_productos");
const contenedor_carrito = document.getElementById("contenedor_carrito");
const finalizar_compra = document.getElementById("finalizar_compra");

const listaProductos = [];
const listaCarrito = [];

let listaCarritoStorage;
let obtenerListaJSON = localStorage.getItem("listaProductosCarrito");

function leerStorage() {
  if (obtenerListaJSON) {
    listaCarritoStorage = JSON.parse(obtenerListaJSON);
    listaCarritoStorage.forEach((art) => {
      listaCarrito.push(art);
      contenedor_carrito.innerHTML += crearTarjetaHorizontal(art);
    });
  }
}
function cargarArticulos() {
  setTimeout;
  fetch("/js/productos.json")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((art) => {
        listaProductos.push(art);
      });
    });
}

function crearTarjeta(producto) {
  return `<div class="card" style="width: 18rem;">
  <img src="${producto.foto}" class="card-img-top" alt="${producto.descripcion}">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <p class="card-text-price">$ ${producto.precio}</p>

    <a href="#" class="btn btn-primary" id="producto${producto.id}">Añadir al carrito</a>
  </div>
</div>`;
}

function crearTarjetaHorizontal(producto) {
  return `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${producto.foto}" class="img-fluid rounded-start" alt="${producto.descripcion}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text"><small class="text-muted">$ ${producto.precio}</small></p>
      </div>
    </div>
  </div>
</div>`;
}

function crearTarjetas() {
  contenedor_productos.innerHTML = "";
  listaProductos.forEach((producto) => {
    contenedor_productos.innerHTML += crearTarjeta(producto);
  });

  listaProductos.forEach((producto) => {
    const productoSeleccionado = document.getElementById(
      `producto${producto.id}`
    );

    productoSeleccionado.addEventListener("click", () => {
      listaCarrito.push(producto);
      contenedor_carrito.innerHTML = "";
      localStorage.setItem(
        "listaProductosCarrito",
        JSON.stringify(listaCarrito)
      );
      listaCarrito.forEach((producto) => {
        contenedor_carrito.innerHTML += crearTarjetaHorizontal(producto);
      });
    });
  });
}

function finalizarCompra() {
  finalizar_compra.addEventListener("click", () => {
    listaCarrito.splice(0, listaCarrito.length);
    contenedor_carrito.innerHTML = ``;
    localStorage.clear;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su compra fue realizada con éxito",
      showConfirmButton: false,
      timer: 2500,
    });
  });
}

leerStorage();
cargarArticulos();
finalizarCompra();
contenedor_productos.innerHTML = `<p>Cargando productos...</p>`;
setTimeout(crearTarjetas, 1500);
