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
    "page.projects.content":
      "<p>Estos son algunos de los proyectos en los que he colaborado como desarrollador frontend. Cada uno de ellos refleja mi experiencia en la implementación de interfaces, optimización de rendimiento, usabilidad e integración con backend.</p>",
  },
  en: {
    "user.role": "Frontend Developer",
    "user.service": "Frontend Web Development",
    "site.title": "Frontend Developer",
    "site.description":
      "I am a frontend web developer. I design and build modern, lightweight, and purpose-driven websites and applications.",
    "site.keywords":
      "web development,frontend,javascript,html,css,framewoks,svelte,react,inertia,astro,tailwindcss,alpinejs,programmer,web developer,websites,landing pages,freelance,web design,web maintenance,layout",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.content":
      "<p>Good ideas deserve a digital presence that matches their quality.</p><p>I am a <strong>frontend web developer</strong>, and I help build projects that <strong>inspire trust, communicate clearly, and grow with purpose</strong>.</p>",
    "projects.title": "Projects",
    "projects.content":
      "<p>For over five years, I have collaborated on the frontend development of websites for organizations, institutions, and companies across various sectors.</p><p>These projects reflect my experience in <strong>interface implementation, performance optimization, usability, backend integration, and collaborative work with design and development teams</strong>.</p>",
    "projects.seeMore": "See more projects",
    "about.title": "About me",
    "about.content":
      "<p>I am passionate about bringing ideas to life through code, design, and solid technical performance. Over more than five years as a frontend developer, I have collaborated on high-visibility web projects, including large-scale institutional, cultural, and financial portals.</p><p>I have contributed to the development of websites such as <strong>ICA, Museo Frida Kahlo, and CIBanco</strong>, focusing on responsive interface implementation, performance optimization, accessibility improvements, and user experience enhancements.</p><p>I work with modern technologies like <strong>Svelte, Astro, TailwindCSS, AlpineJS, and Inertia</strong>, ensuring that each solution is scalable, efficient, and aesthetically pleasing.</p><p>Each project I have collaborated on belongs to brands or organizations with their own identity and reflects my commitment to technical quality, attention to detail, and continuous improvement.</p>",
    "contact.title": "Contact",
    "contact.content":
      "<p>Do you have a project in mind or want to improve your digital presence?<br>Share your idea with me, and let's find the best way to make it a reality together.</p>",
    "page.projects.content":
      "<p>These are some of the projects I have collaborated on as a frontend developer. Each of them reflects my experience in interface implementation, performance optimization, usability, and backend integration.</p>",
  },
} as const;
