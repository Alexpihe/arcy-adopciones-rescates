# Auditoría del flujo GitHub → Netlify

## Problema encontrado en el repositorio anterior

El repositorio tenía una configuración ambigua:

- `package.json` no definía `npm run build`.
- `netlify.toml` no declaraba un comando de compilación.
- El proyecto de Netlify podía conservar el comando `npm run build` de configuraciones anteriores.
- Vite y Playwright estaban incluidos aunque no eran necesarios para publicar la landing.

Si Netlify ejecutaba el comando anterior, la compilación fallaba porque el script `build` no existía.

## Solución aplicada

La configuración ahora es explícita y reproducible:

1. Netlify clona la rama `main` desde GitHub.
2. Netlify usa Node.js 22.
3. Ejecuta `npm run build`.
4. `scripts/build.mjs` valida los recursos obligatorios.
5. El script crea `dist/index.html` y copia `assets/` a `dist/assets/`.
6. Netlify publica exclusivamente la carpeta `dist`.

No se usan dependencias externas durante la construcción.

## Configuración final

```toml
[build]
  base = "."
  command = "npm run build"
  publish = "dist"
```

## Comprobación local

```bash
npm ci
npm run check
npm run build
```

El resultado correcto debe contener:

```text
dist/
├── index.html
└── assets/
```
