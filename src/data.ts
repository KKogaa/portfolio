export const translations = {
  en: {
    nav: { home: 'Home', experience: 'Experience', education: 'Education', skills: 'Skills', contact: 'Contact' },
    hero: {
      subtitle: 'Backend Java Software Engineer',
      tagline: 'Computer Engineering graduate. I design and build scalable backend systems and cloud infrastructure for fintech, telecom, and e-commerce.',
      primaryBtn: 'Experience',
      secondaryBtn: 'Contact Me',
    },
    experience: {
      title: 'Experience',
      bcp: {
        company: 'Banco de Crédito BCP — CIX Centro de Innovacxión',
        role: 'Backend Java Software Engineer',
        location: 'Lima, Peru',
        period: '01/2025 – Present',
        bullets: [
          'Backend engineer at CIX, BCP’s innovation center, building fintech products as in-house labs.',
          'Lab BCP Altoque — engineered the backend for a conversational AI assistant on WhatsApp, letting customers send money and access a credit card entirely through chat.',
          'Lab Tesora — built an automated reconciliation platform that matches income records against receipts, replacing a manual back-office process.',
          'Lab SendSei — developed backend services for a cross-border money transfer platform operating in multiple countries.',
          'Architected scalable microservices in Quarkus (Java) and Python, using DAPR for service-to-service communication.',
          'Deployed and operated cloud infrastructure on Azure: Container Apps, Functions, Redis, Service Bus, Key Vault, and B2C.',
          'Drove technical decisions in cross-functional Agile teams through architecture reviews and sprint planning.',
        ],
        tech: ['Java', 'Quarkus', 'Python', 'Azure', 'DAPR', 'Redis', 'Azure Service Bus'],
      },
      ntt: {
        company: 'NTT DATA Europe & Latam',
        role: 'Software Engineer',
        location: 'Lima, Peru',
        period: '06/2024 – 01/2025',
        bullets: [
          'Embedded at BCP — CIX Centro de Innovacxión, building fintech products from inception; converted to a direct BCP hire in 01/2025.',
          'Engineered Lab SendSei, enabling cross-border remittances from Peru to the US, Spain, Colombia, and Chile.',
          'Designed microservices with hexagonal architecture, keeping business logic decoupled from infrastructure.',
          'Integrated the Kushki payment gateway and Remitee APIs to process international transfers end to end.',
          'Built a serverless backend on Azure Functions (TypeScript), using Redis Cache for low-latency data access.',
          'Implemented user authentication and authorization flows with Azure B2C.',
        ],
        tech: ['TypeScript', 'Azure Functions', 'Azure B2C', 'Redis', 'Kushki', 'Remitee', 'Airtable'],
      },
      bitel: {
        company: 'Bitel Perú',
        role: 'Software Developer',
        location: 'Lima, Peru',
        period: '09/2023 – 06/2024',
        bullets: [
          'Designed and built reactive receipt generation and delivery systems for Bitel Fiber customers with Spring WebFlux.',
          'Developed tax compliance services to report invoices and receipts to SUNAT, Peru’s national tax authority.',
          'Created an automated promotion subscription service for mobile lines, streamlining recurring billing collection.',
          'Built billing verification tooling with multi-cycle validation to reduce invoicing errors.',
          'Delivered new features and maintained legacy systems running on Struts and Oracle.',
          'Developed REST APIs for transaction reporting and set up CI/CD pipelines with Jenkins.',
        ],
        tech: ['Java', 'Spring WebFlux', 'Struts', 'Oracle', 'Jenkins', 'CI/CD'],
      },
      tiendada: {
        company: 'Tiendada',
        role: 'Back-end Developer',
        location: 'Lima, Peru',
        period: '04/2022 – 12/2022',
        bullets: [
          'Built a promotion engine covering configuration, calculation, and application of dynamic pricing rules.',
          'Integrated the Izipay payment gateway to enable online transactions for e-commerce stores.',
          'Developed bulk import services for Excel/CSV product catalogs.',
          'Built analytics dashboards and KPI metrics services to surface business insights.',
          'Automated SSL certificate provisioning for custom store domains.',
          'Set up CI/CD pipelines in Bitbucket Pipelines to streamline deployments.',
        ],
        tech: ['Java', 'Spring WebFlux', 'React', 'PostgreSQL', 'AWS', 'Izipay', 'Bitbucket Pipelines'],
      },
      pucp: {
        company: 'Pontificia Universidad Católica del Perú',
        role: 'Software Developer (Apprenticeship)',
        location: 'Lima, Peru',
        period: '08/2021 – 12/2021',
        bullets: ['Built a full-stack student support platform with Java, Spring Boot, React, and AWS to improve academic assistance workflows.'],
        tech: ['Java', 'Spring Boot', 'React', 'AWS'],
      },
    },
    education: {
      title: 'Education & Certifications',
      pucp: {
        name: 'Pontificia Universidad Católica del Perú',
        degree: 'Bachelor of Computer Engineering',
        period: '2016 – 2022',
        desc: 'Algorithms, Data Structures, Operating Systems, Databases, System Design, and Software Development.',
      },
      certsTitle: 'Certifications & Awards',
    },
    skills: { title: 'Skills & Technologies' },
    contact: { title: 'Get In Touch' },
    cv: {
      title: 'Download CV',
      note: 'Harvard format · PDF',
      en: 'English',
      es: 'Spanish',
    },
    resume: {
      summary: 'SUMMARY',
      education: 'EDUCATION',
      experience: 'EXPERIENCE',
      skills: 'TECHNICAL SKILLS',
      languages: 'LANGUAGES',
      certs: 'CERTIFICATIONS & AWARDS',
      tech: 'Technologies',
      relevant: 'Relevant coursework',
    },
    footer: 'Built with React + TypeScript + Tailwind.',
  },
  es: {
    nav: { home: 'Inicio', experience: 'Experiencia', education: 'Educación', skills: 'Habilidades', contact: 'Contacto' },
    hero: {
      subtitle: 'Backend Java Software Engineer',
      tagline: 'Bachiller en Ingeniería Informática. Diseño y construyo sistemas backend escalables e infraestructura cloud para fintech, telecomunicaciones y e-commerce.',
      primaryBtn: 'Experiencia',
      secondaryBtn: 'Contáctame',
    },
    experience: {
      title: 'Experiencia',
      bcp: {
        company: 'Banco de Crédito BCP — CIX Centro de Innovacxión',
        role: 'Backend Java Software Engineer',
        location: 'Lima, Perú',
        period: '01/2025 – Presente',
        bullets: [
          'Ingeniero backend en el CIX, centro de innovación del BCP, construyendo productos fintech como labs internos.',
          'Lab BCP Altoque — desarrollé el backend de un asistente de IA conversacional en WhatsApp, permitiendo a los clientes enviar dinero y acceder a una tarjeta de crédito íntegramente desde el chat.',
          'Lab Tesora — construí una plataforma de conciliación automatizada que empareja ingresos con recibos, reemplazando un proceso manual de back-office.',
          'Lab SendSei — desarrollé servicios backend para una plataforma de transferencias internacionales de dinero operando en múltiples países.',
          'Diseñé microservicios escalables con Quarkus (Java) y Python, utilizando DAPR para la comunicación entre servicios.',
          'Desplegué y operé infraestructura cloud en Azure: Container Apps, Functions, Redis, Service Bus, Key Vault y B2C.',
          'Impulsé decisiones técnicas en equipos Agile multifuncionales mediante revisiones de arquitectura y planificación de sprints.',
        ],
        tech: ['Java', 'Quarkus', 'Python', 'Azure', 'DAPR', 'Redis', 'Azure Service Bus'],
      },
      ntt: {
        company: 'NTT DATA Europe & Latam',
        role: 'Ingeniero de Software',
        location: 'Lima, Perú',
        period: '06/2024 – 01/2025',
        bullets: [
          'Asignado a BCP — CIX Centro de Innovacxión, construyendo productos fintech desde su concepción; contratado directamente por el BCP en 01/2025.',
          'Desarrollé Lab SendSei, habilitando remesas internacionales desde Perú hacia EE.UU., España, Colombia y Chile.',
          'Diseñé microservicios con arquitectura hexagonal, manteniendo la lógica de negocio desacoplada de la infraestructura.',
          'Integré la pasarela de pagos Kushki y las APIs de Remitee para procesar transferencias internacionales de extremo a extremo.',
          'Construí un backend serverless con Azure Functions (TypeScript), usando Redis Cache para acceso a datos de baja latencia.',
          'Implementé flujos de autenticación y autorización de usuarios con Azure B2C.',
        ],
        tech: ['TypeScript', 'Azure Functions', 'Azure B2C', 'Redis', 'Kushki', 'Remitee', 'Airtable'],
      },
      bitel: {
        company: 'Bitel Perú',
        role: 'Desarrollador de Software',
        location: 'Lima, Perú',
        period: '09/2023 – 06/2024',
        bullets: [
          'Diseñé y construí sistemas reactivos de generación y envío de recibos para clientes de Bitel Fibra con Spring WebFlux.',
          'Desarrollé servicios de cumplimiento tributario para reportar facturas y boletas a SUNAT, la autoridad tributaria del Perú.',
          'Creé un servicio automatizado de suscripción a promociones para líneas móviles, agilizando la cobranza recurrente.',
          'Construí herramientas de verificación de facturación con validación multi-ciclo para reducir errores de facturación.',
          'Entregué nuevas funcionalidades y mantuve sistemas legacy sobre Struts y Oracle.',
          'Desarrollé APIs REST para reportes de transacciones y configuré pipelines de CI/CD con Jenkins.',
        ],
        tech: ['Java', 'Spring WebFlux', 'Struts', 'Oracle', 'Jenkins', 'CI/CD'],
      },
      tiendada: {
        company: 'Tiendada',
        role: 'Desarrollador Back-end',
        location: 'Lima, Perú',
        period: '04/2022 – 12/2022',
        bullets: [
          'Construí un motor de promociones que cubre configuración, cálculo y aplicación de reglas de precios dinámicos.',
          'Integré la pasarela de pagos Izipay para habilitar transacciones en línea en tiendas de e-commerce.',
          'Desarrollé servicios de importación masiva de catálogos de productos vía Excel/CSV.',
          'Construí dashboards analíticos y servicios de métricas por KPIs para generar insights de negocio.',
          'Automaticé la provisión de certificados SSL para dominios personalizados de tiendas.',
          'Configuré pipelines de CI/CD en Bitbucket Pipelines para agilizar los despliegues.',
        ],
        tech: ['Java', 'Spring WebFlux', 'React', 'PostgreSQL', 'AWS', 'Izipay', 'Bitbucket Pipelines'],
      },
      pucp: {
        company: 'Pontificia Universidad Católica del Perú',
        role: 'Desarrollador de Software (Practicante)',
        location: 'Lima, Perú',
        period: '08/2021 – 12/2021',
        bullets: ['Construí una plataforma full-stack de soporte estudiantil con Java, Spring Boot, React y AWS para mejorar los flujos de asistencia académica.'],
        tech: ['Java', 'Spring Boot', 'React', 'AWS'],
      },
    },
    education: {
      title: 'Educación y Certificaciones',
      pucp: {
        name: 'Pontificia Universidad Católica del Perú',
        degree: 'Bachiller en Ingeniería Informática',
        period: '2016 – 2022',
        desc: 'Algoritmos, Estructuras de Datos, Sistemas Operativos, Bases de Datos, Diseño de Sistemas y Desarrollo de Software.',
      },
      certsTitle: 'Certificados y Logros',
    },
    skills: { title: 'Habilidades y Tecnologías' },
    contact: { title: 'Contacto' },
    cv: {
      title: 'Descargar CV',
      note: 'Formato Harvard · PDF',
      en: 'Inglés',
      es: 'Español',
    },
    resume: {
      summary: 'PERFIL',
      education: 'EDUCACIÓN',
      experience: 'EXPERIENCIA',
      skills: 'HABILIDADES TÉCNICAS',
      languages: 'IDIOMAS',
      certs: 'CERTIFICADOS Y LOGROS',
      tech: 'Tecnologías',
      relevant: 'Cursos relevantes',
    },
    footer: 'Construido con React + TypeScript + Tailwind.',
  },
} as const

