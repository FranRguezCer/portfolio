export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.brand': 'Francisco Rodriguez',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',

    'cta.viewCV': 'View CV',
    'cta.viewAllProjects': 'View all projects',
    'cta.getInTouch': 'Get in touch',
    'cta.viewProject': 'View project',
    'cta.viewRepo': 'View repository',
    'cta.viewDashboard': 'View dashboard',
    'cta.viewDemo': 'View demo',
    'cta.viewNotebook': 'View notebook',

    'section.about': 'About me',
    'section.projects': 'Selected projects',
    'section.skills': 'Skills',
    'section.experience': 'Experience',
    'section.education': 'Education',
    'section.courses': 'Relevant courses',
    'section.contact': 'Contact',

    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'lang.toggle.aria': 'Switch language',
    'lang.en': 'EN',
    'lang.es': 'ES',

    'footer.rights': 'All rights reserved.',
    'a11y.skipToContent': 'Skip to content',

    'date.present': 'Present',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.experience': 'Experiencia',
    'nav.education': 'Formacion',
    'nav.contact': 'Contacto',
    'nav.brand': 'Francisco Rodriguez',
    'nav.menu.open': 'Abrir menu',
    'nav.menu.close': 'Cerrar menu',

    'cta.viewCV': 'Ver CV',
    'cta.viewAllProjects': 'Ver todos los proyectos',
    'cta.getInTouch': 'Contacto',
    'cta.viewProject': 'Ver proyecto',
    'cta.viewRepo': 'Ver repositorio',
    'cta.viewDashboard': 'Ver dashboard',
    'cta.viewDemo': 'Ver demo',
    'cta.viewNotebook': 'Ver notebook',

    'section.about': 'Sobre mi',
    'section.projects': 'Proyectos seleccionados',
    'section.skills': 'Skills',
    'section.experience': 'Experiencia',
    'section.education': 'Formacion',
    'section.courses': 'Cursos relevantes',
    'section.contact': 'Contacto',

    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'lang.toggle.aria': 'Cambiar idioma',
    'lang.en': 'EN',
    'lang.es': 'ES',

    'footer.rights': 'Todos los derechos reservados.',
    'a11y.skipToContent': 'Saltar al contenido',

    'date.present': 'Actualidad',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key] ?? ui[defaultLocale][key];
}

export const routes: Record<Locale, Record<string, string>> = {
  en: {
    home: '/portfolio/',
    projects: '/portfolio/projects/',
    skills: '/portfolio/skills/',
    experience: '/portfolio/experience/',
    education: '/portfolio/education/',
    contact: '/portfolio/contact/',
  },
  es: {
    home: '/portfolio/es/',
    projects: '/portfolio/es/projects/',
    skills: '/portfolio/es/skills/',
    experience: '/portfolio/es/experience/',
    education: '/portfolio/es/education/',
    contact: '/portfolio/es/contact/',
  },
};
