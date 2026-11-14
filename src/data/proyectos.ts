// Lista de proyectos del portfolio.
// Para agregar, sacar o reordenar un proyecto, se edita solo este archivo.

export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  estado?: "en-desarrollo"; // el "?" significa que es opcional
  demo?: string; // URL del sitio funcionando
  codigo?: string; // URL del repositorio (solo si es público)
}

export const proyectos: Proyecto[] = [
  {
    titulo: "Transporte de Personal en Tiempo Real",
    descripcion:
      "PWA para coordinar el traslado de empleados: quien viaja ve el bus en el mapa y pide parada con su ubicación, y el chofer recibe las paradas al instante.",
    tecnologias: ["React", "TypeScript", "Supabase", "Leaflet", "PWA"],
  },
  {
    titulo: "Transportes Córdoba",
    descripcion:
      "Propuesta de rediseño no oficial del sitio de una empresa de alquiler de transporte con chofer, con catálogo de flota y formulario de cotización.",
    tecnologias: ["Astro", "TypeScript", "Tailwind CSS", "Netlify"],
  },
  {
    titulo: "Gestión de Vuelos",
    descripcion:
      "PWA para administrar información de vuelos y asignar agentes de aerolínea a cada operación.",
    tecnologias: ["React", "Node.js", "PWA"],
  },
  {
    titulo: "emitv",
    descripcion:
      "App de TV en vivo para Android TV y Google TV, con una interfaz pensada para usarse con el control remoto.",
    tecnologias: ["Kotlin", "Jetpack Compose", "Media3"],
    estado: "en-desarrollo",
    codigo: "https://github.com/emigildev/emitv",
  },
  {
    titulo: "Sitio Web VW Kombi",
    descripcion:
      "Proyecto final de grado enfocado en el diseño e historia de la icónica Volkswagen Kombi.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    titulo: "Pollería App",
    descripcion: "Aplicación web para gestión de personal de una pollería.",
    tecnologias: ["React", "Node.js"],
  },
];