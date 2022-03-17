alert("HAN ASESINADO A ALGUIEN!!! AYUDAME A ENCONTRAR AL ASESINO!!");

let asesinos = ["Juan", "Matias", "Josefina", "Martina", "Rodrigo", "Micaela"];

alert(
  "Hemos encontrado a 6 sospechosos!!! Estos son los sospechosos: " +
    asesinos.join(" - ")
);

alert("Vamos a necesitar de su ayuda para encontrarlo...");

let encontrar = prompt("Ingrese quien crees que es el sospechoso");

while (encontrar.toUpperCase() != "JOSEFINA") {
  if (encontrar.toUpperCase() == "JUAN") {
    alert(
      `${encontrar} solo estaba cocinando algo en ese momento!!! Vamos a buscar al asesino!`
    );
    asesinos.shift();
    alert("Estos son los sospechosos faltantes! " + asesinos.join(" - "));
    encontrar = prompt("Quien cree que fue?");
  } else if (encontrar.toUpperCase() == "MICAELA") {
    alert(
      `${encontrar} solo estaba jugando con su gato en ese momento!!! Vamos a buscar al asesino!`
    );
    asesinos.pop();
    alert("Estos son los sospechosos faltantes! " + asesinos.join(" - "));
    encontrar = prompt("Quien cree que fue?");
  } else if (encontrar.toUpperCase() == "MATIAS") {
    let index = asesinos.indexOf("Matias");
    if (index > -1) {
      asesinos.splice(index, 1);
    }
    alert(
      `${encontrar} solo estaba en la habitacion en ese momento!!! Vamos a buscar al asesino!`
    );
    alert("Estos son los sospechosos faltantes! " + asesinos.join(" - "));
    encontrar = prompt("Quien cree que fue?");
  } else if (encontrar.toUpperCase() == "MARTINA") {
    let index = asesinos.indexOf("Martina");
    if (index > -1) {
      asesinos.splice(index, 1);
    }
    alert(
      `${encontrar} solo estaba cuidando de se hermano menor en ese momento!!! Vamos a buscar al asesino!`
    );
    alert("Estos son los sospechosos faltantes! " + asesinos.join(" - "));
    encontrar = prompt("Quien cree que fue?");
  } else if (encontrar.toUpperCase() == "RODRIGO") {
    let index = asesinos.indexOf("Rodrigo");
    if (index > -1) {
      asesinos.splice(index, 1);
    }
    alert(
      `${encontrar} solo estaba jugando videojuegos en ese momento!!! Vamos a buscar al asesino!`
    );
    alert("Estos son los sospechosos faltantes! " + asesinos.join(" - "));
    encontrar = prompt("Quien cree que fue?");
  } else {
    alert("HAY QUE ATRAPAR AL CRIMINAL!!!");
    encontrar = prompt("Ingrese quien crees que es el sospechoso");
  }
}

alert(`ENCONTRAMOS A LA ASESINA ${encontrar} MUCHAS FELICIDADES!!`);
