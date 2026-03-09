import './styles/main.less';
import Handlebars from 'handlebars';

import templateNavbar from './components/Navbar.hbs?raw';
import templateHero from './components/Hero.hbs?raw';
import templateSobreMi from './components/SobreMi.hbs?raw';
import templateProyectos from './components/Proyectos.hbs?raw';
import templateContacto from './components/Contacto.hbs?raw';

// Renderizar templates
document.getElementById('navbar').innerHTML = Handlebars.compile(templateNavbar)();
document.getElementById('hero').innerHTML = Handlebars.compile(templateHero)();
document.getElementById('sobre-mi').innerHTML = Handlebars.compile(templateSobreMi)();
document.getElementById('proyectos').innerHTML = Handlebars.compile(templateProyectos)();
document.getElementById('contacto').innerHTML = Handlebars.compile(templateContacto)();

// Scroll suave para links del navbar
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});