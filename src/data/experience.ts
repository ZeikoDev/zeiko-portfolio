type Localized = { en: string; es: string };
type LocalizedList = { en: string[]; es: string[] };

export interface Role {
  title: Localized;
  org: string;
  url?: string;
  start: string; // YYYY-MM
  end?: string; // undefined = present
  points: LocalizedList;
  stack: string[];
}

export const roles: Role[] = [
  {
    title: { en: "Independent Software Consultant", es: "Consultor de software independiente" },
    org: "zeiko.dev",
    start: "2024-11",
    points: {
      en: [
        "Deliver web projects end to end for my own clients: scoping, development, deployment and ongoing support.",
        "Build fast, SEO-optimized interfaces with Astro, React and TypeScript, focused on Core Web Vitals.",
        "Implement and maintain course platforms on WordPress/WooCommerce: hosting migrations, DNS and Cloudflare, SMTP and email deliverability.",
        "Debug production issues across the stack and explain progress and trade-offs to non-technical stakeholders.",
      ],
      es: [
        "Entrego proyectos web de punta a punta para mis propios clientes: alcance, desarrollo, despliegue y soporte.",
        "Construyo interfaces rápidas y optimizadas para SEO con Astro, React y TypeScript, con foco en Core Web Vitals.",
        "Implemento y mantengo plataformas de cursos en WordPress/WooCommerce: migraciones de hosting, DNS y Cloudflare, SMTP y entregabilidad de correo.",
        "Resuelvo incidentes en producción en todo el stack y explico avances y decisiones a personas no técnicas.",
      ],
    },
    stack: ["Astro", "React", "TypeScript", "WordPress", "Cloudflare", "Three.js"],
  },
  {
    title: { en: "Web & Cloud Support", es: "Soporte web y cloud" },
    org: "Arcopédico USA",
    url: "https://arcopedicousa.com",
    start: "2024-07",
    end: "2024-10",
    points: {
      en: ["Supported the migration of a legacy WordPress store to AWS (EC2/S3) alongside the lead team."],
      es: ["Apoyé la migración de una tienda WordPress heredada a AWS (EC2/S3) junto al equipo líder."],
    },
    stack: ["AWS EC2", "S3", "WordPress"],
  },
  {
    title: { en: "Frontend Developer", es: "Desarrollador frontend" },
    org: "Premium Academy",
    url: "https://premiumacademy.pro",
    start: "2024-02",
    end: "2024-06",
    points: {
      en: [
        "Built the interface of a custom LMS with React and Tailwind, serving 1,000+ active users.",
        "Integrated REST APIs, Firebase authentication and an AI-powered support chat into the frontend.",
        "Integrated the VdoCipher protected-video SDK on iOS: certificates, provisioning and release through the Apple Developer Program.",
      ],
      es: [
        "Construí la interfaz de un LMS a medida con React y Tailwind, usado por más de 1.000 usuarios activos.",
        "Integré APIs REST, autenticación con Firebase y un chat de soporte con IA en el frontend.",
        "Integré el SDK de video protegido de VdoCipher en iOS: certificados, aprovisionamiento y publicación con Apple Developer Program.",
      ],
    },
    stack: ["React", "TailwindCSS", "Firebase", "VdoCipher", "iOS"],
  },
  {
    title: { en: "Frontend Developer (pilot project)", es: "Desarrollador frontend (proyecto piloto)" },
    org: "Instituto Tecnológico Metropolitano",
    start: "2023-06",
    end: "2023-11",
    points: {
      en: ["Built an accessible learning platform to WCAG standards for students with hearing disabilities, within a cross-functional team."],
      es: ["Construí una plataforma de aprendizaje accesible bajo estándares WCAG para estudiantes con discapacidad auditiva, en un equipo multidisciplinario."],
    },
    stack: ["HTML", "CSS", "JavaScript", "WCAG"],
  },
];

export const education = {
  title: { en: "B.Sc. Software Engineering (in progress)", es: "Ingeniería de Software (en curso)" },
  org: "Institución Universitaria Pascual Bravo",
  start: "2025",
};

export const certifications: { name: Localized; issuer: string }[] = [
  { name: { en: "Full Stack Developer with JavaScript", es: "Desarrollador Full Stack con JavaScript" }, issuer: "Platzi" },
  { name: { en: "Foundations of User Experience (UX) Design", es: "Fundamentos de diseño de experiencia de usuario (UX)" }, issuer: "Google" },
  { name: { en: "iOS App Development with Swift", es: "Desarrollo de apps iOS con Swift" }, issuer: "Platzi" },
];

export const languagesSpoken: { name: Localized; level: Localized }[] = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: { en: "B2, advanced conversational", es: "B2, conversacional avanzado" } },
];

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
};

export function formatPeriod(lang: "en" | "es", start: string, end?: string) {
  const f = (d: string) => {
    const [y, m] = d.split("-");
    return m ? `${MONTHS[lang][Number(m) - 1]} ${y}` : y;
  };
  return `${f(start)} – ${end ? f(end) : lang === "es" ? "presente" : "present"}`;
}
