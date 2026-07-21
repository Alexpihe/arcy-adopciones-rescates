# ARCY Adopciones y Rescates

Landing page estática y responsive para presentar a ARCY, publicar perros y gatos en adopción, comunicar próximos eventos y guiar el proceso de adopción responsable.

## Corrección importante

Esta versión no depende de una compilación para mostrar estilos o imágenes. `index.html` utiliza rutas relativas y puede abrirse directamente con doble clic o publicarse desde GitHub a Netlify.

## Vista local rápida

1. Descomprime el proyecto.
2. Abre `index.html` en el navegador.

Para desarrollo con recarga automática:

```bash
npm install
npm run dev
```

## Estructura

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/animals.js
│   ├── js/main.js
│   ├── images/
│   ├── icons/
│   └── documents/
├── docs/
├── tests/
├── netlify.toml
└── package.json
```

## Editar animales

Actualiza `assets/js/animals.js`. No publiques nombres, edades, descripciones o fotografías hasta que ARCY confirme la información.

## Flujo de adopción

1. La persona selecciona **Quiero adoptar**.
2. Se muestra el aviso de privacidad.
3. La descarga se habilita únicamente después de aceptar.
4. Se descarga el contrato oficial.
5. Aparece la indicación para imprimir, llenar, escanear y enviar el documento al WhatsApp **55 2329 8138**.

## Pruebas

```bash
npm run check
npm test
```

## Netlify

No hay paso de compilación. Netlify publica directamente la raíz del repositorio conforme a `netlify.toml`.

Consulta `docs/GUIA-DESPLIEGUE.md`.
