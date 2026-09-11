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


## Catálogo de adoptables — septiembre 2026

El catálogo vigente contiene 13 adoptables: Zule, Manchas, Llanita, Gufy, Yuya, Panterita, Colmillo, Marcy, Margared, Lagrimitas, Lola, Luna y Gela. Los perfiles se cargan desde `assets/js/animals.js` y las fotografías están en `assets/images/adoptables/`.

Todas las fichas incluyen acceso directo a WhatsApp para iniciar el proceso de adopción.

## Donaciones

Todas las páginas incluyen una pestaña deslizable de donaciones con el QR de PayPal proporcionado por ARCY.
