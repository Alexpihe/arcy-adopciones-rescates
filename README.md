# ARCY Adopciones y Rescates

Landing page estática preparada para el flujo **GitHub → Netlify**.

## Arquitectura

Este proyecto no requiere React, Next.js, Vite, npm ni una carpeta `dist`.
Netlify publica directamente el contenido de la raíz del repositorio.

## Estructura requerida en GitHub

```text
index.html
netlify.toml
robots.txt
README.md
assets/
  css/styles.css
  js/animals.js
  js/main.js
  images/
  icons/
  documents/
```

`index.html` y `netlify.toml` deben estar directamente en la raíz del repositorio.

## Configuración Netlify

El archivo `netlify.toml` define:

- Build command: `echo 'ARCY static site ready'`
- Publish directory: `.`

No agregues un comando `npm run build` y no configures `dist` como directorio de publicación.

## Actualización del repositorio

1. Elimina el contenido anterior del repositorio, conservando la rama `main`.
2. Descomprime el ZIP.
3. Sube todos los archivos y carpetas descomprimidos a la raíz de `main`.
4. Confirma que `index.html` aparezca en la página principal del repositorio.
5. Realiza el commit.
6. Netlify detectará el commit y publicará el sitio automáticamente.

## Contenido dinámico

Los animales adoptables se editan en `assets/js/animals.js`. Los registros actuales son marcadores y no se presentan como animales reales.
