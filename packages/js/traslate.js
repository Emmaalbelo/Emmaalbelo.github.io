// Traducciones en inglés
const translations = {
  Descripcion: "Mi enfoque como desarrollador se caracteriza por mi dedicación autodidacta, mi atención meticulosa a los detalles y mi búsqueda constante de la perfección en mi trabajo",
  greeting: "Hola, Soy Emmanuel",
  title: "Desarrollador de software Junior",
  AboutMe: "Sobre mi",
  Introduction: "Mi Introduccion",
  about__description: "Me gusta asegurarme de seguir buenas prácticas, como pruebas unitarias, revisiones de código y arquitectura. Poseo conocimientos en tecnologías de back-end, especialmente en el lenguaje Python y sus frameworks. Mi experiencia abarca la gestión eficiente de bases de datos SQL, lo cual me permite desarrollar soluciones robustas y escalables. Estoy en constante búsqueda de nuevas oportunidades para ampliar mi experiencia y conocimientos. Considero que mi enfoque metódico y mi pasión por la programación son activos valiosos que puedo aportar a cualquier proyecto."

};

const originalTexts = {
  Descripcion: "My approach as a developer is characterized by my self-taught dedication, my meticulous attention to detail, and my constant pursuit of perfection in my work.",
  greeting: "Hi, I'am Emmanuel",
  title: "Junior software developer",
  AboutMe: "About Me",
  Introduction: "My Introduction",
  about__description: "I like to make sure to follow good practices such as unit testing, code reviews, and architecture. I have knowledge in backend technologies, particularly in the Python language and its frameworks. My experience includes efficient management of SQL databases, which allows me to develop robust and scalable solutions. I am constantly seeking new opportunities to expand my experience and knowledge. I believe that my methodical approach and passion for programming are valuable assets that I can contribute to any project."

};

let isTranslated = false;

function cambiarIdioma() {
  const btnCambiar = document.getElementById("btn-cambiar");

  Object.keys(translations).forEach(function (id) {
    const elemento = document.getElementById(id);
    if (elemento) {
      if (isTranslated) {
        elemento.innerText = originalTexts[id];
        btnCambiar.innerHTML = '<img class="flag-icon" src="packages/images/buttons/ingles.png" alt="English">';
      } else {
        elemento.innerText = translations[id];
        btnCambiar.innerHTML = '<img class="flag-icon" src="packages/images/buttons/espanol.png" alt="Español">';
      }
    }
  });

  isTranslated = !isTranslated;
}

// Llamar a la función cambiarIdioma() al cargar la página
window.addEventListener("DOMContentLoaded", cambiarIdioma);