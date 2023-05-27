// Traducciones en inglés
const translations = {
  Descripcion: "Mi enfoque como desarrollador se caracteriza por mi dedicación autodidacta, mi atención meticulosa a los detalles y mi búsqueda constante de la perfección en mi trabajo",
  greeting: "Hola, Soy Emmanuel",
  title: "Desarrollador de software Junior",
  AboutMe: "Sobre mi",
  Introduction: "Mi Introduccion",
  about__description: "Me gusta asegurarme de seguir buenas prácticas, como pruebas unitarias, revisiones de código y arquitectura. Poseo conocimientos en back-end, especialmente en el lenguaje Python y sus frameworks. Mi experiencia abarca la gestión eficiente de bases de datos SQL, lo cual me permite desarrollar soluciones robustas y escalables. Estoy en constante búsqueda de nuevas oportunidades para ampliar mi experiencia y conocimientos. Considero que mi enfoque metódico y mi pasión por la programación son activos valiosos que puedo aportar a cualquier proyecto.",
  Download: "Descargar CV",
  technical_level: "Mi nivel tecnico",
  skills__title: 'Desarrollador de software',
  exp_time:'Menos de 1 año',
  Frameworks:'Frameworks populares de Python',
  Data_Analyst: 'Analista de datos',
  exp_time_Data:'Menos de 1 año',
  Web_Developer: 'Desarrollador Web',
  exp_time_Web:'Menos de 1 año',
  Services: 'Servicios',
  offer: 'Lo que ofrezco',
  Software_developer: 'Desarrollador de software',
  Viewmore1:'Ver mas',
  Sof_developer: 'Desarrollador de software',
  servSoft1: 'Desarrollo de aplicaciones backend.',
  servSoft2: 'Implementar servicios web y APIs.',
  servSoft3: 'Mantenimiento y depuración de código.',
  servSoft4: 'Diseño e implementación de interfaces gráficas de escritorio.',
  servSoft5: 'Asegurar la seguridad y el rendimiento del sistema.',
  Data_Analyst1: 'Analista de datos',
  DataAnalyst: 'Analista de datos',
  servData1: 'Analizar sistemas de datos.',
  servData2: 'Automatizar la recuperación de información.',
  servData3: 'Aplicar sistemáticamente técnicas estadísticas y lógicas.',
  servData4: 'Visualizar gráficos, diagramas y preparar informes y paneles de control.',
  servData5: 'Gestionar bases de datos.',
  Viewmore2: 'Ver mas',
  WebDeveloper1: 'Desarrollador Web',
  WebDeveloper2: 'Desarrollador Web',
  Viewmore3: 'Ver mas',
  servWeb1: 'Desarrollo la interfaz de usuario.',
  servWeb2: 'Desarrollo de páginas web.',
  servWeb3: 'Diseño web adaptable',
  servWeb4: 'Diseño en WordPress.',
  Portfolio: 'Portafolio',
  MostRecent: 'Trabajos mas recientes', 
  port1_desc: 'Utilizado para dar estilo y dar vida al sitio web, aplicando técnicas de diseño modernas como la capacidad de respuesta y animaciones sutiles.',
  Python_port: 'Aplicacion de escritorio con Python',
  port2_desc: 'Diseñado para gestionar estudiantes, conectado a una base de datos. Proporciona una interfaz fácil de usar para realizar diversas tareas relacionadas con la gestión de estudiantes, como agregar nuevos estudiantes, actualizar su información y generar informes.',
  project: 'Tienes un nuevo proyecto?',
  ContactMe: 'Contactame',
  Call: 'Llamame',
  Location: 'Localización',
  Send: 'Enviar mensaje',
  ServicesFoot: 'Servicios',
  PortfolioFoot: 'Portafolio',
  ContactFoot: 'Contacto',

};

const originalTexts = {
  Descripcion: "My approach as a developer is characterized by my self-taught dedication, my meticulous attention to detail, and my constant pursuit of perfection in my work.",
  greeting: "Hi, I'am Emmanuel",
  title: "Junior software developer",
  AboutMe: "About Me",
  Introduction: "My Introduction",
  about__description: "I like to make sure to follow good practices such as unit testing, code reviews, and architecture. I have knowledge in backend, particularly in the Python language and its frameworks. My experience includes efficient management of SQL databases, which allows me to develop robust and scalable solutions. I am constantly seeking new opportunities to expand my experience and knowledge. I believe that my methodical approach and passion for programming are valuable assets that I can contribute to any project.",
  Download: "Download CV",
  technical_level:"My technical level",
  skills__title: 'Software developer',
  exp_time:'Less than 1 year',
  Frameworks: 'Popular Python Frameworks',
  Data_Analyst: 'Data Analyst',
  exp_time_Data:'Less than 1 year',
  Web_Developer: 'Web Developer',
  exp_time_Web: 'Less than 1 year',
  Services: 'Services',
  offer: 'What I offer',
  Software_developer: 'Software Developer',
  Viewmore1: 'View more',
  Sof_developer: 'Software Developer',
  servSoft1: 'Development of backend applications.',
  servSoft2: 'Implementation of web services and APIs.',
  servSoft3: 'Maintenance and debugging of code.',
  servSoft4: 'Design and implementation of desktop graphical interfaces.',
  servSoft5: 'Ensuring system security and performance.',
  Data_Analyst1: 'Data Analyst',
  DataAnalyst: 'Data Analyst',
  servData1: 'Analyze data systems.',
  servData2:'Automating information retrieval.',
  servData3:'Systematically applying statistical and logical techniques.',
  servData4:'Visualizing graphs, charts and preparing reports and dashboards.',
  servData5:'Manage databases.',
  Viewmore2:'View more',
  WebDeveloper1: 'Web Developer',
  WebDeveloper2: 'Web Developer',
  Viewmore3: 'View more',
  servWeb1: 'I develop the user interface.',
  servWeb2: 'Webpage development.',
  servWeb3: 'Responsive web design.',
  servWeb4: 'Design in WordPress.',
  Portfolio: 'Portfolio',
  MostRecent: 'Most recent works',
  port1_desc: 'Used to style and bring life to the website, applying modern design techniques such as responsiveness and subtle animations.',
  Python_port: 'Python desktop app',
  port2_desc: 'Designed to manage students, connected to a database. It provides a user-friendly interface for performing various tasks related to student management, such as adding new students, updating their information, and generating reports.',
  project: 'You have a new project?',
  ContactMe: 'Contact me',
  Call: 'Call me',
  Location: 'Localization',
  Send: 'Send message',
  ServicesFoot: 'Services',
  PortfolioFoot: 'Portfolio',
  ContactFoot: 'Contact',

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