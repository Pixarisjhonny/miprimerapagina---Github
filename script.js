document.addEventListener('DOMContentLoaded', function() {
  // Cambiar el título de "Acerca de mí"
  let nuevoTexto = 'Acerca de mí';
  let acercaDeMi = document.querySelector('.acerca-de-mi .texto-acerca-de-mi');
  acercaDeMi.innerHTML = nuevoTexto;

  // Obtener y mostrar el nuevo título en la consola
  let tituloAcercaDeMi = acercaDeMi.innerText;
  console.log(tituloAcercaDeMi);

  // CONDICIONAL
  if (tituloAcercaDeMi == 'Acerca de mí') {
    acercaDeMi.innerHTML = 'Jhonny Rodriguez';
  } else {
    console.log('No se cumple');
  }

  // Llamar a la función cambiarTexto y asignar el resultado al contenido del párrafo 2
  let parrafo2 = document.querySelector('.acerca-de-mi .parrafo2');
  parrafo2.innerHTML = cambiarTexto('Jhonny Rodriguez', 'Montevideo', 'tecnologia');

  // FUNCIONES

  function cambiarTexto(nombre, ciudad, gusto) {
    return `¡Hola! Soy ${nombre}, originario de ${ciudad}, Uruguay, ciudad que actualmente resido. Mi pasión por los videojuegos se combina con mi deseo de aprender a programar. Sueño con utilizar mis habilidades para ayudar a las personas y empresas a destacar en línea. Cuando no estoy inmerso en el fascinante mundo de la programación, disfruto saliendo con mi esposa y explorando nuevas experiencias juntos. Únete a mí en este viaje donde la creatividad y la ${gusto} se encuentran para crear algo único y significativo. ¡Bienvenido a mi espacio digital! 🎮💻.`;
  }

  // Otro código que tienes
  const form = document.getElementById("form");
  const nombre = document.getElementById("nombre");
  const parrafo = document.getElementById("alertas");

  function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4) {
      warnings += `El nombre debe contener más de 4 caracteres`;
      valido = false;
    }

    if (!valido) {
      parrafo.innerHTML = warnings;
    } else {
      parrafo.innerHTML = "Enviado";
    }
    return valido;
  }

  form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
      // Si la validación es exitosa, puedes enviar el formulario
      formulario.submit();
    } else {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
  });
});


