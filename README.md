# Portfolio · emigildev

Mi portfolio como desarrolladora web: proyectos, trayectoria y contacto.

🔗 **https://emigildev.github.io/portfolio/**

## Tecnologías

- [Astro](https://astro.build) con salida estática: todo el HTML se genera al compilar.
- TypeScript para los datos y las props de los componentes.
- CSS propio con variables para la paleta de colores (sin frameworks).
- [Formspree](https://formspree.io) para el formulario de contacto.
- Publicación automática en GitHub Pages con GitHub Actions.

## Estructura

```text
src/
├── assets/       # Logo en SVG
├── components/   # Header, tarjetas de proyecto, secciones
├── data/         # Contenido del sitio: proyectos, perfil y trayectoria
├── layouts/      # Layout base: <head>, metadatos y estilos globales
└── pages/        # index.astro, la página principal
public/           # Archivos que se sirven tal cual (favicon, imagen para redes)
```

Para agregar o modificar contenido, en general alcanza con editar los archivos de `src/data/`.

## Comandos

| Comando           | Qué hace                                          |
| :---------------- | :------------------------------------------------ |
| `npm install`     | Instala las dependencias                          |
| `npm run dev`     | Servidor local en `localhost:4321/portfolio`      |
| `npm run check`   | Revisa errores de tipos en todo el proyecto       |
| `npm run build`   | Genera el sitio en `dist/`                        |
| `npm run preview` | Sirve localmente el sitio generado                |

## Publicación

Cada cambio que llega a la rama `main` se publica solo mediante el workflow
`.github/workflows/astro.yml`. Los cambios nuevos se trabajan en una rama aparte y
se suman a `main` con un Pull Request.
