import { Linkedin, type Icon as IconType } from "@lucide/astro";

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
  url: "https://mabreumx.mx",
  image: "/og-image.jpg",
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
      "Soy Mario, desarrollador web frontend. Diseño y construyo sitios y aplicaciones modernas, ligeras y con propósito.",
    "site.keywords":
      "desarrollo web,frontend,javascript,html,css,framewoks,svelte,react,inertia,astro,tailwindcss,alpinejs,programador,web developer,sitios web,landing pages,freelance,diseño web,mantenimiento web,maquetación",
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.content":
      "<p>Las buenas ideas merecen una presencia digital a su altura.</p><p>Soy <strong>Mario</strong>, desarrollador web frontend, y ayudo a construir proyectos que <strong>inspiran confianza, comunican con claridad y crecen con propósito</strong>.",
    "about.title": "Sobre mí",
    "about.content":
      "<p>Hola, soy <strong>Mario</strong>, desarrollador web frontend enfocado en crear experiencias digitales claras, funcionales y con identidad propia. Mi objetivo es transformar ideas en sitios y aplicaciones <strong>ligeras, escalables y fáciles de mantener</strong>, pensados para crecer contigo.</p><p>Trabajo con tecnologías modernas como <strong>Svelte, Inertia, Astro y AlpineJS</strong>, buscando siempre equilibrio entre <strong>estética, rendimiento y simplicidad</strong>. He colaborado con <strong>profesionales independientes, negocios locales y proyectos creativos</strong>, ayudándolos a fortalecer su presencia digital sin complicaciones técnicas innecesarias.</p><p> Creo en la cercanía, la claridad y la confianza como pilares de cada desarrollo. Más que líneas de código, construyo herramientas que cuentan historias y reflejan la esencia de quienes las imaginan.</p>",
    "projects.title": "Proyectos",
    "contact.title": "Contacto",
    "contact.content":
      "<p>¿Tienes un proyecto en mente o quieres mejorar tu presencia digital?</p><p>Cuéntame tu idea y busquemos juntos la mejor forma de hacerla realidad.</p>",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "user.role": "Frontend Developer",
  },
} as const;
