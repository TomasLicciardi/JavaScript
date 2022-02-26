// alert("Bienvenido a nuestra muebleria!!");

// let muebles = parseInt(prompt("1: sillas 2: mesas 3: escritorio 4: armario"));
// let eleccion = "";
// let material = "";

// while (muebles == 1 || muebles == 2 || muebles == 3 || muebles == 4) {
//   if (muebles == 1) {
//     eleccion = "sillas";
//     alert(`Usted ha elegido ${eleccion}`);
//     material = prompt("¿De que material desea la silla?");
//     if (
//       material.toLocaleLowerCase() == "nogal" ||
//       material.toLocaleLowerCase() == "roble"
//     ) {
//       alert(
//         `Perfecto! El material con que le daremos la silla es de ${material}`
//       );
//       break;
//     } else {
//       alert("Lo siento! Solo puedes escoger entre nogal o roble");
//       break;
//     }
//   } else if (muebles == 2) {
//     eleccion = "mesas";
//     alert(`Usted ha elegido ${eleccion}`);
//     material = prompt("¿De que material desea la mesa?");
//     if (
//       material.toLocaleLowerCase() == "pino" ||
//       material.toLocaleLowerCase() == "haya" ||
//       material.toLocaleLowerCase() == "nogal"
//     ) {
//       alert(
//         `Perfecto! El material con que le daremos la mesa es de ${material}`
//       );
//       break;
//     } else {
//       alert("Lo siento! Solo puedes escoger entre nogal, pino o haya");
//       break;
//     }
//   } else if (muebles == 3) {
//     eleccion = "escritorio";
//     alert(`Usted ha elegido ${eleccion}`);
//     material = prompt("¿De que material desea el escritorio?");
//     if (
//       material.toLocaleLowerCase() == "fresno" ||
//       material.toLocaleLowerCase() == "castaño" ||
//       material.toLocaleLowerCase() == "roble"
//     ) {
//       alert(
//         `Perfecto! El material con que le daremos la mesa es de ${material}`
//       );
//       break;
//     } else {
//       alert("Lo siento! Solo puedes escoger entre fresno, castaño o roble");
//       break;
//     }
//   } else if (muebles == 4) {
//     eleccion = "armario";
//     alert(`Usted ha elegido ${eleccion}`);
//     material = prompt("¿De que material desea el armario?");
//     if (
//       material.toLocaleLowerCase() == "nogal" ||
//       material.toLocaleLowerCase() == "pino" ||
//       material.toLocaleLowerCase() == "castaño"
//     ) {
//       alert(
//         `Perfecto! El material con que le daremos el armario es de ${material}`
//       );
//       break;
//     } else {
//       alert("Lo siento! Solo puedes escoger entre nogal, castaño o pino");
//       break;
//     }
//   }
// }
// if (muebles < 1 || muebles > 4) {
//   alert("No contamos con lo que usted desea! Lo sentimos!");
// }

// alert("Saludos y muchas gracias por visitarnos!");

// if (muebles === 1) {
//   eleccion = "sillas";
//   alert(`Usted ha elegido ${eleccion}`);
//   material = prompt("¿De que material desea el mueble?");
//   switch (material.toLocaleUpperCase()) {
//     case "NOGAL":
//       alert(`Usted ha elegido el material ${material.toLocaleLowerCase()}`);
//       break;
//     case "ROBLE":
//       alert(`Usted ha elegido el material ${material.toLocaleLowerCase()}`);
//       break;
//     default:
//       alert("Solo contamos con el material nogal o roble");
//       break;
//   }
// } else if (muebles === 2) {
//   eleccion = "mesas";
//   alert(`Usted ha elegido ${eleccion}`);
//   material = prompt("¿De que material desea el mueble?");
//   switch (material.toLocaleUpperCase()) {
//     case "NOGAL":
//       alert(`Usted ha elegido el material ${material.toLocaleLowerCase()}`);
//       break;
//     case "ROBLE":
//       alert(`Usted ha elegido el material ${material.toLocaleLowerCase()}`);
//       break;
//     default:
//       alert("Solo contamos con el material nogal o roble");
//       break;
//   }
// } else if (muebles === 3) {
//   eleccion = "escritorio";
//   alert(`Usted ha elegido ${eleccion}`);
//   material = prompt("¿De que material desea el mueble?");
//   switch (material.toLocaleUpperCase()) {
//     case "NOGAL":
//       alert(`Usted ha elegido el material ${material.toLocaleLowerCase()}`);
//       break;
//     case "ROBLE":
//       alert(`Usted ha elegido el material ${material.toLocaleLowerCase()}`);
//       break;
//     default:
//       alert("Solo contamos con el material nogal o roble");
//       break;
//   }
// } else if (muebles === 4) {
//   eleccion = "armario";
//   alert(`Usted ha elegido ${eleccion}`);
//   material = prompt("¿De que material desea el mueble?");
//   switch (material.toLocaleUpperCase()) {
//     case "NOGAL":
//       alert(`Usted ha elegido el material ${material.toLocaleLowerCase()}`);
//       break;
//     case "ROBLE":
//       alert(`Usted ha elegido el material ${material.toLocaleLowerCase()}`);
//       break;
//     default:
//       alert("Solo contamos con el material nogal o roble");
//       break;
//   }
// } else {
//   alert("Por favor tiene que escoger entre una de las opciones anteriores");
//   muebles = parseInt(prompt("1: sillas 2: mesas 3: escritorio 4: armario"));
// }

/*let helado = prompt("Ingrese su sabor de helado de agua");
const eleccion = `Su sabor de helado es ${helado}`;

while (helado != "") {
  switch (helado.toUpperCase()) {
    case "FRUTILLA":
      alert(eleccion);
      helado = "";
      break;
    case "LIMON":
      alert(eleccion);
      helado = "";
      break;
    case "LIMÓN":
      alert(eleccion);
      helado = "";
      break;
    case "ANANA":
      alert(eleccion);
      helado = "";
      break;
    case "ANANÁ":
      alert(eleccion);
      helado = "";
      break;
    case "BANANA":
      alert(eleccion);
      helado = "";
      break;
    case "PERA":
      alert(eleccion);
      helado = "";
      break;
    default:
      alert(`Lo sentimos, no contamos con ${helado} en nuestra heladeria.`);
      helado = "";
      break;
  }
}*/
