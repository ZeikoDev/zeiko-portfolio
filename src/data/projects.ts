interface Localized {
  en: string;
  es: string;
}

export interface Project {
  name: Localized;
  /** Etiqueta corta sobre la imagen: tipo de trabajo y estado, sin autoevaluaciones */
  tag: Localized;
  problem: Localized;
  solution: Localized;
  result: Localized;
  technologies: string[];
  image: string;
  externalLink?: string;
  /** Muestra el botón "Más detalles" además del link externo */
  hasDetailPage?: boolean;
  slug: string;
}

export const projects: Project[] = [
  {
    name: {
      en: "Premium Academy",
      es: "Premium Academy",
    },
    tag: {
      en: "LMS · In production",
      es: "LMS · En producción",
    },
    problem: {
      en: "A personal development academy needed to sell its courses from its own platform: download-protected video, recurring subscriptions and local payment methods — without depending on marketplaces that keep the commission and the student data.",
      es: "Una academia de desarrollo personal necesitaba vender sus cursos desde una plataforma propia: video protegido contra descargas, suscripciones recurrentes y medios de pago locales — sin depender de marketplaces que se quedan con la comisión y los datos de los alumnos.",
    },
    solution: {
      en: "I built the full platform with React and Firebase: secure video streaming with VdoCipher, payments with ePayco, subscription management with Trelli and AI-powered course recommendations. I also wrote a Python bot that syncs student roles with their Discord community.",
      es: "Construí la plataforma completa con React y Firebase: streaming seguro de video con VdoCipher, pagos con ePayco, gestión de suscripciones con Trelli y recomendaciones de cursos con IA. También desarrollé un bot en Python que sincroniza los roles de los alumnos con su comunidad de Discord.",
    },
    result: {
      en: "The platform runs in production with over 1,000 registered users. The academy manages sales, content and community from its own infrastructure, and I remain in charge of maintenance and new features.",
      es: "La plataforma opera en producción con más de 1.000 usuarios registrados. La academia gestiona ventas, contenido y comunidad desde su propia infraestructura, y sigo a cargo del mantenimiento y las nuevas funcionalidades.",
    },
    technologies: [
      "React",
      "Firebase",
      "TailwindCSS",
      "VdoCipher",
      "ePayco",
      "Trelli",
      "Python",
      "Discord API",
      "Vercel",
    ],
    image: "/assets/projects/premiumacademy.png",
    externalLink: "https://premiumacademy.pro",
    slug: "premium-academy",
  },
  {
    name: {
      en: "Fondas de mi Pueblo Antioqueño",
      es: "Fondas de mi Pueblo Antioqueño",
    },
    tag: {
      en: "3D Map · Feria de las Flores",
      es: "Mapa 3D · Feria de las Flores",
    },
    problem: {
      en: "The event was reaching its 5th edition inside Medellín's Feria de las Flores, with a fixed four-day window. Its appeal is the towns it brings together, but that information lived as flat text. The site was also coming off WordPress and had to end up on the client's own hosting.",
      es: "El evento llegaba a su 5.ª edición dentro de la Feria de las Flores de Medellín, con una ventana fija de cuatro días. Su atractivo son los pueblos que reúne, pero esa información vivía como texto plano. El sitio además venía de un WordPress y debía quedar en el hosting propio del cliente.",
    },
    solution: {
      en: "I built the interactive 3D map for the municipalities section: all of Antioquia, municipality by municipality, colored by its nine subregions, with the participating towns highlighted and a card for each one showing population, climate and local trivia. I worked with Three.js on React Three Fiber, took part in the section's design decisions, and handled the SEO optimizations and the cPanel deployment.",
      es: "Construí el mapa interactivo 3D de la sección de municipios: Antioquia completa, municipio a municipio, coloreada por sus nueve subregiones, con los pueblos participantes destacados y una ficha por cada uno con población, clima y datos curiosos. Trabajé con Three.js sobre React Three Fiber, participé en las decisiones de diseño de la sección, y me encargué de las optimizaciones de SEO y del despliegue en cPanel.",
    },
    result: {
      en: "The site was live at least a month before the event, not the day before: margin to test and for the new pages to get indexed ahead of the traffic peak. The municipalities went from a list to a territory visitors rotate and explore, and the site was left running on the organizer's hosting, off WordPress.",
      es: "El sitio quedó publicado al menos un mes antes del evento, no la víspera: margen para probar y para que las páginas nuevas se indexaran antes del pico de tráfico. Los municipios pasaron de un listado a un territorio que el visitante gira y explora, y el sitio quedó corriendo en el hosting del organizador, fuera de WordPress.",
    },
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "WebGL",
      "SEO",
      "cPanel",
    ],
    image: "/assets/projects/fondas.webp",
    externalLink: "https://fondasdemipuebloantioqueno.com.co",
    hasDetailPage: true,
    slug: "fondas-mi-pueblo",
  },
  {
    name: {
      en: "Arcopedicousa",
      es: "Arcopedicousa",
    },
    tag: {
      en: "Migration · E-commerce",
      es: "Migración · E-commerce",
    },
    problem: {
      en: "An orthopedic footwear e-commerce with over 15,000 monthly visits had outgrown its original WordPress hosting: the client needed better scalability and performance without rebuilding the store.",
      es: "Un e-commerce de calzado ortopédico con más de 15.000 visitas mensuales se había quedado corto con su hosting WordPress original: el cliente necesitaba más escalabilidad y rendimiento sin reconstruir la tienda.",
    },
    solution: {
      en: "I worked on migrating the site's infrastructure to AWS: deploying it on an EC2 instance, configuring the environment and making sure the store kept operating during the transition.",
      es: "Trabajé en la migración de la infraestructura del sitio a AWS: despliegue en una instancia EC2, configuración del entorno y continuidad de la tienda durante la transición.",
    },
    result: {
      en: "The store now runs on more stable infrastructure with higher load capacity, sustaining its monthly traffic without the bottlenecks of the previous hosting.",
      es: "La tienda corre ahora sobre una infraestructura más estable y con mayor capacidad de carga, sosteniendo su tráfico mensual sin los cuellos de botella del hosting anterior.",
    },
    technologies: ["AWS", "EC2", "WordPress"],
    image: "/assets/projects/arcopedicousa.png",
    externalLink: "https://arcopedicousa.com",
    slug: "arcopedicousa",
  },
  {
    name: {
      en: "Soy Consciente — Escuela Espiritual",
      es: "Soy Consciente — Escuela Espiritual",
    },
    tag: {
      en: "Infrastructure · Consulting",
      es: "Infraestructura · Consultoría",
    },
    problem: {
      en: "An online course school inherited its platform from a previous webmaster: the main domain was registered under a third party's name, the site ran on an unconsolidated reseller hosting, transactional emails were not being delivered, and the DNS had 20+ obsolete and conflicting records.",
      es: "Una escuela de cursos en línea heredó su plataforma de un webmaster anterior: el dominio principal estaba a nombre de un tercero, el sitio corría en un hosting reseller sin consolidar, los correos transaccionales no se entregaban y el DNS tenía más de 20 registros obsoletos y conflictivos.",
    },
    solution: {
      en: "As an independent consultant I audited and recovered the infrastructure: I migrated the full WordPress site (LMS and e-commerce, 1.1GB) to Hostinger by manually rebuilding the backup, transferred the domain to Cloudflare under the client's control, cleaned the DNS from 20 records down to 6, and set up SMTP via Google Workspace with SPF, DKIM and DMARC. I also audited the Meta Pixel and found the Purchase event was never firing.",
      es: "Como consultor independiente audité y recuperé la infraestructura: migré el WordPress completo (LMS y e-commerce, 1.1GB) a Hostinger reconstruyendo el backup manualmente, transferí el dominio a Cloudflare bajo control de la clienta, depuré el DNS de 20 a 6 registros y configuré SMTP vía Google Workspace con SPF, DKIM y DMARC. También audité el Meta Pixel y encontré que el evento de compra nunca se disparaba.",
    },
    result: {
      en: "The client regained full legal control of her digital infrastructure, transactional emails went from broken to fully operational (8.9/10 deliverability score), and the tracking finding explained why her ad campaigns couldn't measure return. Everything was documented, with credentials centralized in a password manager she owns.",
      es: "La clienta recuperó el control total y legal de su infraestructura digital, los correos transaccionales pasaron de estar rotos a operar al 100% (entregabilidad 8.9/10) y el hallazgo del tracking explicó por qué sus campañas no podían medir retorno. Todo quedó documentado, con credenciales centralizadas en un gestor de su propiedad.",
    },
    technologies: [
      "WordPress",
      "Tutor LMS",
      "WooCommerce",
      "Cloudflare",
      "Hostinger",
      "Google Workspace",
      "Meta Business",
    ],
    image: "/assets/projects/soyconsciente.webp",
    externalLink: "https://angelicalmente.net",
    hasDetailPage: true,
    slug: "soy-consciente",
  },
  {
    name: {
      en: "Aprendizaje en Español — ITM",
      es: "Aprendizaje en Español — ITM",
    },
    tag: {
      en: "EdTech · Freelance",
      es: "EdTech · Freelance",
    },
    problem: {
      en: "The ITM institute needed a web platform to help people with hearing impairments learn Spanish through interactive content and guidance from qualified teachers — lightweight and usable on any device.",
      es: "El ITM necesitaba una plataforma web para que personas con discapacidad auditiva aprendieran español con contenido interactivo y acompañamiento de docentes calificados — liviana y usable en cualquier dispositivo.",
    },
    solution: {
      en: "As a freelance frontend developer I built the main views and several educational mini-games with plain HTML, CSS and JavaScript — no frameworks, prioritizing accessibility and minimal page weight.",
      es: "Como desarrollador frontend freelance construí las vistas principales y varios mini-juegos educativos con HTML, CSS y JavaScript puros — sin frameworks, priorizando accesibilidad y peso mínimo.",
    },
    result: {
      en: "The project moved into a pilot with 100+ users that validated both its educational value and its technical foundation. It was my first freelance project with an educational institution.",
      es: "El proyecto pasó a una prueba piloto con más de 100 usuarios que validó su valor educativo y su base técnica. Fue mi primer proyecto freelance con una institución educativa.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/assets/projects/aprendizajenespanol.png",
    slug: "itm",
  },
];
