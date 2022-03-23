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

const inicio = new Date();

while (esc.toLowerCase() != "salir") {
  switch (esc.toLowerCase()) {
    case "suma":
      primerNumero = parseInt(prompt("Primer numero sumar"));
      segundoNumero = parseInt(prompt("Segundo numero sumar"));
      suma(primerNumero, segundoNumero);
      alert(resultadoSuma);
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "resta":
      primerNumero = parseInt(prompt("Primer numero para restar"));
      segundoNumero = parseInt(prompt("Segundo numero para restar"));
      resta(primerNumero, segundoNumero);
      alert(resultadoResta);
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "dividir":
      primerNumero = parseInt(prompt("Primer numero para dividir"));
      segundoNumero = parseInt(prompt("Segundo numero para dividir"));
      dividir(primerNumero, segundoNumero);
      alert(resultadoDividir);
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "multiplicar":
      primerNumero = parseInt(prompt("Primer numero para multiplicar"));
      segundoNumero = parseInt(prompt("Segundo numero para multiplicar"));
      multiplicar(primerNumero, segundoNumero);
      alert(resultadoMultiplicar);
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "raiz cuadrada":
      primerNumero = parseInt(prompt("Numero para calcular la raiz cuadrada"));
      alert(Math.sqrt(primerNumero));
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "multiplos":
      num1 = parseInt(prompt("De cual numero desea conocer sus multiplos?"));
      duplicar = [];
      for (let i = 0; i <= 10; i++) {
        duplicar.push(num1 * i);
        alert("Los multiplos son: " + duplicar);
      }
      esc = prompt("¿Que operacion desea realizar?");
      break;
    case "jugar":
      alert("Encontraste un juego secreto!!Muy bien!!!");
      alert(
        "El primer juego consiste en que tan cerca estas de un numero aleatorio entre 0 y 5"
      );
      alert("El segundo juego consiste en ordenar una serie de numeros!!!");
      let juego = parseInt(
        prompt("Ingresar 1 para el primer juego y 2 para el segundo")
      );
      if (juego == 1) {
        num = parseInt(prompt("Escoge un numero entre el 0 y 5"));
        aleatorio = Math.random() * 5;
        rango = num / aleatorio;
        alert("Estuviste esta cantidad " + Math.round(rango) + " de cerca");
        esc = prompt("¿Que operacion desea realizar?");
        break;
      } else if (juego == 2) {
        numeros = "";
        listaNumeros = [];
        do {
          numeros = prompt(
            "Ingresar numeros para ordenar el array, 0 para finalizar"
          );
          listaNumeros.push(numeros);
          alert(listaNumeros.sort((a, b) => a - b));
        } while (numeros != 0);
        esc = prompt("¿Que operacion desea realizar?");
        break;
      } else {
        alert("Una lastima!!!");
        esc = prompt("¿Que operacion desea realizar?");
        break;
      }
    default:
      alert("No puso ninguna operacion");
      esc = prompt("¿Que operacion desea realizar?");
      break;
  }
}
const final = new Date();

let promedioUsado = (final - inicio) / 1000;

alert("Gracias por utilizar la mejor calculadora de la historia!");

alert(
  "Usted estuvo en la calculadora " + Math.round(promedioUsado) + " segundos"
);