export type Lang = keyof typeof translations
export type Section = 'home' | 'experience' | 'education' | 'skills' | 'contact'

export const skills: { category: { en: string; es: string }; items: string[] }[] = [
  { category: { en: 'Languages', es: 'Lenguajes' }, items: ['Java', 'Python', 'Go', 'TypeScript'] },
  { category: { en: 'Backend', es: 'Backend' }, items: ['Quarkus', 'Spring Boot', 'Spring WebFlux', 'Flask', 'Fastify', 'Echo'] },
  { category: { en: 'Cloud & Infra', es: 'Cloud e Infra' }, items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'DAPR'] },
  { category: { en: 'Databases', es: 'Bases de Datos' }, items: ['PostgreSQL', 'Oracle', 'SQL Server', 'Redis'] },
  { category: { en: 'DevOps', es: 'DevOps' }, items: ['CI/CD', 'Jenkins', 'Bitbucket Pipelines', 'Nexus'] },
  { category: { en: 'Frontend', es: 'Frontend' }, items: ['React', 'Tailwind CSS'] },
]

export const certificates: { en: string; es: string }[] = [
  { en: 'AWS Certified Cloud Practitioner', es: 'AWS Certified Cloud Practitioner' },
  { en: 'Microsoft Certified: Azure Fundamentals (2025)', es: 'Microsoft Certified: Azure Fundamentals (2025)' },
  {
    en: 'Data Science and Machine Learning: Making Data-Driven Decisions — MIT IDSS',
    es: 'Data Science and Machine Learning: Making Data-Driven Decisions — MIT IDSS',
  },
  { en: '2nd place — ScientOne Hackathon', es: '2do puesto — Hackathon ScientOne' },
]

