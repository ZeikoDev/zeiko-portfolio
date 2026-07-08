export interface ProjectDetails {
    longDescription: { en: string; es: string };
    highlights: { en: string[]; es: string[] };
    screenshots: string[];
}

export interface PersonalProject {
    slug: string;
    name: { en: string; es: string };
    description: { en: string; es: string };
    technologies: string[];
    image: string;
    externalUrl?: string;
    details: ProjectDetails;
}

export const personalProjects: PersonalProject[] = [
    {
        slug: "inventory-dashboard",
        name: {
            en: "Zeiko Inventory Dashboard",
            es: "Panel de Gestión de Inventario"
        },
        description: {
            en: "Modern dashboard for inventory, company, and user management with role-based access control.",
            es: "Panel moderno para gestión de inventario, empresas y usuarios con control de acceso por roles."
        },
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Django",
            "PostgreSQL",
            "Material UI",
        ],
        image: "/assets/projects/inventory-dashboard.png",
        externalUrl: "https://github.com/zeikodev/zeiko-inventory-dashboard",
        details: {
            longDescription: {
                en: "I developed a fullstack application for inventory and company management. It allows users (with admin or external roles) to manage products, inventories, companies, and users from an intuitive dashboard. Includes JWT authentication, permission control, entity editing and creation, and real-time data visualization.",
                es: "Desarrollé una aplicación fullstack para la gestión de inventarios y empresas. Permite a los usuarios (con roles de admin o externo) gestionar productos, inventarios, empresas y usuarios desde un panel intuitivo. Incluye autenticación JWT, control de permisos, edición y creación de entidades, y visualización de datos en tiempo real."
            },
            highlights: {
                en: [
                    "Management of products, inventory, companies, and users",
                    "Role-based access control (admin/external) and JWT authentication",
                    "Modern and responsive interface with Material UI",
                    "Full CRUD and permission-protected navigation",
                    "Data export and advanced visualization"
                ],
                es: [
                    "Gestión de productos, inventario, empresas y usuarios",
                    "Control de acceso por roles (admin/externo) y autenticación JWT",
                    "Interfaz moderna y responsiva con Material UI",
                    "CRUD completo y navegación protegida por permisos",
                    "Exportación de datos y visualización avanzada"
                ]
            },
            screenshots: ["/assets/projects/inventory-dashboard.png"]
        }
    },
    {
        slug: "discotek",
        name: {
            en: "Discotek",
            es: "Discotek"
        },
        description: {
            en: "A mobile application for discovering and exploring nightclubs with real-time location tracking and comprehensive club information.",
            es: "Aplicación móvil para descubrir y explorar discotecas con seguimiento de ubicación en tiempo real e información completa de los clubes."
        },
        technologies: [
            "React Native",
            "TypeScript",
            "Expo",
            "React Navigation",
            "expo-location",
        ],
        image: "/assets/projects/discotek.webp",
        externalUrl: "https://github.com/zeikodev/DK",
        details: {
            longDescription: {
                en: "I built a mobile application that helps users discover and explore nightclubs in various locations. The app features real-time GPS location tracking, distance calculation, and comprehensive club information including pricing, capacity, and opening hours. Users can search and filter clubs based on various criteria, with automatic sorting by proximity to their current location.",
                es: "Construí una aplicación móvil que ayuda a los usuarios a descubrir y explorar discotecas en varias ubicaciones. La app incluye seguimiento de ubicación GPS en tiempo real, cálculo de distancias e información completa de los clubes, incluyendo precios, capacidad y horarios. Los usuarios pueden buscar y filtrar clubes según varios criterios, con ordenamiento automático por proximidad."
            },
            highlights: {
                en: [
                    "Advanced search and filtering by name, location, and price",
                    "Real-time GPS location tracking and distance calculation",
                    "Detailed club cards with comprehensive information",
                    "Location-based sorting and distance display",
                    "Mobile-first design with smooth navigation"
                ],
                es: [
                    "Búsqueda y filtrado avanzado por nombre, ubicación y precio",
                    "Seguimiento de ubicación GPS en tiempo real y cálculo de distancias",
                    "Tarjetas detalladas de clubes con información completa",
                    "Ordenamiento por proximidad y visualización de distancias",
                    "Diseño mobile-first con navegación fluida"
                ]
            },
            screenshots: [
                "/assets/projects/dk-1.webp",
                "/assets/projects/dk-2.webp"
            ]
        }
    },
    {
        slug: "easylife",
        name: {
            en: "Easylife",
            es: "Easylife"
        },
        description: {
            en: "A mobile app for booking, tracking, and managing professional services with real-time updates and map integration.",
            es: "App móvil para reservar, rastrear y gestionar servicios profesionales con actualizaciones en tiempo real e integración de mapas."
        },
        technologies: [
            "React Native",
            "TypeScript",
            "Firebase",
            "React Native Maps",
            "NativeWind"
        ],
        image: "/assets/projects/easylife.png",
        externalUrl: "https://github.com/zeikodev/easylife",
        details: {
            longDescription: {
                en: "Easylife is a comprehensive service management platform that enables users to request, track, and manage various professional services. The app features real-time service tracking, scheduling capabilities, and a user-friendly interface for managing service requests. Users can browse available services, schedule appointments, track service providers in real-time, and rate their experiences.",
                es: "Easylife es una plataforma integral de gestión de servicios que permite a los usuarios solicitar, rastrear y gestionar diversos servicios profesionales. La app incluye seguimiento de servicios en tiempo real, programación de citas y una interfaz amigable para la gestión de solicitudes. Los usuarios pueden explorar servicios disponibles, agendar citas, rastrear proveedores en tiempo real y calificar sus experiencias."
            },
            highlights: {
                en: [
                    "Real-time service tracking with map integration",
                    "Service scheduling and management",
                    "User authentication and profile management",
                    "Service provider rating system",
                    "Interactive map interface for service location",
                    "Push notifications for service updates",
                    "Multi-language support (Spanish/English)",
                    "Social media authentication integration"
                ],
                es: [
                    "Seguimiento de servicios en tiempo real con integración de mapas",
                    "Programación y gestión de servicios",
                    "Autenticación de usuarios y gestión de perfiles",
                    "Sistema de calificación de proveedores",
                    "Interfaz de mapa interactivo para ubicación de servicios",
                    "Notificaciones push para actualizaciones de servicios",
                    "Soporte multilenguaje (español/inglés)",
                    "Integración de autenticación con redes sociales"
                ]
            },
            screenshots: [
                "/assets/projects/easylife-1.png",
                "/assets/projects/easylife-2.png"
            ]
        }
    },
    {
        slug: "finances-dashboard",
        name: {
            en: "Personal Finance Dashboard",
            es: "Dashboard de Finanzas Personales"
        },
        description: {
            en: "Bi-currency (COP/USD) dashboard for tracking transactions, debts, subscriptions and budgets, with the official exchange rate cached daily.",
            es: "Dashboard bimonetario (COP/USD) para gestionar transacciones, deudas, suscripciones y presupuestos, con la TRM oficial cacheada a diario."
        },
        technologies: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "shadcn/ui",
            "TailwindCSS",
        ],
        image: "/assets/projects/finances-dashboard.webp",
        details: {
            longDescription: {
                en: "I built the app I use to manage my own finances: a Next.js (App Router) + Supabase dashboard where every transaction keeps its original currency (COP or USD) and the whole UI can be flipped between currencies instantly. Reads run in Server Components and return aggregates separated by original currency, so the COP/USD toggle converts on the client without refetching; writes go through Server Actions validated with zod. The exchange rate comes from Colombia's official TRM (datos.gov.co), cached daily in the database with fallbacks. A Sankey diagram shows where the money comes from and where it goes, and every table has row-level security enabled.",
                es: "Construí la aplicación que uso para manejar mis propias finanzas: un dashboard en Next.js (App Router) + Supabase donde cada transacción guarda su moneda original (COP o USD) y toda la interfaz puede cambiarse de moneda al instante. Las lecturas corren en Server Components y devuelven los agregados separados por moneda original, así el toggle COP/USD convierte en el cliente sin refetch; las escrituras pasan por Server Actions validadas con zod. La tasa de cambio viene de la TRM oficial (datos.gov.co), cacheada a diario en la base de datos con fallbacks. Un diagrama de Sankey muestra de dónde viene y a dónde va el dinero, y todas las tablas tienen row-level security habilitado."
            },
            highlights: {
                en: [
                    "Bi-currency COP/USD system with instant conversion using the official daily exchange rate",
                    "Money-flow Sankey diagram: income sources on one side, spending categories on the other",
                    "Debt tracking with payment progress and subscriptions with monthly-equivalent cost",
                    "50/30/20 budgets (configurable) calculated over the month's income",
                    "Server Components for reads, zod-validated Server Actions for writes",
                    "Row-level security on every table, single-user app with signups disabled"
                ],
                es: [
                    "Sistema bimonetario COP/USD con conversión instantánea usando la TRM oficial diaria",
                    "Diagrama de Sankey del flujo de dinero: fuentes de ingreso a un lado, categorías de gasto al otro",
                    "Deudas con progreso de pago y suscripciones con costo mensual equivalente",
                    "Presupuestos 50/30/20 (configurables) calculados sobre el ingreso del mes",
                    "Server Components para lecturas y Server Actions validadas con zod para escrituras",
                    "Row-level security en todas las tablas, app de un solo usuario con registros deshabilitados"
                ]
            },
            screenshots: [
                "/assets/projects/finances-dashboard.webp",
                "/assets/projects/fd-1.webp",
                "/assets/projects/fd-2.webp",
                "/assets/projects/fd-3.webp"
            ]
        }
    }
];
