# Guía de reemplazo completo: GitHub → Netlify

## 1. Reemplazar GitHub

En `Alexpihe/arcy-adopciones-rescates`, elimina los archivos existentes y carga el contenido descomprimido de este paquete. No subas el ZIP como archivo.

La raíz debe mostrar `index.html`, `netlify.toml`, `README.md`, `robots.txt` y la carpeta `assets`.

## 2. Verificar Netlify

El proyecto debe estar enlazado al repositorio y a la rama `main`.

El archivo `netlify.toml` controla el despliegue. La configuración efectiva es:

```text
Base directory: vacío
Build command: echo 'ARCY static site ready'
Publish directory: .
Production branch: main
```

## 3. Lanzar un despliegue limpio

En Netlify: `Deploys → Trigger deploy → Clear cache and deploy site`.

## 4. Diagnóstico

Si aparece un error, revisa que no se conserve `npm run build` ni `dist` en la configuración del proyecto. `netlify.toml` debe estar en la raíz del repositorio.
