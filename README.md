# ARCY Adopciones y Rescates

Sitio web multipágina estático para ARCY, preparado para el flujo **GitHub → Netlify**.

## Páginas

- `index.html`: introducción de ARCY.
- `nosotros.html`: quiénes somos, misión, visión y nuestra huella.
- `adoptables.html`: catálogo y proceso de adopción.
- `eventos.html`: charlas, bazares, campañas, ferias y Huellatón Tizayuca 2026.
- `contacto.html`: información de contacto y redes sociales.
- `404.html`: página de error.

## Desarrollo local

No requiere instalación ni compilación. Puede abrirse con un servidor local:

```bash
python -m http.server 8080
```

Después abre `http://localhost:8080`.

## GitHub → Netlify

1. Sube todo el contenido de esta carpeta a la raíz del repositorio.
2. Conecta la rama `main` en Netlify.
3. Usa `echo 'ARCY static site ready'` como **Build command**.
4. Usa `.` como **Publish directory**.

`netlify.toml` ya declara el directorio de publicación.

## Actualización de adoptables

Los datos se agregan en `assets/js/animals.js`. No se incluyen animales ficticios.

## Documentos

- Contrato de adopción: `assets/documents/contrato-adopcion-responsable-arcy.pdf`.
- Proyecto Huellatón: `assets/documents/proyecto-huellaton-tizayuca-2026.pdf`.

## Pendiente de validación

El programa del PDF y el cartel proporcionado contienen diferencias de horarios y cifras. La página utiliza el programa del proyecto PDF y marca los datos sujetos a confirmación antes de una difusión definitiva.

## Catálogo de adoptables

La página `adoptables.html` contiene 14 perfiles extraídos del catálogo proporcionado por ARCY. Cada ficha incluye fotografía, edad disponible, sexo, características, compatibilidad, historia de rescate y un enlace directo a WhatsApp con un mensaje personalizado para el animal seleccionado.

Las fotografías optimizadas están en:

```text
assets/images/adoptables/
```

Consulta `docs/NOTAS-CATALOGO.md` para revisar datos que requieren confirmación antes de futuras actualizaciones.

## Donaciones

Todas las páginas incluyen una pestaña deslizable **Donar**. El panel muestra el código QR de PayPal proporcionado por ARCY, un enlace directo a PayPal y una indicación para verificar el nombre de la persona receptora antes de confirmar la operación.
