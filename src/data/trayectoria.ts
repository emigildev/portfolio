// Experiencia laboral, formación e idiomas.
// Los elementos aparecen en el mismo orden que en estas listas (lo más reciente primero).

export interface Etapa {
  titulo: string;
  lugar: string;
  periodo: string;
  descripcion?: string;
  enCurso?: boolean;
}

export const experiencia: Etapa[] = [
  {
    titulo: "Auxiliar de Tráfico",
    lugar: "Aerolíneas Argentinas · Córdoba",
    periodo: "2015 – actualidad",
    descripcion:
      "Atención de pasajeros en aeropuerto: check-in, embarque y resolución de situaciones operativas con el sistema SABRE.",
  },
  {
    titulo: "Operadora de Ventas · Call Center",
    lugar: "Aerolíneas Argentinas · Buenos Aires",
    periodo: "2011 – 2015",
    descripcion:
      "Venta, emisión y cambios de pasajes con SABRE, y atención de consultas por demoras, cancelaciones y reubicaciones.",
  },
  {
    titulo: "Voluntaria",
    lugar: "Fundación Valdocco Pibes de la Patagonia · Santa Cruz",
    periodo: "2009",
    descripcion:
      "Armé una sala de computación con equipos reciclados y di clases de informática básica a los chicos del hogar.",
  },
  {
    titulo: "Help Desk",
    lugar: "CEITECH · Buenos Aires",
    periodo: "2004",
    descripcion:
      "Soporte técnico remoto y presencial: gestión de tickets y resolución de problemas de hardware, software y redes.",
  },
];

export const formacion: Etapa[] = [
  {
    titulo: "Técnica Universitaria en Informática Aplicada al Diseño Multimedia y de Sitios Web",
    lugar: "Universidad Nacional del Litoral",
    periodo: "2017 – 2026",
  },
  {
    titulo: "Google IT Support Professional Certificate",
    lugar: "Google · Coursera",
    periodo: "2024 – actualidad",
    enCurso: true,
  },
  {
    titulo: "Licenciatura en Sociología",
    lugar: "Universidad Nacional del Chaco Austral",
    periodo: "2020 – actualidad",
    enCurso: true,
  },
  {
    titulo: "Administración de Redes Cisco CCNA",
    lugar: "Central Tech",
    periodo: "2009 – 2010",
  },
  {
    titulo: "Profesorado de Nivel Primario",
    lugar: "Instituto Superior de Profesorado N.º 9",
    periodo: "1996 – 1998",
  },
];

export const idiomas: string[] = ["Español (nativo)", "Inglés (intermedio)", "Portugués (básico)"];