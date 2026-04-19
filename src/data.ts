export const translations = {
  en: {
    nav: { home: 'Home', experience: 'Experience', education: 'Education', skills: 'Skills', contact: 'Contact' },
    hero: {
      subtitle: 'Backend Java Software Engineer',
      tagline: 'Computer Engineering graduate. Experience designing and developing efficient, scalable systems with cloud technologies.',
      primaryBtn: 'Experience',
      secondaryBtn: 'Contact Me',
    },
    experience: {
      title: 'Experience',
      bcp: {
        company: 'Banco de Crédito BCP',
        role: 'Backend Java Software Engineer',
        period: '01/2025 – Present',
        bullets: [
          'Built Lab Tesora, an automated conciliation platform that matches income records with receipts, reducing manual reconciliation effort.',
          'Developed backend services for Lab SendSei, a cross-border money transfer platform serving multiple countries.',
          'Architected scalable microservices using Quarkus (Java) and Python with DAPR for service-to-service communication.',
          'Deployed and managed cloud infrastructure on Azure: Container Apps, Functions, Redis, Service Bus, KeyVault, and B2C.',
          'Drove technical decisions in cross-functional Agile teams, contributing to architecture reviews and sprint planning.',
        ],
        tech: ['Java', 'Quarkus', 'Python', 'Azure', 'Redis', 'DAPR', 'Azure Service Bus'],
      },
      ntt: {
        company: 'NTT DATA Europe & Latam',
        role: 'Engineer',
        period: '06/2024 – 01/2025',
        bullets: [
          'Embedded at BCP — CIX Centro de Innovacxión (Innovation Center), building fintech products from inception.',
          'Engineered Lab SendSei, enabling cross-border remittances from Peru to the US, Spain, Colombia, and Chile.',
          'Designed microservices with hexagonal architecture, ensuring clean separation of business logic and infrastructure.',
          'Integrated Kushki payment gateway and Remitee APIs to process international money transfers end-to-end.',
          'Built serverless backend with Azure Functions (TypeScript), leveraging Redis Cache for low-latency data access.',
          'Implemented secure user authentication and authorization flows using Azure B2C.',
        ],
        tech: ['Azure', 'Azure B2C', 'Azure Functions', 'TypeScript', 'Redis', 'Airtable', 'Kushki', 'Remitee'],
      },
      bitel: {
        company: 'Bitel Perú',
        role: 'Software Developer',
        period: '09/2023 – 06/2024',
        bullets: [
          'Designed and built reactive receipt generation and delivery systems for Bitel Fiber customers using Spring Boot WebFlux.',
          'Developed tax compliance services to report invoices and receipts to SUNAT, ensuring regulatory adherence.',
          'Created an automated promotion subscription service for mobile lines, streamlining recurring billing collection.',
          'Built billing verification tools supporting multi-cycle validation to reduce invoicing errors.',
          'Delivered new features and maintained legacy systems built on Struts and Oracle.',
          'Developed RESTful APIs for transaction reporting and set up CI/CD pipelines with Jenkins.',
        ],
        tech: ['Java', 'Spring Boot WebFlux', 'Struts', 'Oracle', 'Jenkins', 'CI/CD'],
      },
      tiendada: {
        company: 'Tiendada',
        role: 'Back-end Developer',
        period: '04/2022 – 12/2022',
        bullets: [
          'Built a promotion engine handling configuration, calculation, and application of dynamic pricing rules.',
          'Integrated Izipay payment gateway, enabling secure online transactions for e-commerce stores.',
          'Developed bulk data import services supporting Excel/CSV uploads for product catalog management.',
          'Created analytics dashboards and KPI-driven metrics services to provide business insights.',
          'Automated SSL certificate provisioning for custom store domains.',
          'Established CI/CD pipelines in Bitbucket Pipelines to streamline deployments.',
        ],
        tech: ['Java', 'Spring Boot WebFlux', 'React', 'PostgreSQL', 'AWS', 'Izipay', 'Bitbucket Pipelines'],
      },
      pucp: {
        company: 'Pontificia Universidad Católica del Perú',
        role: 'Software Developer (Apprenticeship)',
        period: '08/2021 – 12/2021',
        bullets: ['Built a full-stack student support platform using Java, Spring Boot, React, and AWS to improve academic assistance workflows.'],
        tech: ['Java', 'Spring Boot', 'React', 'AWS'],
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
    skills: { title: 'Skills & Technologies' },
    contact: { title: 'Get In Touch' },
    footer: 'Built with React + TypeScript + Tailwind.',
  },
  es: {
    nav: { home: 'Inicio', experience: 'Experiencia', education: 'Educación', skills: 'Habilidades', contact: 'Contacto' },
    hero: {
      subtitle: 'Backend Java Software Engineer',
      tagline: 'Bachiller en Ingeniería Informática. Experiencia diseñando y desarrollando sistemas eficientes y escalables con tecnologías cloud.',
      primaryBtn: 'Experiencia',
      secondaryBtn: 'Contáctame',
    },
    experience: {
      title: 'Experiencia',
      bcp: {
        company: 'Banco de Crédito BCP',
        role: 'Backend Java Software Engineer',
        period: '01/2025 – Presente',
        bullets: [
          'Construí Lab Tesora, plataforma de conciliación automatizada que empareja ingresos con recibos, reduciendo el esfuerzo manual de reconciliación.',
          'Desarrollé servicios backend para Lab SendSei, plataforma de transferencias internacionales de dinero operando en múltiples países.',
          'Diseñé microservicios escalables con Quarkus (Java) y Python, utilizando DAPR para comunicación entre servicios.',
          'Desplegué y administré infraestructura cloud en Azure: Container Apps, Functions, Redis, Service Bus, KeyVault y B2C.',
          'Lideré decisiones técnicas en equipos Agile multifuncionales, contribuyendo en revisiones de arquitectura y planificación de sprints.',
        ],
        tech: ['Java', 'Quarkus', 'Python', 'Azure', 'Redis', 'DAPR', 'Azure Service Bus'],
      },
      ntt: {
        company: 'NTT DATA Europe & Latam',
        role: 'Ingeniero',
        period: '06/2024 – 01/2025',
        bullets: [
          'Asignado a BCP — CIX Centro de Innovacxión (Centro de Innovación), construyendo productos fintech desde su concepción.',
          'Desarrollé Lab SendSei, habilitando remesas internacionales desde Perú hacia EE.UU., España, Colombia y Chile.',
          'Diseñé microservicios con arquitectura hexagonal, asegurando separación limpia entre lógica de negocio e infraestructura.',
          'Integré pasarela de pagos Kushki y APIs de Remitee para procesar transferencias internacionales de extremo a extremo.',
          'Construí backend serverless con Azure Functions (TypeScript), aprovechando Redis Cache para acceso a datos de baja latencia.',
          'Implementé flujos seguros de autenticación y autorización de usuarios con Azure B2C.',
        ],
        tech: ['Azure', 'Azure B2C', 'Azure Functions', 'TypeScript', 'Redis', 'Airtable', 'Kushki', 'Remitee'],
      },
      bitel: {
        company: 'Bitel Perú',
        role: 'Desarrollador de Software',
        period: '09/2023 – 06/2024',
        bullets: [
          'Diseñé y construí sistemas reactivos de generación y envío de recibos para clientes de Bitel Fibra con Spring Boot WebFlux.',
          'Desarrollé servicios de cumplimiento tributario para reportar facturas y boletas a SUNAT, asegurando conformidad regulatoria.',
          'Creé servicio automatizado de suscripción a promociones para líneas móviles, agilizando la cobranza recurrente.',
          'Construí herramientas de verificación de facturación multi-ciclo para reducir errores en la facturación.',
          'Entregué nuevas funcionalidades y mantuve sistemas legacy construidos con Struts y Oracle.',
          'Desarrollé APIs RESTful para reportes de transacciones y configuré pipelines de CI/CD con Jenkins.',
        ],
        tech: ['Java', 'Spring Boot WebFlux', 'Struts', 'Oracle', 'Jenkins', 'CI/CD'],
      },
      tiendada: {
        company: 'Tiendada',
        role: 'Desarrollador Back-end',
        period: '04/2022 – 12/2022',
        bullets: [
          'Construí motor de promociones para configuración, cálculo y aplicación de reglas de precios dinámicos.',
          'Integré pasarela de pagos Izipay, habilitando transacciones seguras en línea para tiendas de e-commerce.',
          'Desarrollé servicios de importación masiva de datos con soporte para Excel/CSV para gestión de catálogos de productos.',
          'Creé dashboards analíticos y servicios de métricas basados en KPIs para generar insights de negocio.',
          'Automaticé la provisión de certificados SSL para dominios personalizados de tiendas.',
          'Establecí pipelines de CI/CD en Bitbucket Pipelines para agilizar los despliegues.',
        ],
        tech: ['Java', 'Spring Boot WebFlux', 'React', 'PostgreSQL', 'AWS', 'Izipay', 'Bitbucket Pipelines'],
      },
      pucp: {
        company: 'Pontificia Universidad Católica del Perú',
        role: 'Desarrollador de Software (Practicante)',
        period: '08/2021 – 12/2021',
        bullets: ['Construí plataforma full-stack de soporte estudiantil con Java, Spring Boot, React y AWS para mejorar los flujos de asistencia académica.'],
        tech: ['Java', 'Spring Boot', 'React', 'AWS'],
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
    skills: { title: 'Habilidades y Tecnologías' },
    contact: { title: 'Contacto' },
    footer: 'Construido con React + TypeScript + Tailwind.',
  },
} as const

export type Lang = keyof typeof translations
export type Section = 'home' | 'experience' | 'education' | 'skills' | 'contact'

export const skills: { category: { en: string; es: string }; items: string[] }[] = [
  { category: { en: 'Backend', es: 'Backend' }, items: ['Java', 'Quarkus', 'Spring Boot', 'Go', 'Python', 'Flask', 'Fastify', 'Echo', 'Struts'] },
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
