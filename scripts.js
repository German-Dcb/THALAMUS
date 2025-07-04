// Menú responsive dinámico
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Formulario interactivo
const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita envío real del formulario

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre && email && mensaje) {
    alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`);
    formulario.reset(); // Limpia el formulario
  } else {
    alert('Por favor completa todos los campos.');
  }
});
