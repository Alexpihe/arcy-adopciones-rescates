# Guía GitHub → Netlify

## 1. Subir a GitHub

Sube **el contenido de esta carpeta**, de modo que `index.html` quede en la raíz del repositorio.

```bash
git init
git add .
git commit -m "feat: landing inicial de ARCY"
git branch -M main
git remote add origin https://github.com/Alexpihe/arcy-adopciones-rescates.git
git push -u origin main
```

## 2. Conectar Netlify

En Netlify:

1. Abre el proyecto de ARCY.
2. Entra a **Project configuration → Build & deploy → Continuous deployment**.
3. Selecciona **Link repository**.
4. Autoriza GitHub y elige `Alexpihe/arcy-adopciones-rescates`.
5. Selecciona la rama `main`.

La configuración debe quedar así:

```text
Production branch: main
Base directory: vacío
Build command: vacío
Publish directory: .
```

`netlify.toml` ya establece `publish = "."`.

## 3. Verificar

Cada `git push` a `main` debe generar un despliegue automático. En el registro del despliegue, Netlify debe publicar `index.html` desde la raíz y no debe ejecutar Vite ni buscar una carpeta `dist`.

## 4. Diagnóstico

Si aparece la página sin estilos:

- comprueba que `assets/css/styles.css` exista en GitHub;
- comprueba que `index.html` esté en la raíz;
- revisa que el directorio publicado sea `.`;
- evita subir una carpeta contenedora adicional.

Si aparece “Page not found”, confirma que el despliegue incluya `index.html`.
