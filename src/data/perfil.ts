// Datos personales y de contacto. Se usan en "Sobre mí" y en "Contacto".
// Los campos opcionales (con "?") que dejes sin completar no se muestran en el sitio.

export interface Perfil {
  github: string;
  linkedin?: string;
  formspreeId: string; // identificador del formulario en formspree.io
  tecnologias: string[];
}

export const perfil: Perfil = {
  github: "https://github.com/emigildev",
  linkedin: "https://www.linkedin.com/in/emi-gil-rosales/",
  formspreeId: "mzerdwrq",
  tecnologias: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Astro",
    "Node.js",
    "Supabase",
    "Tailwind CSS",
    "Kotlin",
  ],
};