class Producto {
  constructor(id, nombre, descripcion, precio, foto) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.foto = foto;
  }
}

const listaProductos = [];
const listaCarrito = [];

listaProductos.push(
  new Producto(
    1,
    "Resma A4",
    "Resma A4 Autor 75 g/m2",
    1340,
    "data:image/jpeg;base64,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"
  )
);

listaProductos.push(
  new Producto(
    2,
    "Cuaderno A4 ",
    "Cuaderno A4 AVON Rallado",
    620,
    "http://www.bikabik.com.ar/wp-content/uploads/2020/07/cuaderno-avon-a4-espiral-x84-hojas-raycuad-pack-x-10-unid-D_NQ_NP_663836-MLA29412501074_022019-F-min.jpg"
  )
);
listaProductos.push(
  new Producto(
    3,
    "Cuaderno A4 ",
    "Cuaderno A4 AVON Cuadriculado",
    670,
    "https://insumosmc.com.ar/img/p/1/3/9/4/1394-home_default.jpg"
  )
);
listaProductos.push(
  new Producto(
    4,
    "Birome",
    "Birome BIC Azul",
    270,
    "https://d2r9epyceweg5n.cloudfront.net/stores/240/185/products/art-bic-opaca1-b277227239b9588d6a16257426681666-480-0.png"
  )
);
listaProductos.push(
  new Producto(
    5,
    "Corrector",
    "Corrector Liquid Paper",
    680,
    "https://www.ofi-z.com/img/articulos/liquido_corrector_paper_mate.jpg"
  )
);
listaProductos.push(
  new Producto(
    6,
    "Goma",
    "Goma de borrar STAEDTLER lápiz blanca",
    130,
    "http://d2r9epyceweg5n.cloudfront.net/stores/240/185/products/articulo-goma-de-borrar-staedtler-blanca1-8550e806b9292fc7fa16255049331775-640-0.png"
  )
);
listaProductos.push(
  new Producto(
    7,
    "Lapiz HB",
    "Lapiz Staedtler GR.HB",
    280,
    "https://www.ofi-z.com/img/articulos/lapiz_staedtler_gr_hb_unidad.jpg"
  )
);
listaProductos.push(
  new Producto(
    8,
    "Sacapuntas",
    "Sacapuntas Filgo Sharp metálico",
    130,
    "http://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/shsharp1-3baad8007d12a93c5b16781279623403-640-0.webp"
  )
);

listaProductos.push(
  new Producto(
    9,
    "Resaltador",
    "Resaltador Trabi HighTexter Rojo",
    315,
    "https://www.libreriaascorti.com.ar/577-large_default/resaltador-trabi-hightexter-rojo.jpg"
  )
);

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

const contenedor_productos = document.getElementById("contenedor_productos");
const contenedor_carrito = document.getElementById("contenedor_carrito");

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
    listaCarrito.forEach((producto) => {
      contenedor_carrito.innerHTML += crearTarjetaHorizontal(producto);
    });
  });
});