import { Linkedin, type Icon as IconType } from "@lucide/astro";
const url = "https://mabreumx.com";

type Contact = {
  name: string;
  link: string;
  icon?: typeof IconType;
};

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";

export const site = {
  user: "Mario Abreu",
  locale: "es-MX",
  url,
  image: `${url}/og-image.jpg`,
} as const;

export const contactItems: Contact[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mario-abreu/",
    icon: Linkedin,
  },
];

export const ui = {
  es: {
    "user.role": "Desarrollador Frontend",
    "user.service": "Desarrollo Web Frontend",
    "site.title": "Desarrollador Frontend",
    "site.description":
      "Soy desarrollador web frontend. Diseño y construyo sitios y aplicaciones modernas, ligeras y con propósito.",
    "site.keywords":
      "desarrollo web,frontend,javascript,html,css,framewoks,svelte,react,inertia,astro,tailwindcss,alpinejs,programador,web developer,sitios web,landing pages,freelance,diseño web,mantenimiento web,maquetación",
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.content":
      "<p>Las buenas ideas merecen una presencia digital a su altura.</p><p>Soy <strong>desarrollador web frontend</strong>, y ayudo a construir proyectos que <strong>inspiran confianza, comunican con claridad y crecen con propósito</strong>.",
    "projects.title": "Proyectos",
    "projects.content":
      "<p>Durante más de cinco años he colaborado en el desarrollo frontend de sitios web para organizaciones, instituciones y empresas de distintos sectores.</p><p>Estos proyectos reflejan mi experiencia en <strong>implementación de interfaces, optimización de rendimiento, usabilidad, integración con backend y trabajo colaborativo con equipos de diseño y desarrollo</strong>.</p>",
    "projects.seeMore": "Ver más proyectos",
    "about.title": "Sobre mí",
    "about.content":
      "<p>Me apasiona dar vida a las ideas mediante código, diseño y buen desempeño técnico. A lo largo de más de cinco años como desarrollador frontend, he colaborado en proyectos web de alta visibilidad, entre los que se encuentran portales institucionales, culturales y financieros de gran escala.</p><p>He participado en el desarrollo de sitios como los de <strong>ICA, Museo Frida Kahlo y CIBanco</strong>, aportando en la implementación de interfaces responsivas, optimización de rendimiento, mejoras de accesibilidad y experiencia de usuario.</p><p>Trabajo con tecnologías modernas como <strong>Svelte, Astro, TailwindCSS, AlpineJS e Inertia</strong>, cuidando que cada solución sea escalable, eficiente y estética.</p><p>Cada proyecto en el que he colaborado pertenece a marcas u organizaciones con identidad propia, y refleja mi compromiso con la calidad técnica, la atención al detalle y la mejora continua.</p>",
    "contact.title": "Contacto",
    "contact.content":
      "<p>¿Tienes un proyecto en mente o quieres mejorar tu presencia digital?<br>Cuéntame tu idea y busquemos juntos la mejor forma de hacerla realidad.</p>",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "user.role": "Frontend Developer",
  },
} as const;
