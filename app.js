// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Agregar amigo a la lista
function agregarAmigo() {
  let imput = document.getElementById("amigo");
  let nombre = imput.value.trim();

  if (nombre === "") {
    alert("Por favor escribe un nombre");
    return;
  } if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado");
    return;
  }

  amigos.push(nombre);
  imput.value = "";
  actualizarLista();
  limpiarResultado();
}

// Mostrar la lista en pantalla
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  
  // vaciar lista
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Limpiar el resultado
function limpiarResultado() {
  document.getElementById("resultado").innerHTML = "";
  }

// Validar que haya al menos 2 nombres
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos < 2 ) {
    alert("Por favor, inserte dos nombre antes de sortear");

  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
      resultadoHTML.textContent = "El amigo secreto es: " + amigos[indiceAmigo];
}
}
