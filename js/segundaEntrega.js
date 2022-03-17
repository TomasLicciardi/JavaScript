alert("Bienvenido a la calculadora mas inteligente del mundo! Saludos");

alert("Escribir SALIR para finalizar la calculadora");

let esc = prompt("¿Que operacion desea realizar?");

function suma(num1, num2) {
  resultadoSuma = num1 + num2;
  return resultadoSuma;
}

function resta(num1, num2) {
  resultadoResta = num1 - num2;
  return resultadoResta;
}

function multiplicar(num1, num2) {
  resultadoMultiplicar = num1 * num2;
  return resultadoMultiplicar;
}

function dividir(num1, num2) {
  resultadoDividir = num1 / num2;
  return resultadoDividir;
}

let primerNumero;
let segundoNumero;

while (esc.toLowerCase() != "salir") {
  switch (esc.toLowerCase()) {
    case "suma":
      primerNumero = parseInt(prompt("Primer numero para la operacion"));
      segundoNumero = parseInt(prompt("Segundo numero para la operacion"));
      suma(primerNumero, segundoNumero);
      alert(resultadoSuma);
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "resta":
      primerNumero = parseInt(prompt("Primer numero para la operacion"));
      segundoNumero = parseInt(prompt("Segundo numero para la operacion"));
      resta(primerNumero, segundoNumero);
      alert(resultadoResta);
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "dividir":
      primerNumero = parseInt(prompt("Primer numero para la operacion"));
      segundoNumero = parseInt(prompt("Segundo numero para la operacion"));
      dividir(primerNumero, segundoNumero);
      alert(resultadoDividir);
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "multiplicar":
      primerNumero = parseInt(prompt("Primer numero para la operacion"));
      segundoNumero = parseInt(prompt("Segundo numero para la operacion"));
      multiplicar(primerNumero, segundoNumero);
      alert(resultadoMultiplicar);
      esc = prompt("¿Que operacion desea realizar?");
      break;
    default:
      alert("No puso ninguna operacion");
      esc = prompt("¿Que operacion desea realizar?");
      break;
  }
}
alert("Gracias por utilizar la mejor calculadora de la historia!");
