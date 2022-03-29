const peliculas = [
  {
    id: 0,
    nombre: "El Conjuro",
    categoria: "Terror",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "../img/ElConjuro.png",
  },
  {
    id: 1,
    nombre: "La Noche del Demonio",
    categoria: "Terror",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "../img/LaNocheDelDemonio.jpg",
  },
  {
    id: 2,
    nombre: "Annabelle",
    categoria: "Terror",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "img/Annabelle.png",
  },
  {
    id: 4,
    nombre: "Tonto y retonto",
    categoria: "Comedia",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "img/tontoyretonto.jpg",
  },
  {
    id: 3,
    nombre: "Rebeldes con Causa",
    categoria: "Comedia",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "img/RebeldesConCausa.jpg",
  },
  {
    id: 5,
    nombre: "Los Vengadores",
    categoria: "Ciencia Ficcion",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "img/LosVengadores.jpg",
  },
  {
    id: 6,
    nombre: "Guardianes de la Galaxia",
    categoria: "Ciencia Ficcion",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "img/guardianesdelagalaxia.jpg",
  },
  {
    id: 7,
    nombre: "Asesino en casa",
    categoria: "Suspenso",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "img/asesinoencasa.jpg",
  },
  {
    id: 8,
    nombre: "Busqueda Implacable",
    categoria: "Accion",
    precio: Math.round(Math.random() * 400 + 1000),
    img: "img/busquedaImplacable.jpg",
  },
];

const contenedorPeliculas = document.getElementById("contenedorPeliculas");
for (const pelicula of peliculas) {
  //Primero tengo que crear todos los elementos

  const divs = document.createElement("DIV");
  const imagenPelicula = document.createElement("IMG");
  const nombrePelicula = document.createElement("H2");
  const categoria = document.createElement("H3");
  const precio = document.createElement("P");
  const botonComprar = document.createElement("BUTTON");
  //Segundo tengo que crear que significa cada cosa
  divs.className = "card";
  imagenPelicula.className = "card-img-top";
  nombrePelicula.className = "nombrePelicula";
  categoria.className = "categoriaPelicula";
  precio.className = "precioPelicula";
  botonComprar.className = "btn btn-dark";
  // Tercero agregar las variables
  imagenPelicula.src = pelicula.img;
  nombrePelicula.append(pelicula.nombre);
  categoria.append(pelicula.categoria);
  precio.append(`$${pelicula.precio}`);
  botonComprar.append("COMPRAR");
  //Agrego todo al div
  divs.append(imagenPelicula, nombrePelicula, categoria, precio, botonComprar);
  contenedorPeliculas.appendChild(divs);
}
