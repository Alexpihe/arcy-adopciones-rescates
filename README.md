# ARCY Adopciones y Rescates

Landing page estática preparada para un flujo automático **GitHub → Netlify**.

## Estructura que debe quedar en la raíz de GitHub

```text
index.html
package.json
package-lock.json
netlify.toml
.nvmrc
assets/
scripts/
README.md
PENDIENTES.md
```

No subas `node_modules/`, `dist/`, `.netlify/` ni el archivo ZIP.

## Validación local

```bash
npm ci
npm run check
npm run build
```

La compilación genera `dist/index.html` y `dist/assets/`.

## Configuración de Netlify

El archivo `netlify.toml` controla la configuración y evita depender de valores anteriores del panel:

- Base directory: `.`
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `22`

Conecta el repositorio `Alexpihe/arcy-adopciones-rescates`, selecciona la rama `main` y ejecuta **Clear cache and deploy site** después de reemplazar los archivos anteriores.

## Edición del catálogo

Los animales se editan en `assets/js/animals.js`. No publiques nombres, edades, descripciones o fotografías hasta que ARCY confirme la información.

## Contrato

El PDF oficial está en:

`assets/documents/contrato-adopcion-responsable-arcy.pdf`
