export const translations = {
  en: {
    nav: { home: 'Home', experience: 'Experience', education: 'Education', skills: 'Skills', contact: 'Contact' },
    hero: {
      subtitle: 'Software Developer',
      tagline: 'Computer Engineering graduate. Experience designing and developing efficient, scalable systems with cloud technologies.',
      primaryBtn: 'Experience',
      secondaryBtn: 'Contact Me',
    },
    experience: {
      title: 'Experience',
      bitel: {
        company: 'BITEL',
        role: 'Software Developer',
        period: '08/2023 – Present',
        bullets: [
          'Design and implementation of receipt generation and delivery systems for Bitel Fiber customers.',
          'Implementation of services to report invoices and receipts to SUNAT.',
          'Creation of promotion service for automatic collection subscription for mobile lines.',
          'Implementation of billing verification tools across multiple cycles.',
          'Maintenance and new features for legacy systems.',
          'APIs for transaction report generation.',
          'CI/CD pipelines with Jenkins.',
        ],
      },
      tiendada: {
        company: 'Tiendada',
        role: 'Software Developer',
        period: '04/2022 – 12/2022',
        bullets: [
          'Promotion configuration and calculation module.',
          'Integration with Izipay payment gateway.',
          'Bulk data upload services via Excel/CSV.',
          'Dashboards and KPI-based metrics services.',
          'SSL certificate generation for custom store domains.',
          'CI/CD pipelines in Bitbucket Pipeline.',
        ],
      },
      pucp: {
        company: 'Pontificia Universidad Católica del Perú',
        role: 'Software Developer',
        period: '08/2021 – 12/2021',
        bullets: ['Implementation of a student support platform.'],
      },
    },
    education: {
      title: 'Education & Certifications',
      pucp: {
        name: 'Pontificia Universidad Católica del Perú',
        degree: 'Bachelor of Computer Engineering',
        period: '2016 – 2022',
        desc: 'Algorithms, Data Structures, Operating Systems, Databases, System Design and Software Development.',
      },
      certsTitle: 'Certifications & Awards',
    },
    skills: {
      title: 'Skills & Technologies',
    },
    contact: {
      title: 'Get In Touch',
    },
    footer: 'Built with React + TypeScript + Tailwind.',
  },
  es: {
    nav: { home: 'Inicio', experience: 'Experiencia', education: 'Educación', skills: 'Habilidades', contact: 'Contacto' },
    hero: {
      subtitle: 'Desarrollador de Software',
      tagline: 'Bachiller en Ingeniería Informática. Experiencia diseñando y desarrollando sistemas eficientes y escalables con tecnologías cloud.',
      primaryBtn: 'Experiencia',
      secondaryBtn: 'Contáctame',
    },
    experience: {
      title: 'Experiencia',
      bitel: {
        company: 'BITEL',
        role: 'Desarrollador de Software',
        period: '08/2023 – Presente',
        bullets: [
          'Diseño e implementación de sistemas para generación y envío de recibos a clientes de Bitel Fibra.',
          'Implementación de servicios para reportar boletas y facturas a SUNAT.',
          'Creación de servicio para promociones de suscripción de cobranza automática para líneas móviles.',
          'Implementación de herramientas de verificación de facturación en múltiples ciclos.',
          'Mantenimiento y nuevas funcionalidades para sistemas legacy.',
          'APIs para generación de reportes de transacciones.',
          'Pipelines de CI/CD con Jenkins.',
        ],
      },
      tiendada: {
        company: 'Tiendada',
        role: 'Desarrollador de Software',
        period: '04/2022 – 12/2022',
        bullets: [
          'Módulo de configuración y cálculo de promociones.',
          'Integración con pasarela de pagos Izipay.',
          'Servicios de carga masiva de datos mediante Excel/CSV.',
          'Dashboards y servicios de métricas basados en KPIs.',
          'Generación de certificados SSL para dominios personalizables.',
          'Pipelines de CI/CD en Bitbucket Pipeline.',
        ],
      },
      pucp: {
        company: 'Pontificia Universidad Católica del Perú',
        role: 'Desarrollador de Software',
        period: '08/2021 – 12/2021',
        bullets: ['Implementación de plataforma de soporte para estudiantes.'],
      },
    },
    education: {
      title: 'Educación y Certificaciones',
      pucp: {
        name: 'Pontificia Universidad Católica del Perú',
        degree: 'Bachiller en Ingeniería Informática',
        period: '2016 – 2022',
        desc: 'Algoritmos, Estructuras de datos, Sistemas Operativos, Bases de datos, Diseño de sistemas y Desarrollo de Software.',
      },
      certsTitle: 'Certificados y Logros',
    },
    skills: {
      title: 'Habilidades y Tecnologías',
    },
    contact: {
      title: 'Contacto',
    },
    footer: 'Construido con React + TypeScript + Tailwind.',
  },
} as const

export type Lang = keyof typeof translations
export type Section = 'home' | 'experience' | 'education' | 'skills' | 'contact'

export const skills: { category: { en: string; es: string }; items: string[] }[] = [
  { category: { en: 'Backend', es: 'Backend' }, items: ['Java', 'Spring Boot', 'Go', 'Flask', 'Fastify', 'Echo', 'Struts'] },
  { category: { en: 'Frontend', es: 'Frontend' }, items: ['JavaScript', 'React', 'TypeScript'] },
  { category: { en: 'Cloud & Infra', es: 'Cloud e Infra' }, items: ['AWS', 'Azure', 'Docker', 'DAPR', 'Kubernetes'] },
  { category: { en: 'Databases', es: 'Bases de Datos' }, items: ['PostgreSQL', 'Oracle', 'SQL Server', 'Redis'] },
  { category: { en: 'DevOps', es: 'DevOps' }, items: ['Jenkins', 'Bitbucket Pipelines', 'CI/CD', 'Nexus'] },
  { category: { en: 'Languages', es: 'Lenguajes' }, items: ['Java', 'Go', 'Python', 'JavaScript'] },
]

export const certificates: string[] = [
  'TOEFL: 103',
  'FCE',
  'AWS Cloud Practitioner',
  '2do puesto Hackathon ScientOne',
]

export const navItems: Section[] = ['home', 'experience', 'education', 'skills', 'contact']