/** Surfaced on its own line: a gating criterion for remote and cross-border roles. */
export const languages: { en: string; es: string } = {
  en: 'Spanish (native)  •  English (C1 — TOEFL iBT 103)',
  es: 'Español (nativo)  •  Inglés (C1 — TOEFL iBT 103)',
}

/** Opening positioning statement — the first thing a recruiter reads. */
export const summary: { en: string; es: string } = {
  en: 'Backend engineer with 4+ years building Java and Quarkus microservices and Azure cloud infrastructure for fintech, telecom, and e-commerce. Currently at BCP’s innovation center, shipping cross-border remittances, conversational AI, and automated reconciliation for Peru’s largest bank.',
  es: 'Ingeniero backend con más de 4 años construyendo microservicios en Java y Quarkus e infraestructura cloud en Azure para fintech, telecomunicaciones y e-commerce. Actualmente en el centro de innovación del BCP, desarrollando remesas internacionales, IA conversacional y conciliación automatizada para el banco más grande del Perú.',
}

export const profile = {
  name: 'Andrés Kenichi Koga Nakay',
  location: { en: 'Lima, Peru', es: 'Lima, Perú' },
  email: 'andreskoga@gmail.com',
  /** Leave blank to omit from the resume header. */
  linkedin: '',
  github: 'github.com/KKogaa',
}

export const navItems: Section[] = ['home', 'experience', 'education', 'skills', 'contact']
