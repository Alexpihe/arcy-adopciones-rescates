# Guía GitHub → Netlify

## Reemplazar el repositorio

1. Elimina los archivos anteriores del repositorio.
2. Descomprime el ZIP entregado.
3. Sube el contenido descomprimido directamente a la raíz.
4. Confirma que `index.html`, `nosotros.html`, `adoptables.html`, `eventos.html`, `contacto.html` y `netlify.toml` se vean en la raíz.
5. Haz commit en la rama `main`.

No subas el ZIP dentro del repositorio y no dejes una carpeta contenedora adicional.

## Configuración en Netlify

- Production branch: `main`
- Base directory: vacío
- Build command: `echo 'ARCY static site ready'`
- Publish directory: `.`

Después del commit, Netlify desplegará automáticamente el sitio.
